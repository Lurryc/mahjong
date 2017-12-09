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
 * brief:   桌牌，左右
 * date:    2017-11-03
 * author:  徐为
 */
var game;
(function (game) {
    var HandCardDown = (function (_super) {
        __extends(HandCardDown, _super);
        //***********************************/
        function HandCardDown() {
            var _this = _super.call(this) || this;
            //***********************************/
            _this.m_aCards = [];
            _this.skinName = "resource/gameSkins/Blanck.exml";
            return _this;
        }
        HandCardDown.prototype.fOnUICreate = function () {
            //    for(var i = 0; i < 13; i++){
            //   var card1= new Card('五万');
            //   card1.x = 46 * i;
            ////   this.addChild(card1);
            //  this.fSetClickButton(card1);
            // }
        };
        HandCardDown.prototype.fAddCards = function (cards) {
            for (var i = 0; i < cards.length; i++) {
                var cardBase = game.CardBase.fCreateCard(cards[i].fGetType(), cards[i].fGetValue(), cards[i].fGetIndex());
                var name = cardBase.m_sName;
                var card = new game.Card(name, cardBase);
                card.x = 46 * i;
                this.addChild(card);
                this.fSetClickButton(card);
            }
        };
        HandCardDown.prototype.fOnClick = function (button) {
            console.info('goubi');
            if (button.y == 0)
                button.y = -20;
            else
                button.y = 0;
        };
        return HandCardDown;
    }(game.Scene));
    game.HandCardDown = HandCardDown;
    __reflect(HandCardDown.prototype, "game.HandCardDown");
    var HandCardUp = (function (_super) {
        __extends(HandCardUp, _super);
        //***********************************/
        function HandCardUp() {
            var _this = _super.call(this) || this;
            //***********************************/
            _this.m_aCards = [];
            _this.skinName = "resource/gameSkins/Blanck.exml";
            return _this;
        }
        HandCardUp.prototype.fOnUICreate = function () {
            //    for(var i = 0; i < 13; i++){
            //   var card1= new Card('五万');
            //   card1.x = 46 * i;
            ////   this.addChild(card1);
            //  this.fSetClickButton(card1);
            // }
        };
        HandCardUp.prototype.fAddCards = function (cards) {
            for (var i = 0; i < cards.length; i++) {
                var cardBase = game.CardBase.fCreateCard(cards[i].fGetType(), cards[i].fGetValue(), cards[i].fGetIndex());
                var name = cardBase.m_sName;
                var card = new game.CardUp(name, cardBase);
                card.x = 20 * i;
                this.addChild(card);
                this.fSetClickButton(card);
            }
        };
        HandCardUp.prototype.fOnClick = function (button) {
            console.info('goubi');
            if (button.y == 0)
                button.y = -20;
            else
                button.y = 0;
        };
        return HandCardUp;
    }(game.Scene));
    game.HandCardUp = HandCardUp;
    __reflect(HandCardUp.prototype, "game.HandCardUp");
    var HandCardRight = (function (_super) {
        __extends(HandCardRight, _super);
        //***********************************/
        function HandCardRight() {
            var _this = _super.call(this) || this;
            //***********************************/
            _this.m_aCards = [];
            _this.skinName = "resource/gameSkins/Blanck.exml";
            return _this;
        }
        HandCardRight.prototype.fOnUICreate = function () {
            //    for(var i = 0; i < 13; i++){
            //   var card1= new Card('五万');
            //   card1.x = 46 * i;
            ////   this.addChild(card1);
            //  this.fSetClickButton(card1);
            // }
        };
        HandCardRight.prototype.fAddCards = function (cards) {
            for (var i = 0; i < cards.length; i++) {
                var cardBase = game.CardBase.fCreateCard(cards[i].fGetType(), cards[i].fGetValue(), cards[i].fGetIndex());
                var name = cardBase.m_sName;
                var card = new game.CardRight(name, cardBase);
                card.y = 18 * i;
                card.x += 3.8 * i;
                this.addChild(card);
                this.fSetClickButton(card);
            }
        };
        HandCardRight.prototype.fOnClick = function (button) {
            console.info('goubi');
            if (button.y == 0)
                button.y = -20;
            else
                button.y = 0;
        };
        return HandCardRight;
    }(game.Scene));
    game.HandCardRight = HandCardRight;
    __reflect(HandCardRight.prototype, "game.HandCardRight");
    var HandCardLeft = (function (_super) {
        __extends(HandCardLeft, _super);
        //***********************************/
        function HandCardLeft() {
            var _this = _super.call(this) || this;
            //***********************************/
            _this.m_aCards = [];
            _this.skinName = "resource/gameSkins/Blanck.exml";
            return _this;
        }
        HandCardLeft.prototype.fOnUICreate = function () {
            //    for(var i = 0; i < 13; i++){
            //   var card1= new Card('五万');
            //   card1.x = 46 * i;
            ////   this.addChild(card1);
            //  this.fSetClickButton(card1);
            // }
        };
        HandCardLeft.prototype.fAddCards = function (cards) {
            for (var i = 0; i < cards.length; i++) {
                var cardBase = game.CardBase.fCreateCard(cards[i].fGetType(), cards[i].fGetValue(), cards[i].fGetIndex());
                var name = cardBase.m_sName;
                var card = new game.CardLeft(name, cardBase);
                card.y = 18 * i;
                card.x -= 3.8 * i;
                this.addChild(card);
                this.fSetClickButton(card);
            }
        };
        HandCardLeft.prototype.fOnClick = function (button) {
            console.info('goubi');
            if (button.y == 0)
                button.y = -20;
            else
                button.y = 0;
        };
        return HandCardLeft;
    }(game.Scene));
    game.HandCardLeft = HandCardLeft;
    __reflect(HandCardLeft.prototype, "game.HandCardLeft");
})(game || (game = {}));
//# sourceMappingURL=HandCardDown.js.map