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
       * brief:   打牌准备完毕数据包
       * date:    2017-11-15
       * author:  徐为
     */
    var C2s_ReadyPacket = (function (_super) {
        __extends(C2s_ReadyPacket, _super);
        function C2s_ReadyPacket() {
            var _this = _super.call(this) || this;
            _this.m_aDiceNum = [];
            _this.m_aCardGroup = [];
            _this.m_oHead.m_nPktType = game.Protocol.s_C2S_StartHand;
            _this.m_sActionType = game.Packet.s_ReadyPlay;
            _this.m_aDiceNum[0] = -1;
            _this.m_aDiceNum[1] = -1;
            _this.m_nStartCardsNum = -1;
            _this.m_nStartGroupNum = 0;
            return _this;
        }
        C2s_ReadyPacket.prototype.fWrite = function () {
            var by = _super.prototype.fWrite.call(this);
            by.writeShort(this.m_aDiceNum[0]);
            by.writeShort(this.m_aDiceNum[1]);
            by.writeShort(this.m_nStartCardsNum);
            by.writeShort(this.m_nStartGroupNum);
            return by;
        };
        C2s_ReadyPacket.prototype.fRead = function (by) {
            _super.prototype.fRead.call(this, by);
            this.m_aDiceNum[0] = by.readShort();
            this.m_aDiceNum[1] = by.readShort();
            this.m_nStartCardsNum = by.readShort();
            this.m_nStartGroupNum = by.readShort();
            for (var i = 0; i < this.m_nStartGroupNum; i++) {
                var gup = new game.CardGroup();
                gup.fRead(by);
                this.m_aCardGroup.push(gup);
            }
            this.fVerifyNumber();
        };
        //成员变量校验
        C2s_ReadyPacket.prototype.fVerifyNumber = function () {
            /*if(this.m_nCardsCount != 0)
            {
                console.info('C2s_ReadyPacket this.m_nCardsCount != 0, = ' + this.m_nCardsCount);
                alert('C2s_ReadyPacket this.m_nCardsCount != 0, = ' + this.m_nCardsCount);
            }*/
        };
        return C2s_ReadyPacket;
    }(game.Packet));
    game.C2s_ReadyPacket = C2s_ReadyPacket;
    __reflect(C2s_ReadyPacket.prototype, "game.C2s_ReadyPacket");
})(game || (game = {}));
//# sourceMappingURL=C2s_ReadyPacket.js.map