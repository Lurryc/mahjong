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
    var CreateRoomLayer = (function (_super) {
        __extends(CreateRoomLayer, _super);
        //***********************************/
        function CreateRoomLayer() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/gameSkins/layer/CreateRoom.exml";
            return _this;
        }
        CreateRoomLayer.prototype.fOnUICreate = function () {
            this.fSetClickButton(this.m_btnClose);
            this.fSetClickButton(this.m_btnCreateRoom);
            var self = this;
            this.m_oHandle.fReceiveOnce(this, function (act) {
                self.m_oCreateRoomPacket = act.m_oDisObj;
                if (self.m_oCreateRoomPacket.fGetHead().m_nErrcode) {
                    game.TipShow.fShow('创建房间失败' + self.m_oCreateRoomPacket.fGetHead().m_nErrcode);
                }
                else {
                    game.GameManager.fGetIns().m_pCreatorPos = self.m_oCreateRoomPacket.m_pPosition;
                    this.fExit();
                    game.GameScenenManager.fGetIns().fEnterScene(game.GameSceneName.MAIN);
                }
            }, game.Packet.s_CreateRoom);
        };
        CreateRoomLayer.prototype.fOnClick = function (button) {
            if (button == this.m_btnClose)
                this.fExit();
            else if (button == this.m_btnCreateRoom) {
                var pack = game.Packet.fCreateAction(game.Packet.s_CreateRoom);
                pack.m_gameName = parseInt(this.m_inputGameName.text);
                pack.m_nPayStyle = parseInt(this.m_inputPayStyle.text);
                pack.m_nCircle = parseInt(this.m_inputCircle.text);
                Main.fGetIns().m_oGameSocket.fSendPkt(pack);
                //  
            }
        };
        return CreateRoomLayer;
    }(game.ShowLayer));
    game.CreateRoomLayer = CreateRoomLayer;
    __reflect(CreateRoomLayer.prototype, "game.CreateRoomLayer");
})(game || (game = {}));
//# sourceMappingURL=CreateRoomLayer.js.map