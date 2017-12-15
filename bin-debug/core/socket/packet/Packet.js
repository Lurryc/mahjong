var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * brief:   通信数据包头
     * date:    2017-10-31
     * author:  徐为
     */
    var PacketHead = (function () {
        function PacketHead() {
            this.m_nErrcode = 0;
        }
        /********************************/
        PacketHead.prototype.fWrite = function () {
            var by = new game.GameByteArray;
            by.writeShort(this.m_nPktType);
            by.writeInt(this.m_nErrcode);
            return by;
        };
        PacketHead.prototype.fRead = function (by) {
            this.m_nPktLen = by.readShort();
            this.m_nPktType = by.readShort();
            this.m_nErrcode = by.readInt();
        };
        return PacketHead;
    }());
    __reflect(PacketHead.prototype, "PacketHead");
    /**
     * brief:   通信基础数据
     * date:    2017-10-31
     * author:  徐为
     */
    var Packet = (function () {
        function Packet() {
            this.m_oHead = new PacketHead;
            /********************************/
        }
        Packet.prototype.fWrite = function () {
            return this.m_oHead.fWrite();
        };
        Packet.prototype.fRead = function (by) {
            this.m_oHead.fRead(by);
        };
        Packet.prototype.fGetHead = function () {
            return this.m_oHead;
        };
        Packet.fInitPacketMap = function () {
            if (Packet.s_aPacketMap.length)
                return;
            //将所有的数据包放入数组中保存 
            Packet.s_aPacketMap.push([game.Packet.s_Eat, function () { return new game.C2s_EatAction; }]);
            Packet.s_aPacketMap.push([game.Packet.s_JoinRoom, function () { return new game.C2s_JoinRoomPacket; }]);
            Packet.s_aPacketMap.push([game.Packet.s_PlayHand, function () { return new game.C2s_PlayHandAction; }]);
            Packet.s_aPacketMap.push([game.Packet.s_ReadyPlay, function () { return new game.C2s_ReadyPacket; }]);
            Packet.s_aPacketMap.push([game.Packet.s_LaunchPai, function () { return new game.C2s_LaunchPaiPacket; }]);
            Packet.s_aPacketMap.push([game.Packet.s_CreateRoom, function () { return new game.C2s_CreateRoomPacket; }]);
            Packet.s_aPacketMap.push([game.Packet.s_ReadyActive, function () { return new game.S2C_ReadyActive; }]);
        };
        Packet.fCreateAction = function (type) {
            var action = null;
            if (!Packet.s_aPacketMap.length) {
                console.warn('Packet.s_aPacketMap 未初始化');
                return null;
            }
            for (var i in Packet.s_aPacketMap) {
                if (Packet.s_aPacketMap[i][0] == type)
                    action = Packet.s_aPacketMap[i][1]();
            }
            if (action == null) {
                console.warn('C2s_ActionBase.CreateAction fail ' + type);
            }
            return action;
        };
        Packet.prototype.fGetActionType = function () {
            return this.m_sActionType;
        };
        Packet.fCreatePkt = function (type) {
            var p = null;
            switch (type) {
                case game.Protocol.s_C2S_HEARDBEAT:
                    p = new game.C2s_HeartBeat;
                    break;
                case game.Protocol.s_C2S_CREATEROOM:
                    p = new game.C2s_CreateRoomPacket;
                    break;
                case game.Protocol.s_C2S_JOINROOM:
                    p = new game.C2s_JoinRoomPacket;
                    break;
                case game.Protocol.s_C2S_ROOMINFO:
                    p = new game.S2C_RoomInfoPacket;
                    break;
                case game.Protocol.s_C2S_HEARDBEAT:
                    p = new game.C2s_HeartBeat;
                    break;
                case game.Protocol.s_C2S_Ready:
                    p = new game.S2C_ReadyActive;
                    break;
                case game.Protocol.s_C2S_StartHand:
                    p = new game.C2s_ReadyPacket;
                    break;
                case game.Protocol.s_C2S_MOPAI:
                    p = new game.C2s_TouchPacket;
                    break;
                default:
                    alert("fCreatePkt fail" + type);
            }
            return p;
        };
        Packet.s_aPacketMap = [];
        /********************************/
        Packet.s_Eat = "eat_pai";
        Packet.s_PlayHand = "chu_pai";
        Packet.s_ReadyPlay = "ready";
        Packet.s_LaunchPai = 'launch_pai';
        Packet.s_CreateRoom = "create_room";
        Packet.s_JoinRoom = 'join_room';
        Packet.s_BaseAct = "base_act";
        Packet.s_Login = "login";
        Packet.s_Heart = "heart";
        Packet.s_RoomInfo = "roominfo";
        Packet.s_ReadyActive = "readyActive";
        Packet.s_Touch = "touch_pai"; //摸排
        return Packet;
    }());
    game.Packet = Packet;
    __reflect(Packet.prototype, "game.Packet");
})(game || (game = {}));
//# sourceMappingURL=Packet.js.map