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
/**
 * brief:   麻将发牌层
 * date:    2017-11-15
 * author:  徐为
 */
var game;
(function (game) {
    var LaunchPaiLayer = (function (_super) {
        __extends(LaunchPaiLayer, _super);
        //***********************************/
        function LaunchPaiLayer() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/gameSkins/layer/LaunchPaiLayer.exml";
            return _this;
        }
        LaunchPaiLayer.prototype.fOnUICreate = function () {
            this.m_gopDown.visible = false;
            var self = this;
            this.m_oHandle.fReceiveOnce(this, function (act) {
                self.m_gopDown.visible = true;
                self.m_oLaunchPacket = act.m_oDisObj;
                var cards = self.m_oLaunchPacket.fGetCards();
                for (var i in cards) {
                    // self.fAddReadCards(cards[i].fGetType(), cards[i].fGetValue(), cards[i].m_pBelong);
                }
            }, game.C2s_ActionBase.s_LaunchPai);
        };
        LaunchPaiLayer.prototype.fAddReadCards = function (type, value, dir) {
            if (dir == game.PlayePosition.e_Down) {
                var index = this.m_gopDown.numChildren;
                var img = new eui.Image(RES.getRes('majiangzi_json.pai_user_wan9_png'));
                img.x = index * 74;
                this.m_gopDown.addChild(img);
                console.info("index= " + index);
            }
        };
        LaunchPaiLayer.prototype.fLaunchPai = function () {
            this.m_gopDown.visible = true;
            for (var i = 1; i < 12; i++) {
                this.fAddReadCards('', '', game.PlayePosition.e_Up);
            }
        };
        LaunchPaiLayer.prototype.fOnClick = function (button) {
            console.info('button');
        };
        return LaunchPaiLayer;
    }(game.Scene));
    game.LaunchPaiLayer = LaunchPaiLayer;
    __reflect(LaunchPaiLayer.prototype, "game.LaunchPaiLayer");
})(game || (game = {}));
//# sourceMappingURL=LaunchPaiLayer.js.map