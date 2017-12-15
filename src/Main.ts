
declare function fGetStack();
class Main extends eui.UILayer {

     private static s_Ins:Main;
     public m_oGameSocket:game.GameSocket;

     public static fGetIns(){
        return Main.s_Ins;
     }
    //  加载进度页面
    private loadingView: LoadingUI;
    protected createChildren(): void {
        super.createChildren();
        console.info('hahahaa');
        Main.s_Ins = this;
        // super.createChildren();

        
    
          this.m_oGameSocket = new game.GameSocket();
       
       //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter",assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");

      
      
     // game.GameManager.fGetIns().fGetUid()
    }   
    //tip:当配置文件加载完成===>开始预加载皮肤主题资源  &  preload资源组
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
       
       //加载皮肤主题配置文件
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }
    private isThemeLoadEnd: boolean = false;
    
    //主题文件加载完成,开始预加载
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
   
   //preload资源组加载完成
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }
    //tip:onResourceLoadComplete和onThemeLoadComplete都执行createScene函数是因为,两个方法都是异步的无法得知谁先加载完毕,通过对is...的判断,全为true则继续执行
    private createScene(){
        if(this.isThemeLoadEnd && this.isResourceLoadEnd){
            this.startCreateScene();
        }
    }
    
    //项目加载出错,输出路径
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    
    //资源组加载出错,输出资源组的名字
    private onResourceLoadError(event:RES.ResourceEvent):void {
      
        console.warn("Group:" + event.groupName + " has failed to load");
       
       //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    }
   
   //preload资源组加载进度
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }else
        //加载场景中将加载进度百分比保存
            this.m_oLoadingScene.fSetProgress(event.itemsLoaded/event.itemsTotal);
    }
    private textfield:egret.TextField;

    private fKeyBoard(event:egret.Event){
       console.info(event.target.inputs[0])
    }
    
    //创建场景界面
    //tip:核心代码处
    protected startCreateScene(): void {
        this.addChild(new game.MyTable)


/*
        console.warn('startCreateScene');
   
        //初始化各种数据包(吃牌数据包,加入房间数据包,打牌准备完毕数据包)
        game.Packet.fInitPacketMap();

      
        egret.ExternalInterface.call("sendToNative", "message from js");
      
        //   var card = game.CardBase.fCreateCard(game.CardBase.s_Type_Feng, 'w_1_0');
        //this.m_oKeyBoard = new KeyBoard();
		//this.m_oKeyBoard.addEventListener(KeyBoard.onkeydown,this.fKeyBoard,this);
       
      //  var load = new game.LoadingScene();
        //this.addChild(load);

        this.m_oGameLayer = new eui.UILayer;//qs:new className和new className()区别
        this.addChild(this.m_oGameLayer);

        this.m_oDialogLayer = new eui.Group;
      
        this.addChild(this.m_oDialogLayer);
    
        game.ShowLayer.fSetDialogLayer(this.m_oDialogLayer);

        this.m_oLoadingLayer = new eui.Group;
        this.addChild(this.m_oLoadingLayer); 
      
        
      
        //this.m_oLoadingLayer.visible = false;
    
     
    
        setTimeout(function(){
              game.GameScenenManager.fGetIns().fEnterScene(game.GameSceneName.LOG);//控制每次切换场景,进行场景的加载(场景加载的入口代码)
        }, 10)

        var descJson = RES.getRes("cards_json");
        var descArray: JSON[] = descJson.card;
        var index = 0;
        var prority = 0;
        var name;
        for(var i in descArray)//qs:有什么用处????????
        {
            if(name != descArray[i]['value'])
               index = 0;
            for(var j = 0; j < 4; j++)
            {
           //     game.GameCardManager.fGetIns().fPushCard(descArray[i]['value'] + '_' + index, descArray[i]['type'], prority);
                index ++;
            }
            name = descArray[i]['value'];
            

            prority ++;
        }

        var cards =   game.GameCardManager.fGetIns().m_oCards;

*/
    }
   public GetShowTipLayer()
   {
      return this.m_oDialogLayer;
   }

    public m_oGameLayer:eui.UILayer;
    private m_oDialogLayer:eui.Group;
    private m_oLoadingLayer:eui.Group;
   
    private m_oKeyBoard:KeyBoard;

    private m_oLoadingScene:game.LoadingScene;

    public fLoadIngVisible(visi:boolean):void//控制是否显示显示加载进度
    {
        this.m_oLoadingLayer.visible = visi;

        if(!visi)
        {
            if(this.m_oLoadingScene)
            {
               this.m_oLoadingScene.parent.removeChild(this.m_oLoadingScene);
               this.m_oLoadingScene = null;
            }
        }
        else
        {
          
              this.m_oLoadingScene = new game.LoadingScene();
              this.m_oLoadingLayer.addChild(this.m_oLoadingScene);
        }
       
    }

     public fLoadResGroup(groupName, showLoading:boolean, onCompleteCallback:Function){
        if(!groupName || groupName == "")
        {
            if(onCompleteCallback) onCompleteCallback.call(null);
            this.fLoadIngVisible(false);
            return;
        }
        this.fLoadIngVisible(true);
        var self = this;
        var onResLoadComplete = function(event:RES.ResourceEvent){
            if(event.groupName == groupName){
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, onResLoadComplete, self);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, self.onResourceLoadError, self);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, self.onResourceProgress, self);
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, self.onItemLoadError, self);
                if(onCompleteCallback) onCompleteCallback.call(null);
    
               var tw = egret.Tween.get( this.m_oLoadingScene );
          
               tw.wait(500).to( {alpha:0.1}, 1000,egret.Ease.sineIn ).call(function(){ self.fLoadIngVisible(false);});
               
            }
        }

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, onResLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(groupName);
       
    }

   
  
}
