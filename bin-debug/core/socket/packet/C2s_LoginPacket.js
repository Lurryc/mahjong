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
     * brief:   登录包数据
     * date:    2017-10-31
     * author:  徐为
     */
    var S2C_GameLogin = (function (_super) {
        __extends(S2C_GameLogin, _super);
        /********************************/
        /********************************/
        function S2C_GameLogin() {
            var _this = _super.call(this) || this;
            _this.m_oHead.m_nPktType = game.Protocol.s_C2S_LOGIN;
            _this.m_sActionType = game.Packet.s_Login;
            return _this;
        }
        S2C_GameLogin.prototype.fRead = function (by) {
            _super.prototype.fRead.call(this, by);
            var uid = by.readUTF();
            //   GameManager.fGetIns().fSetUid(uid);
            if (Utils.fNotUsefunData(uid))
                console.warn("NotUserfunData");
            var loginType = by.readShort();
            game.GameManager.fGetIns().m_nLoginType = loginType;
            if (Utils.fNotUsefunData(loginType))
                console.warn("NotUserfunData");
        };
        S2C_GameLogin.prototype.fWrite = function () {
            var by = _super.prototype.fWrite.call(this);
            // var uid = GameManager.fGetIns().fGetUid();
            // if(Utils.fNotUsefunData(uid))
            //  console.warn("NotUserfunData");
            // by.writeUTF(uid);
            var type = game.GameManager.fGetIns().m_nLoginType;
            if (Utils.fNotUsefunData(type))
                console.warn("NotUserfunData");
            by.writeShort(type);
            return by;
        };
        return S2C_GameLogin;
    }(game.Packet));
    game.S2C_GameLogin = S2C_GameLogin;
    __reflect(S2C_GameLogin.prototype, "game.S2C_GameLogin");
})(game || (game = {}));
//# sourceMappingURL=C2s_LoginPacket.js.map