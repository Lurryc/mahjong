var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * brief:   创建房间网络逻辑处理
     * date:    2017-11-01
     * author:  徐为
     */
    var CreateRoomMoudle = (function () {
        function CreateRoomMoudle() {
            game.GameSocket.s_aProtocols[game.Protocol.s_C2S_CREATEROOM] = [this, this.fCreateRoom];
            this.m_oHandle = new game.Handle();
        }
        CreateRoomMoudle.prototype.fCreateRoom = function (pkt) {
            game.GameManager.fGetIns().fSetGameName(pkt.m_gameName);
            game.GameManager.fGetIns().fSetGameStyle(pkt.m_gameType);
            game.GameManager.fGetIns().fGetRoomInfo().m_nPayStyle = pkt.m_nPayStyle;
            game.GameManager.fGetIns().fGetRoomInfo().m_nCircle = pkt.m_nCircle;
            game.GameManager.fGetIns().fGetRoomInfo().m_sRoomId = pkt.m_sRoomId;
            var useinfo = new game.C2s_UserInfoPacket();
            useinfo.m_sUid = game.GameManager.fGetIns().m_sCreatorUId;
            useinfo.m_nStatus = 0;
            useinfo.m_pPosition = game.GameManager.fGetIns().m_pCreatorPos;
            game.GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo.push(useinfo);
            this.m_oHandle.fSendMessage(pkt.fGetActionType(), pkt);
            this.m_oHandle.fSendMessage(game.Packet.s_RoomInfo, game.GameManager.fGetIns().fGetRoomInfo());
        };
        return CreateRoomMoudle;
    }());
    game.CreateRoomMoudle = CreateRoomMoudle;
    __reflect(CreateRoomMoudle.prototype, "game.CreateRoomMoudle");
})(game || (game = {}));
//# sourceMappingURL=CreateRoomMoudle.js.map