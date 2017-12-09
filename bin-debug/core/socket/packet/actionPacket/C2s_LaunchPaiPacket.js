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
       * brief:   发牌数据包
       * date:    2017-11-15
       * author:  徐为
     */
    var C2s_LaunchPaiPacket = (function (_super) {
        __extends(C2s_LaunchPaiPacket, _super);
        function C2s_LaunchPaiPacket() {
            var _this = _super.call(this) || this;
            _this.m_oHead.m_nPktType = game.Protocol.s_C2S_LaunchPai;
            _this.m_sActionType = game.Packet.s_LaunchPai;
            return _this;
            //  this.m_nCardsCount = 52;
        }
        C2s_LaunchPaiPacket.prototype.fWrite = function () {
            var by = _super.prototype.fWrite.call(this);
            return by;
        };
        C2s_LaunchPaiPacket.prototype.fRead = function (by) {
            _super.prototype.fRead.call(this, by);
            this.fVerifyNumber();
        };
        //成员变量校验
        C2s_LaunchPaiPacket.prototype.fVerifyNumber = function () {
            //   if(this.m_nCardsCount != 52)
            {
                //  console.info('C2s_LaunchPaiPacket this.m_nCardsCount != 52, = ' + this.m_nCardsCount);
                //  alert('C2s_LaunchPaiPacket this.m_nCardsCount != 52, = ' + this.m_nCardsCount);
            }
        };
        return C2s_LaunchPaiPacket;
    }(game.C2s_ActionBase));
    game.C2s_LaunchPaiPacket = C2s_LaunchPaiPacket;
    __reflect(C2s_LaunchPaiPacket.prototype, "game.C2s_LaunchPaiPacket");
})(game || (game = {}));
//# sourceMappingURL=C2s_LaunchPaiPacket.js.map