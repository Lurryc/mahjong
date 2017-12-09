var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
 * brief:   游戏名
 * date:    2017-11-09
 * author:  徐为
 */
    var GameName;
    (function (GameName) {
        GameName[GameName["e_xinPuMj"] = 0] = "e_xinPuMj";
        GameName[GameName["e_ganYuMj"] = 1] = "e_ganYuMj";
    })(GameName = game.GameName || (game.GameName = {}));
    /**
     * brief:   游戏方式
     * date:    2017-11-09
     * author:  徐为
     */
    var GameStyle;
    (function (GameStyle) {
        GameStyle[GameStyle["e_createRooom"] = 0] = "e_createRooom";
        GameStyle[GameStyle["e_joinRoom"] = 1] = "e_joinRoom";
    })(GameStyle = game.GameStyle || (game.GameStyle = {}));
    /**
 * brief:   游戏管理类
 * date:    2017-11-09
 * author:  徐为
 */
    var GameManager = (function () {
        /********************************/
        function GameManager() {
            this.m_nLoginType = 0;
            this.m_oRoomInfo = new game.S2C_RoomInfoPacket();
        }
        GameManager.prototype.fGetRoomInfo = function () {
            return this.m_oRoomInfo;
        };
        GameManager.prototype.fSetRoomInfo = function (roomInfo) {
            this.m_oRoomInfo = roomInfo;
        };
        GameManager.prototype.fSetGameName = function (name) {
            this.m_oRoomInfo.m_gameName = name;
        };
        GameManager.prototype.fGetGameName = function () {
            return this.m_oRoomInfo.m_gameName;
        };
        GameManager.prototype.fGetGameStyle = function () {
            return this.m_gameStyle;
        };
        GameManager.prototype.fSetGameStyle = function (style) {
            this.m_gameStyle = style;
        };
        GameManager.prototype.fGetUid = function (pos) {
            return this.m_oRoomInfo.m_aPlay[pos].m_sUid;
        };
        GameManager.prototype.fSetUid = function (uid, pos) {
            if (Utils.fNotUsefunData(uid))
                console.warn('NotUsefunData');
            this.m_oRoomInfo.m_aPlay[pos].m_sUid = uid;
        };
        GameManager.prototype.fGetCreatorUid = function () {
            return this.m_oRoomInfo.m_aPlay[this.m_pCreatorPos].m_sUid;
        };
        GameManager.prototype.fGetFirstPlayPos = function () {
            for (var i in this.m_oRoomInfo.m_aPlayerInfo) {
                if (this.m_sCreatorUId == this.m_oRoomInfo.m_aPlayerInfo[i].m_sUid)
                    return this.m_oRoomInfo.m_aPlayerInfo[i].m_pPosition;
            }
        };
        GameManager.fGetIns = function () {
            if (!GameManager.s_ins) {
                GameManager.s_ins = new GameManager();
            }
            return GameManager.s_ins;
        };
        GameManager.prototype.fGetStatusByPos = function (pos) {
            for (var i = 0; i < this.m_oRoomInfo.m_aPlayerInfo.length; i++) {
                if (pos == this.m_oRoomInfo.m_aPlayerInfo[i].m_pPosition)
                    return this.m_oRoomInfo.m_aPlayerInfo[i].m_nStatus;
            }
            console.warn('GameManager fGetStatusByPos 失败');
            return -1;
        };
        return GameManager;
    }());
    game.GameManager = GameManager;
    __reflect(GameManager.prototype, "game.GameManager");
})(game || (game = {}));
//# sourceMappingURL=GameManager.js.map