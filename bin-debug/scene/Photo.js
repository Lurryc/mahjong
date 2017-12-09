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
 * brief:   头像
 * date:    2017-11-03
 * author:  徐为
 */
var game;
(function (game) {
    var Photo = (function (_super) {
        __extends(Photo, _super);
        //***********************************/
        function Photo() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/gameSkins/Photo.exml";
            return _this;
        }
        Photo.prototype.fOnUICreate = function () {
            this.visible = false;
        };
        Photo.prototype.fResetReady = function (ready) {
            if (ready === void 0) { ready = true; }
            if (ready)
                this.m_btnReady.label = "已准备";
            else
                this.m_btnReady.label = "未准备";
        };
        Photo.prototype.fResetUi = function (useInof) {
            if (game.GameManager.fGetIns().m_pCreatorPos == useInof.m_pPosition)
                this.fSetClickButton(this.m_btnReady);
            this.visible = true;
            this.m_labPos.text = Utils.fGetNameByDesktopPos(useInof.m_pPosition);
            this.m_labZhuang.visible = false;
            this.m_labUid.text = useInof.m_sUid;
            this.m_pPlayPos = useInof.m_pPosition;
            if (useInof.m_nStatus) {
                this.m_btnReady.label = '已准备';
            }
            else
                this.m_btnReady.label = '未准备';
        };
        Photo.prototype.fOnClick = function (button) {
            console.info('已准备');
            var pack = game.Packet.fCreateAction(game.Packet.s_ReadyActive);
            var status = game.GameManager.fGetIns().fGetStatusByPos(this.m_pPlayPos);
            if (status == 1)
                status = 0;
            else
                status = 1;
            pack.m_nReadyNum = 1;
            pack.m_aReadyPos.push(this.m_pPlayPos);
            pack.fGetHead().m_nErrcode = status;
            Main.fGetIns().m_oGameSocket.fSendPkt(pack);
        };
        return Photo;
    }(game.Scene));
    game.Photo = Photo;
    __reflect(Photo.prototype, "game.Photo");
})(game || (game = {}));
//# sourceMappingURL=Photo.js.map