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
 * brief:   大厅
 * date:    2017-11-17
 * author:  徐为
 */
var game;
(function (game) {
    var HallScene = (function (_super) {
        __extends(HallScene, _super);
        //***********************************/
        function HallScene() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/gameSkins/scene/HallScene.exml";
            return _this;
        }
        /**该场景需要加载的资源组 */
        HallScene.prototype.fSceneResGroup = function () {
            return "hall";
        };
        HallScene.prototype.fOnUICreate = function () {
            this.fSetClickButton(this.m_btnJoin);
            this.fSetClickButton(this.m_btnCreate);
            var self = this;
            this.m_oHandle.fReceiveOnce(this, function (act) {
                //self.m_oGameInitLayer.fGameReady();
            }, game.C2s_ActionBase.s_CreateRoom);
        };
        HallScene.prototype.fOnClick = function (button) {
            var layer;
            if (button == this.m_btnCreate) {
                /*  var readPkt:C2s_CreateRoomPacket =  <C2s_CreateRoomPacket>Packet.CreateAction(Packet.s_CreateRoom);
                  readPkt.m_gameName = GameName.e_ganYuMj;
                  readPkt.m_gameType = GameStyle.e_createRooom;
                  readPkt.m_nCircle = 4;
                  readPkt.m_nPayStyle = 0;
                  Main.fGetIns().m_oGameSocket.m_oActionMoudle.fCreateRoom(<C2s_CreateRoomPacket>readPkt);*/
                layer = new game.CreateRoomLayer();
                layer.fShow();
            }
            else if (button == this.m_btnJoin) {
                layer = new game.JoinRoomLayer();
                layer.fShow();
            }
        };
        return HallScene;
    }(game.Scene));
    game.HallScene = HallScene;
    __reflect(HallScene.prototype, "game.HallScene");
})(game || (game = {}));
//# sourceMappingURL=HallScene.js.map