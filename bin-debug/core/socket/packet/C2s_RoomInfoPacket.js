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
var game;
(function (game) {
    /**
     * brief:   房间信息数据包
     * date:    2017-10-31
     * author:  徐为
     */
    var S2C_RoomInfoPacket = (function (_super) {
        __extends(S2C_RoomInfoPacket, _super);
        /********************************/
        function S2C_RoomInfoPacket() {
            var _this = _super.call(this) || this;
            _this.m_aDice = []; //筛子的点数
            _this.m_aPlayerInfo = []; //玩家信息
            _this.m_aPlay = [];
            _this.m_oHead.m_nPktType = game.Protocol.s_C2S_ROOMINFO;
            _this.m_sActionType = game.Packet.s_RoomInfo;
            for (var i = game.PlayePosition.e_Up; i <= game.PlayePosition.e_Right; i++)
                _this.m_aPlay[i] = new game.Player(i);
            return _this;
        }
        S2C_RoomInfoPacket.prototype.fGetUserInfoByPos = function (pos) {
            for (var i in this.m_aPlayerInfo) {
                if (this.m_aPlayerInfo[i].m_pPosition == pos)
                    return this.m_aPlayerInfo[i];
            }
        };
        S2C_RoomInfoPacket.prototype.fCancelUserReadyStatus = function () {
            for (var i in this.m_aPlayerInfo) {
                this.m_aPlayerInfo[i].m_nStatus = 0;
            }
        };
        S2C_RoomInfoPacket.prototype.fRead = function (by) {
            _super.prototype.fRead.call(this, by);
            this.m_gameName = by.readShort();
            this.m_nPayStyle = by.readShort();
            this.m_nCircle = by.readShort();
            this.m_nNowCircle = by.readShort();
            this.m_sRoomId = by.readUTF();
            this.m_aDice[0] = by.readShort();
            this.m_aDice[1] = by.readShort();
            this.m_nPlayerNum = by.readShort();
            this.m_nBankerPos = by.readShort();
            for (var i = 0; i < this.m_nPlayerNum; i++) {
                this.m_aPlayerInfo[i] = new game.C2s_UserInfoPacket(); //.push(by.readUTF());
                this.m_aPlayerInfo[i].fRead(by, false);
            }
        };
        S2C_RoomInfoPacket.prototype.fWrite = function () {
            var by = _super.prototype.fWrite.call(this);
            by.writeShort(this.m_gameName);
            by.writeShort(this.m_nPayStyle);
            by.writeShort(this.m_nCircle);
            by.writeShort(this.m_nNowCircle);
            by.writeUTF(this.m_sRoomId);
            by.writeShort(this.m_aDice[0]);
            by.writeShort(this.m_aDice[1]);
            by.writeShort(this.m_nPlayerNum);
            by.writeShort(this.m_nBankerPos);
            for (var i = 0; i < this.m_nPlayerNum; i++) {
                this.m_aPlayerInfo[i].fWrite_0(by);
            }
            return by;
        };
        return S2C_RoomInfoPacket;
    }(game.Packet));
    game.S2C_RoomInfoPacket = S2C_RoomInfoPacket;
    __reflect(S2C_RoomInfoPacket.prototype, "game.S2C_RoomInfoPacket");
})(game || (game = {}));
//# sourceMappingURL=C2s_RoomInfoPacket.js.map