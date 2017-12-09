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
 * brief:   麻将主场景
 * date:    2017-11-03
 * author:  徐为
 */
var game;
(function (game) {
    var MainScene = (function (_super) {
        __extends(MainScene, _super);
        //***********************************/
        function MainScene() {
            var _this = _super.call(this) || this;
            _this.m_aPhotos = [];
            _this.skinName = "resource/gameSkins/scene/MainScene.exml";
            _this.fSetClickButton(_this.m_btnBack);
            _this.m_oPhotoScene = new game.PhotoScene();
            _this.addChild(_this.m_oPhotoScene);
            _this.m_oPhotoScene.m_oMainScene = _this;
            return _this;
            // this.m_aPhotos[PlayePosition.e_Down] = new Photo();
            // this.m_gopDown.addChild(this.m_aPhotos[PlayePosition.e_Down]);
            //  this.m_aPhotos[PlayePosition.e_Up] = new Photo();
            // this.m_gopUp.addChild(this.m_aPhotos[PlayePosition.e_Up]);
            // this.m_aPhotos[PlayePosition.e_Up].visible = false;
            //  this.m_aPhotos[PlayePosition.e_Left] = new Photo();
            // this.m_gopLeft.addChild(this.m_aPhotos[PlayePosition.e_Left]);
            // this.m_aPhotos[PlayePosition.e_Left].visible = false;
            //   this.m_aPhotos[PlayePosition.e_Right] = new Photo();
            //   this.m_gopRight.addChild(this.m_aPhotos[PlayePosition.e_Right]);
        }
        /**该场景需要加载的资源组 */
        MainScene.prototype.fSceneResGroup = function () {
            return "hall";
        };
        MainScene.prototype.fResetRoomIdUi = function (roomId) {
            this.m_labRoomId.text = roomId;
        };
        MainScene.prototype.fHideInit = function () {
            if (game.GameManager.fGetIns().m_pCreatorPos == game.PlayePosition.e_Down) {
                this.m_imgPos.source = RES.getRes("pos_nan_png");
            }
            else if (game.GameManager.fGetIns().m_pCreatorPos == game.PlayePosition.e_Left) {
                this.m_imgPos.source = RES.getRes("pos_xi_png");
            }
            else if (game.GameManager.fGetIns().m_pCreatorPos == game.PlayePosition.e_Right) {
                this.m_imgPos.source = RES.getRes("pos_dong_png");
            }
            this.m_gopCardUp.visible = false;
            this.m_gopCardRight.visible = false;
            this.m_gopCardDown.visible = false;
            this.m_gopCardLeft.visible = false;
            this.m_labGoUp.visible = false;
            this.m_labGoDown.visible = false;
            this.m_labGoLeft.visible = false;
            this.m_labGoRight.visible = false;
        };
        //桌牌初始化
        MainScene.prototype.fInitDeskCard = function () {
            this.m_oCardDown = new game.CardGroupUd();
            this.m_gopCardDown.addChild(this.m_oCardDown);
            this.m_oCardUp = new game.CardGroupUd();
            this.m_gopCardUp.addChild(this.m_oCardUp);
            this.m_oCardLeft = new game.CardGroupLr();
            this.m_gopCardLeft.addChild(this.m_oCardLeft);
            this.m_oCardRight = new game.CardGroupLr();
            this.m_gopCardRight.addChild(this.m_oCardRight);
        };
        MainScene.prototype.fOnUICreate = function () {
            this.fSetClickButton(this.m_btnBegin);
            this.fInitDeskCard();
            this.m_labRoomId.text = game.GameManager.fGetIns().fGetRoomInfo().m_sRoomId;
            this.m_oHandCardDown = new game.HandCardDown();
            this.m_gopHandDown.addChild(this.m_oHandCardDown);
            this.m_oHandCardLeft = new game.HandCardLeft();
            this.m_gopHandLeft.addChild(this.m_oHandCardLeft);
            this.m_oHandCardUp = new game.HandCardUp();
            this.m_gopHandUp.addChild(this.m_oHandCardUp);
            this.m_oHandCardRight = new game.HandCardRight();
            this.m_gopHandRight.addChild(this.m_oHandCardRight);
            //  this.m_oGameInitLayer = new GameInitLayer();
            //  this.addChild(this.m_oGameInitLayer);
            //  this.m_oLaunchLayer = new LaunchPaiLayer();
            //  this.addChild(this.m_oLaunchLayer);
            var self = this;
            this.m_oHandle.fReceiveOnce(this, function (act) {
                var pak = act.m_oDisObj;
                self.m_gopCardUp.visible = true;
                self.m_gopCardRight.visible = true;
                self.m_gopCardDown.visible = true;
                self.m_gopCardLeft.visible = true;
                var handCount = pak.m_aCardGroup[0].m_nCardsCount;
                var deskNum = pak.m_nStartCardsNum - handCount * 4;
                this.m_oCardDown.fAddCards(deskNum / 4, game.PlayePosition.e_Down);
                this.m_oCardUp.fAddCards(deskNum / 4, game.PlayePosition.e_Up);
                this.m_oCardLeft.fAddCards(deskNum / 4, game.PlayePosition.e_Left);
                this.m_oCardRight.fAddCards(deskNum / 4, game.PlayePosition.e_Right);
                for (var i = 0; i < pak.m_aCardGroup.length; i++) {
                    if (pak.m_aCardGroup[i].m_pBelong == game.GameManager.fGetIns().m_pCreatorPos) {
                        self.m_oHandCardDown.visible = true;
                        self.m_oHandCardDown.fAddCards(pak.m_aCardGroup[i].fGetCard());
                    }
                    else if (Utils.fDeskPosToGamePos(game.GameManager.fGetIns().m_pCreatorPos, pak.m_aCardGroup[i].m_pBelong) == game.PlayePosition.e_Left) {
                        self.m_oHandCardLeft.visible = true;
                        self.m_oHandCardLeft.fAddCards(pak.m_aCardGroup[i].fGetCard());
                    }
                    else if (Utils.fDeskPosToGamePos(game.GameManager.fGetIns().m_pCreatorPos, pak.m_aCardGroup[i].m_pBelong) == game.PlayePosition.e_Up) {
                        self.m_oHandCardUp.visible = true;
                        self.m_oHandCardUp.fAddCards(pak.m_aCardGroup[i].fGetCard());
                    }
                    else if (Utils.fDeskPosToGamePos(game.GameManager.fGetIns().m_pCreatorPos, pak.m_aCardGroup[i].m_pBelong) == game.PlayePosition.e_Right) {
                        self.m_oHandCardRight.visible = true;
                        self.m_oHandCardRight.fAddCards(pak.m_aCardGroup[i].fGetCard());
                    }
                }
            }, game.C2s_ActionBase.s_ReadyPlay);
            this.m_oHandle.fReceiveMessage(this, function (act) {
                console.info('有人加入');
            }, game.C2s_ActionBase.s_JoinRoom);
            this.m_oHandle.fReceiveMessage(this, function (act) {
                console.info('有人摸排');
                var mopai = (act.m_oDisObj);
                if (mopai.fGetCurrPlayrPos() == mopai.fGetBelongPlayerPos()) {
                    var pack = game.Packet.fCreateAction(game.Packet.s_PlayHand);
                    pack.m_nCardsGroupCount = 1;
                    pack.m_pBelongPlayer = mopai.fGetCurrPlayrPos();
                    pack.m_pCurrentPlayer = mopai.fGetCurrPlayrPos();
                    var gop = new game.CardGroup();
                    pack.m_aGroupCards.push(gop);
                    var firstPos = game.GameManager.fGetIns().fGetFirstPlayPos();
                    var gop = game.GameManager.fGetIns().fGetRoomInfo().fGetUserInfoByPos(firstPos).fGetHandCardGop();
                    var num = Math.floor(Math.random() * (gop.m_nCardsCount + 1));
                    var card = gop.fGetCard()[num];
                    gop.fGetCard().splice(num, 1); //
                    pack.m_nCardsGroupCount = 1;
                    Main.fGetIns().m_oGameSocket.fSendPkt(pack);
                }
            }, game.C2s_ActionBase.s_Touch);
            this.m_oHandle.fReceiveMessage(this, function (act) {
                var pak = act.m_oDisObj;
                game.GameManager.fGetIns().fGetRoomInfo().fCancelUserReadyStatus();
                for (var i = 0; i < pak.m_aReadyPos.length; i++) {
                    game.GameManager.fGetIns().fGetRoomInfo().fGetUserInfoByPos(pak.m_aReadyPos[i]).m_nStatus = 1;
                    var pos = Utils.fDeskPosToGamePos(game.GameManager.fGetIns().m_pCreatorPos, pak.m_aReadyPos[i]);
                    if (pos == game.PlayePosition.e_Down)
                        self.m_aPhotos[game.PlayePosition.e_Down].fResetReady();
                    else if (pos == game.PlayePosition.e_Up)
                        self.m_aPhotos[game.PlayePosition.e_Up].fResetReady();
                    else if (pos == game.PlayePosition.e_Left)
                        self.m_aPhotos[game.PlayePosition.e_Left].fResetReady();
                    else if (pos == game.PlayePosition.e_Right)
                        self.m_aPhotos[game.PlayePosition.e_Right].fResetReady();
                }
                for (var i = 0; i < game.GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo.length; i++) {
                    if (game.GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo[i].m_nStatus == 0) {
                        var pos = Utils.fDeskPosToGamePos(game.GameManager.fGetIns().m_pCreatorPos, game.GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo[i].m_pPosition);
                        self.m_aPhotos[pos].fResetReady(false);
                    }
                }
            }, game.C2s_ActionBase.s_ReadyActive);
        };
        MainScene.prototype.fResetPhoto = function (pos, userInfo) {
        };
        MainScene.prototype.fOnClick = function (button) {
            if (button == this.m_btnBack) {
                game.GameScenenManager.fGetIns().fBackToLastScene();
                return;
            }
            else if (button == this.m_btnBegin) {
                var readPkt = game.C2s_ActionBase.fCreateAction(game.C2s_ActionBase.s_ReadyPlay);
                Main.fGetIns().m_oGameSocket.fSendPkt(readPkt);
                //  readPkt.m_nReadyNum = 1;
                //  readPkt.m_aReadyPos = [GameManager.fGetIns().m_pCreatorPos];
                //  Main.fGetIns().m_oGameSocket.fSendPkt(readPkt);
            }
            else {
                var readAPkt = game.C2s_ActionBase.fCreateAction(game.C2s_ActionBase.s_ReadyActive);
                readAPkt.m_nReadyNum = 1;
                readAPkt.m_aReadyPos = [game.GameManager.fGetIns().m_pCreatorPos];
                Main.fGetIns().m_oGameSocket.fSendPkt(readAPkt);
            }
            //   this.m_btnReady.fRelease();
            //  this.m_btnReady.parent.removeChild(this.m_btnReady);
        };
        return MainScene;
    }(game.Scene));
    game.MainScene = MainScene;
    __reflect(MainScene.prototype, "game.MainScene");
})(game || (game = {}));
//# sourceMappingURL=MainScene.js.map