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
 * brief:   麻将初始准备层
 * date:    2017-11-03
 * author:  徐为
 */
var game;
(function (game) {
    var GameInitLayer = (function (_super) {
        __extends(GameInitLayer, _super);
        //***********************************/
        function GameInitLayer() {
            var _this = _super.call(this) || this;
            _this.m_aTopCards = [];
            _this.m_aTopCardsGroup = [];
            _this.m_aButtomCards = [];
            _this.m_aButtomCardsGroup = [];
            _this.m_aLeftCards = [];
            _this.m_aLeftCardsGroup = [];
            _this.m_aRightCards = [];
            _this.m_aRightCardsGroup = [];
            _this.m_aAllGroup = [];
            _this.skinName = "resource/gameSkins/layer/GameInitLayer.exml";
            return _this;
        }
        GameInitLayer.prototype.fOnUICreate = function () {
            // this.addEventListener(egret.TouchEvent.TOUCH_END, this.fOnClick, this);
            // this.touchEnabled = false;
            // this.touchChildren = false;
            this.m_gopTop.visible = false;
            this.m_gopButtom.visible = false;
            this.m_gopLeft.visible = false;
            this.m_gopRight.visible = false;
            this.m_aAllGroup[game.PlayePosition.e_Up] = this.m_gopTop;
        };
        GameInitLayer.prototype.fDeleteImgCard = function (index, dir) {
            var group;
            if (dir == 0) {
            }
            else {
            }
        };
        GameInitLayer.prototype.fAddReadCards = function (dir) {
            var groupCard;
            var group;
            var img0;
            var img1;
            var index = 0;
            var self = this;
            if (dir == game.PlayePosition.e_Left) {
                group = this.m_gopLeft;
                groupCard = this.m_aLeftCardsGroup;
            }
            else if (dir == game.PlayePosition.e_Right) {
                group = this.m_gopRight;
                groupCard = this.m_aRightCardsGroup;
            }
            else if (dir == game.PlayePosition.e_Down) {
                group = this.m_gopButtom;
                groupCard = this.m_aButtomCardsGroup;
            }
            else if (dir == game.PlayePosition.e_Up) {
                group = this.m_gopTop;
                groupCard = this.m_aTopCardsGroup;
            }
            index = groupCard.length;
            img0 = group.getChildByName('m_img0');
            img1 = group.getChildByName('m_img1');
            var imgName;
            if (dir == game.PlayePosition.e_Left || dir == game.PlayePosition.e_Right) {
                imgName = "majiangzi_json.pai_gai_bot2_png";
            }
            else if (dir == game.PlayePosition.e_Up || dir == game.PlayePosition.e_Down) {
                imgName = 'majiangzi_json.pai_gai_bot1_png';
            }
            var newGroup = new eui.Group();
            newGroup.name = 'm_gop' + index;
            img0 = new eui.Image(RES.getRes(imgName));
            img0.name = 'm_img0';
            img1 = new eui.Image(RES.getRes(imgName));
            img1.name = 'm_img1';
            newGroup.addChild(img0);
            newGroup.addChild(img1);
            group.addChild(newGroup);
            if (dir == game.PlayePosition.e_Left) {
                this.m_aLeftCardsGroup[index] = newGroup;
                this.m_aLeftCardsGroup[index].y = 25 * index;
                this.m_aLeftCards[index * 2] = img0;
                this.m_aLeftCards[index * 2].y = 7;
                this.m_aLeftCards[index * 2 + 1] = img1;
            }
            else if (dir == game.PlayePosition.e_Right) {
                this.m_aRightCardsGroup[index] = newGroup;
                this.m_aRightCardsGroup[index].y = 25 * index;
                this.m_aRightCards[index * 2] = img0;
                this.m_aRightCards[index * 2].y = 7;
                this.m_aRightCards[index * 2 + 1] = img1;
            }
            else if (dir == game.PlayePosition.e_Down) {
                this.m_aButtomCardsGroup[index] = newGroup;
                this.m_aButtomCardsGroup[index].x = 34 * index;
                this.m_aButtomCards[index * 2] = img0;
                this.m_aButtomCards[index * 2].y = 10.64;
                this.m_aButtomCards[index * 2 + 1] = img1;
            }
            else if (dir == game.PlayePosition.e_Up) {
                this.m_aTopCardsGroup[index] = newGroup;
                this.m_aTopCardsGroup[index].x = 34 * index;
                this.m_aTopCards[index * 2] = img0;
                this.m_aTopCards[index * 2].y = 10.64;
                this.m_aTopCards[index * 2 + 1] = img1;
            }
        };
        GameInitLayer.prototype.fGameReady = function () {
            /* this.m_gopTop.visible = true;
             this.m_gopButtom.visible = true;
             this.m_gopLeft.visible = true;
             this.m_gopRight.visible = true;
 
            
             for(var i = 1; i < 26; i++)
             {
              
                 this.fAddReadCards( PlayePosition.e_Up)
                  this.fAddReadCards( PlayePosition.e_Down)
             }
 
             for(var i = 0; i < 17; i++)
             {
                this.fAddReadCards(PlayePosition.e_Left)
                this.fAddReadCards( PlayePosition.e_Right)
             }
              
 
             var readPkt =  <C2s_LaunchPaiPacket>C2s_ActionBase.fCreateAction(C2s_ActionBase.s_LaunchPai)
             var cards =   game.GameCardManager.fGetIns().m_oCards;
             var launchCards:CardBase[] = [];
           
                var kk = PlayePosition.e_Up;
                for(; kk < PlayePosition.e_Right; kk ++)
                {
                      for(var i = 0; i < 13; i++)
                      {
                         var noUseCard:number = 0;
                         for(var j in cards)
                         {
                            if(cards[j].m_pBelong == undefined)
                            {
                             ++noUseCard;
                            }
                         }
                 
                        var index =  Utils.fGetRandomNum(1, noUseCard);
                     
                        cards[index].m_pBelong = kk;
                        launchCards.push(cards[index]);
                      //  this.fCreateCard(index, kk, launchCards, cards);
                      }
                }
             
             readPkt.fSetCards(launchCards);
             Main.fGetIns().m_oGameSocket.m_oActionMoudle.fLaunchPai(readPkt);
 
 
             for(var del in cards)
             {
                 if(cards[del].m_pBelong)
                 {
                     var cardImg = this.m_gopButtom
                 }
             }*/
        };
        GameInitLayer.prototype.fOnClick = function (button) {
            console.info('button');
        };
        return GameInitLayer;
    }(game.Scene));
    game.GameInitLayer = GameInitLayer;
    __reflect(GameInitLayer.prototype, "game.GameInitLayer");
})(game || (game = {}));
//# sourceMappingURL=GameInitLayer.js.map