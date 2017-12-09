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
    var CardGroupLr = (function (_super) {
        __extends(CardGroupLr, _super);
        //***********************************/
        function CardGroupLr() {
            var _this = _super.call(this) || this;
            _this.m_nCardHeight = 25.5;
            _this.skinName = "resource/gameSkins/CardGroupLR.exml";
            return _this;
        }
        CardGroupLr.prototype.fOnUICreate = function () {
        };
        CardGroupLr.prototype.fAddCards = function (num, pos) {
            this.m_gopDown.height = num * this.m_nCardHeight;
            this.m_gopUp.width = num * this.m_nCardHeight;
            for (var i = 0; i < num; i++) {
                var card = new egret.Bitmap();
                card.texture = RES.getRes("cardbei2_png");
                card.name = "card" + i * 2;
                card.y = i * this.m_nCardHeight;
                this.m_gopDown.addChild(card);
                var card1 = new egret.Bitmap(); //new eui.Image(RES.getRes("cardbei1_png"));
                card1.texture = RES.getRes("cardbei2_png");
                card1.name = "card" + (i * 2 + 1);
                card1.y = i * this.m_nCardHeight;
                this.m_gopUp.addChild(card1);
                //if(pos == PlayePosition.e_Up)
                {
                    card.scaleX = 0.65;
                    card.scaleY = 0.65;
                    card1.scaleX = 0.65;
                    card1.scaleY = 0.65;
                    // card.texture._bitmapHeight = 35 * 0.9;
                    //  card1.texture._bitmapHeight = 50 * 0.9;
                    //   card.height *= 0.9;
                    // card1.height *= 0.9;
                    card.y = i * this.m_nCardHeight * 0.65;
                    card1.y = i * this.m_nCardHeight * 0.65;
                }
                if (pos == game.PlayePosition.e_Left) {
                    card.x -= i * 3.3;
                    card1.x -= i * 3.3;
                    card.rotation = 10;
                    card1.rotation = 10;
                }
                else {
                    card.x += i * 3.3;
                    card1.x += i * 3.3;
                    card.rotation = -10;
                    card1.rotation = -10;
                }
            }
        };
        CardGroupLr.prototype.fOnClick = function (button) {
        };
        return CardGroupLr;
    }(game.Scene));
    game.CardGroupLr = CardGroupLr;
    __reflect(CardGroupLr.prototype, "game.CardGroupLr");
})(game || (game = {}));
//# sourceMappingURL=CardGroupLR.js.map