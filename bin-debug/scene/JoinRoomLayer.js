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
 * brief:   创建层
 * date:    2017-11-15
 * author:  徐为
 */
var game;
(function (game) {
    var JoinRoomLayer = (function (_super) {
        __extends(JoinRoomLayer, _super);
        //***********************************/
        function JoinRoomLayer() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/gameSkins/layer/JoinRoom.exml";
            return _this;
        }
        JoinRoomLayer.prototype.fOnUICreate = function () {
            this.fSetClickButton(this.m_btnClose);
            this.fSetClickButton(this.m_btnJoin);
            var self = this;
            this.m_oHandle.fReceiveOnce(this, function (act) {
                self.m_oCreateRoomPacket = act.m_oDisObj;
                if (self.m_oCreateRoomPacket.fGetHead().m_nErrcode) {
                    game.TipShow.fShow('加入房间失败' + self.m_oCreateRoomPacket.fGetHead().m_nErrcode);
                }
                else {
                    this.fExit();
                    game.GameScenenManager.fGetIns().fEnterScene(game.GameSceneName.MAIN);
                }
            }, game.Packet.s_JoinRoom);
        };
        JoinRoomLayer.prototype.fOnClick = function (button) {
            if (button == this.m_btnClose)
                this.fExit();
            else if (button == this.m_btnJoin) {
                var pack = game.Packet.fCreateAction(game.Packet.s_JoinRoom);
                pack.m_gameName = parseInt(this.m_inputName.text);
                pack.m_sRoomId = this.m_inputRoomId.text;
                //   pack.m_nCircle = parseInt(this.m_inputCircle.text);
                //  pack.fWrite();
                Main.fGetIns().m_oGameSocket.fSendPkt(pack);
            }
        };
        return JoinRoomLayer;
    }(game.ShowLayer));
    game.JoinRoomLayer = JoinRoomLayer;
    __reflect(JoinRoomLayer.prototype, "game.JoinRoomLayer");
})(game || (game = {}));
//# sourceMappingURL=JoinRoomLayer.js.map