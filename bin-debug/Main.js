var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isThemeLoadEnd = false;
        _this.isResourceLoadEnd = false;
        return _this;
    }
    Main.fGetIns = function () {
        return Main.s_Ins;
    };
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        console.info('hahahaa');
        Main.s_Ins = this;
        // super.createChildren();
        this.m_oGameSocket = new game.GameSocket();
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        // game.GameManager.fGetIns().fGetUid()
    };
    //tip:当配置文件加载完成===>开始预加载皮肤主题资源  &  preload资源组
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //加载皮肤主题配置文件
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    //主题文件加载完成,开始预加载
    Main.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    //preload资源组加载完成
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    };
    //tip:onResourceLoadComplete和onThemeLoadComplete都执行createScene函数是因为,两个方法都是异步的无法得知谁先加载完毕,通过对is...的判断,全为true则继续执行
    Main.prototype.createScene = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    };
    //项目加载出错,输出路径
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    //资源组加载出错,输出资源组的名字
    Main.prototype.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    //preload资源组加载进度
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
        else
            //加载场景中将加载进度百分比保存
            this.m_oLoadingScene.fSetProgress(event.itemsLoaded / event.itemsTotal);
    };
    Main.prototype.fKeyBoard = function (event) {
        console.info(event.target.inputs[0]);
    };
    //创建场景界面
    //tip:核心代码处
    Main.prototype.startCreateScene = function () {
        console.warn('startCreateScene');
        //储存各种数据包(吃牌数据包,加入房间数据包,打牌准备完毕数据包)
        game.Packet.fInitPacketMap();
        egret.ExternalInterface.call("sendToNative", "message from js");
        //   var card = game.CardBase.fCreateCard(game.CardBase.s_Type_Feng, 'w_1_0');
        //this.m_oKeyBoard = new KeyBoard();
        //this.m_oKeyBoard.addEventListener(KeyBoard.onkeydown,this.fKeyBoard,this);
        //  var load = new game.LoadingScene();
        //this.addChild(load);
        this.m_oGameLayer = new eui.UILayer; //todo:new className和new className()区别
        this.addChild(this.m_oGameLayer);
        this.m_oDialogLayer = new eui.Group;
        this.addChild(this.m_oDialogLayer);
        game.ShowLayer.fSetDialogLayer(this.m_oDialogLayer);
        this.m_oLoadingLayer = new eui.Group;
        this.addChild(this.m_oLoadingLayer);
        //this.m_oLoadingLayer.visible = false;
        setTimeout(function () {
            game.GameScenenManager.fGetIns().fEnterScene(game.GameSceneName.LOG);
        }, 10);
        var descJson = RES.getRes("cards_json");
        var descArray = descJson.card;
        var index = 0;
        var prority = 0;
        var name;
        for (var i in descArray) {
            if (name != descArray[i]['value'])
                index = 0;
            for (var j = 0; j < 4; j++) {
                //     game.GameCardManager.fGetIns().fPushCard(descArray[i]['value'] + '_' + index, descArray[i]['type'], prority);
                index++;
            }
            name = descArray[i]['value'];
            prority++;
        }
        var cards = game.GameCardManager.fGetIns().m_oCards;
    };
    Main.prototype.GetShowTipLayer = function () {
        return this.m_oDialogLayer;
    };
    Main.prototype.fLoadIngVisible = function (visi) {
        this.m_oLoadingLayer.visible = visi;
        if (!visi) {
            if (this.m_oLoadingScene) {
                this.m_oLoadingScene.parent.removeChild(this.m_oLoadingScene);
                this.m_oLoadingScene = null;
            }
        }
        else {
            this.m_oLoadingScene = new game.LoadingScene();
            this.m_oLoadingLayer.addChild(this.m_oLoadingScene);
        }
    };
    Main.prototype.fLoadResGroup = function (groupName, showLoading, onCompleteCallback) {
        if (!groupName || groupName == "") {
            if (onCompleteCallback)
                onCompleteCallback.call(null);
            this.fLoadIngVisible(false);
            return;
        }
        this.fLoadIngVisible(true);
        var self = this;
        var onResLoadComplete = function (event) {
            if (event.groupName == groupName) {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, onResLoadComplete, self);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, self.onResourceLoadError, self);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, self.onResourceProgress, self);
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, self.onItemLoadError, self);
                if (onCompleteCallback)
                    onCompleteCallback.call(null);
                var tw = egret.Tween.get(this.m_oLoadingScene);
                tw.wait(500).to({ alpha: 0.1 }, 1000, egret.Ease.sineIn).call(function () { self.fLoadIngVisible(false); });
            }
        };
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, onResLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(groupName);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map