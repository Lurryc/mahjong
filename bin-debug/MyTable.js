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
    var MyTable = (function (_super) {
        __extends(MyTable, _super);
        /***************************** */
        function MyTable(num) {
            if (num === void 0) { num = 136; }
            var _this = _super.call(this) || this;
            _this.m_bStartPress = false;
            _this.m_nCardRangeCount = 0;
            _this.m_aTableCards = [];
            _this.m_bNotEnough = true;
            _this.m_nFrameNum = 0;
            _this.m_aInternal = [1];
            _this.skinName = "resource/gameSkins/MyMajiangTable.exml";
            _this.m_nAllCardCount = num;
            return _this;
        }
        MyTable.prototype.fOnUICreate = function () {
            _super.prototype.fOnUICreate.call(this);
            this.fSetClickButton(this.m_btnStart);
            var aa = [];
            aa[0] = [];
            aa[0][0] = 3;
        };
        MyTable.prototype.fUpdate = function (dt_ms) {
            if (this.m_bNotEnough && this.m_bStartPress) {
                if (this.m_nFrameNum == this.m_aInternal[0]) {
                    this.m_nFrameNum = 0;
                    var card1 = new eui.Image("cardbei1_png");
                    var card2 = new eui.Image("cardbei1_png");
                    var card3 = new eui.Image("cardbei2_png");
                    var card4 = new eui.Image("cardbei2_png");
                    var card5 = new eui.Image("cardbei1_png");
                    var card6 = new eui.Image("cardbei1_png");
                    var card7 = new eui.Image("cardbei2_png");
                    var card8 = new eui.Image("cardbei2_png");
                    if (this.m_nCardRangeCount < 17) {
                        // this.m_aTableCards[0].push(card1);
                        card1.x = this.m_nCardRangeCount * 33;
                        this.m_gopDownStackUp.addChild(card1);
                        // this.m_aTableCards[0].push(card2);
                        card2.x = this.m_nCardRangeCount * 33;
                        this.m_gopDownStackDown.addChild(card2);
                        // this.m_aTableCards[1].push(card3);
                        card3.y = (this.m_nCardRangeCount + 1) * -20;
                        this.m_gopRightStackUp.addChildAt(card3, 17 - this.m_nCardRangeCount);
                        // this.m_aTableCards[1].push(card4);
                        card4.y = (this.m_nCardRangeCount + 1) * -20;
                        this.m_gopRightStackDown.addChildAt(card4, 17 - this.m_nCardRangeCount);
                        // this.m_aTableCards[2].push(card5);
                        card5.x = (this.m_nCardRangeCount + 1) * -33;
                        this.m_gopUpStackUp.addChild(card5);
                        // this.m_aTableCards[2].push(card6);
                        card6.x = (this.m_nCardRangeCount + 1) * -33;
                        this.m_gopUpStackDown.addChild(card6);
                        // this.m_aTableCards[3].push(card7);
                        card7.y = this.m_nCardRangeCount * 20;
                        this.m_gopLeftStackUp.addChild(card7);
                        // this.m_aTableCards[3].push(card8);
                        card8.y = this.m_nCardRangeCount * 20;
                        this.m_gopLeftStackDown.addChild(card8);
                        this.m_nCardRangeCount++;
                    }
                    else {
                        this.m_bNotEnough = false;
                    }
                    if (this.m_aInternal.length > 1) {
                        this.m_aInternal.splice(0, 1);
                    }
                }
                this.m_nFrameNum++;
            }
        };
        MyTable.prototype.fOnClick = function (button) {
            if (button == this.m_btnStart) {
                this.m_bStartPress = true;
            }
        };
        MyTable.prototype.timerStartCmp = function () {
            var timer = new egret.Timer(100, 34);
            // this.removeChild(this.m_aTableCards[4])
        };
        return MyTable;
    }(game.Scene));
    game.MyTable = MyTable;
    __reflect(MyTable.prototype, "game.MyTable");
})(game || (game = {}));
//# sourceMappingURL=MyTable.js.map