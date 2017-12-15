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
 * brief:   头像层
 * date:    2017-12-04
 * author:  徐为
 */
var game;
(function (game) {
    var PhotoScene = (function (_super) {
        __extends(PhotoScene, _super);
        //***********************************/
        function PhotoScene() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/gameSkins/scene/MainScene/PhotoScene.exml";
            var a = new game.JianCard(0, 0, 0);
            return _this;
        }
        PhotoScene.prototype.fOnUICreate = function () {
            var pos = game.GameManager.fGetIns().m_pCreatorPos;
            if (!Utils.fNotUsefunData(pos)) {
                var photo = new game.Photo();
                this.m_gopDown.addChild(photo);
                //  photo.fResetUi(GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo[pos]);
            }
            this.m_oHandle.fReceiveMessage(this, this.fRoomPacket, game.C2s_ActionBase.s_RoomInfo);
        };
        PhotoScene.prototype.fRoomPacket = function (act) {
            var roomInf = act.m_oDisObj;
            game.GameManager.fGetIns().fSetRoomInfo(roomInf);
            this.m_oMainScene.fResetRoomIdUi(game.GameManager.fGetIns().fGetRoomInfo().m_sRoomId);
            var userInfo = roomInf.m_aPlayerInfo;
            for (var i = 0; i < userInfo.length; i++) {
                if (userInfo[i].m_sUid == game.GameManager.fGetIns().m_sCreatorUId)
                    game.GameManager.fGetIns().m_pCreatorPos = userInfo[i].m_pPosition;
            }
            this.m_oMainScene.fHideInit();
            for (var i = 0; i < userInfo.length; i++) {
                var pos = Utils.fDeskPosToGamePos(game.GameManager.fGetIns().m_pCreatorPos, userInfo[i].m_pPosition);
                var gop = this.getChildByName("gop_" + pos);
                if (gop.numChildren > 0) {
                    var photo = gop.getChildAt(0);
                    photo.fResetUi(userInfo[i]);
                }
                else {
                    var photo = new game.Photo();
                    photo.fResetUi(userInfo[i]);
                    gop.addChild(photo);
                }
            }
            console.info('roomInfo');
        };
        PhotoScene.prototype.fAddPhoto = function (photo, pos, firstPlayer) {
            var gop = (this.getChildByName('gop_' + pos));
            gop.addChild(photo);
        };
        PhotoScene.prototype.fOnClick = function (button) {
        };
        return PhotoScene;
    }(game.Scene));
    game.PhotoScene = PhotoScene;
    __reflect(PhotoScene.prototype, "game.PhotoScene");
})(game || (game = {}));
//# sourceMappingURL=PhotoScene.js.map