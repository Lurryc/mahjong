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
       * brief:   吃数据包
       * date:    2017-11-09
       * author:  徐为
     */
    var C2s_EatAction = (function (_super) {
        __extends(C2s_EatAction, _super);
        function C2s_EatAction() {
            var _this = _super.call(this) || this;
            _this.m_oHead.m_nPktType = game.Protocol.s_C2S_EAT_PAI;
            _this.m_sActionType = game.Packet.s_Eat;
            return _this;
            //   this.m_nCardsCount = 3;
        }
        C2s_EatAction.prototype.fWrite = function () {
            var by = _super.prototype.fWrite.call(this);
            return by;
        };
        C2s_EatAction.prototype.fRead = function (by) {
            _super.prototype.fRead.call(this, by);
            this.fVerifyNumber();
        };
        //成员变量校验
        C2s_EatAction.prototype.fVerifyNumber = function () {
            // if(this.m_nCardsCount != 3)
            {
                //console.info('C2s_EatAction this.m_nCardsCount != 3, = ' + this.m_nCardsCount);
                // alert('C2s_EatAction this.m_nCardsCount != 3, = ' + this.m_nCardsCount);
            }
        };
        return C2s_EatAction;
    }(game.C2s_ActionBase));
    game.C2s_EatAction = C2s_EatAction;
    __reflect(C2s_EatAction.prototype, "game.C2s_EatAction");
})(game || (game = {}));
//# sourceMappingURL=C2s_EatPaiPacket.js.map