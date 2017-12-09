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
    var CardGroupUd = (function (_super) {
        __extends(CardGroupUd, _super);
        //***********************************/
        function CardGroupUd() {
            var _this = _super.call(this) || this;
            _this.m_nCardWidth = 32.5;
            _this.skinName = "resource/gameSkins/CardGroupUd.exml";
            return _this;
        }
        CardGroupUd.prototype.fOnUICreate = function () {
        };
        CardGroupUd.prototype.fAddCards = function (num, pos) {
            this.m_gopUp.width = num * this.m_nCardWidth;
            this.m_gopDown.width = num * this.m_nCardWidth;
            for (var i = 0; i < num; i++) {
                var card = new egret.Bitmap();
                card.texture = RES.getRes("cardbei1_png");
                card.name = "card" + i * 2;
                card.x = i * this.m_nCardWidth;
                this.m_gopUp.addChild(card);
                var card1 = new egret.Bitmap(); //new eui.Image(RES.getRes("cardbei1_png"));
                card1.texture = RES.getRes("cardbei1_png");
                card1.name = "card" + (i * 2 + 1);
                card1.x = i * this.m_nCardWidth;
                this.m_gopDown.addChild(card1);
                if (pos == game.PlayePosition.e_Up) {
                    card.scaleX = 0.7;
                    card.scaleY = 0.7;
                    card1.scaleX = 0.7;
                    card1.scaleY = 0.7;
                    // card.texture._bitmapHeight = 35 * 0.9;
                    //  card1.texture._bitmapHeight = 50 * 0.9;
                    //   card.height *= 0.9;
                    // card1.height *= 0.9;
                    card.x = i * this.m_nCardWidth * 0.7;
                    card1.x = i * this.m_nCardWidth * 0.7;
                }
            }
        };
        CardGroupUd.prototype.fOnClick = function (button) {
        };
        return CardGroupUd;
    }(game.Scene));
    game.CardGroupUd = CardGroupUd;
    __reflect(CardGroupUd.prototype, "game.CardGroupUd");
})(game || (game = {}));
//# sourceMappingURL=CardGroupUd.js.map