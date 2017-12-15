/**
 * brief:   游戏工具类
 * date:    2017-11-02
 * author:  徐为
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Utils = (function () {
    function Utils() {
    }
    /*
    *重新设置锚点
    */
    Utils.fResetAnchor = function (obj, anchorX, anchorY) {
        var width = obj.width, height = obj.height;
        var _anchorX = 0.5, _anchorY = 0.5; //qs:定义变量之前加一个_表示什么
        if (anchorX != undefined)
            _anchorX = anchorX;
        if (anchorY != undefined)
            _anchorY = anchorY;
        var _anchorOffsetX = _anchorX * width; //偏移长度
        var _anchorOffsetY = _anchorY * height; //偏移宽度
        if (obj instanceof eui.Label) {
            var label = obj; //qs:<type>????
            width = label.measuredWidth;
            height = label.measuredHeight;
        }
        var obX = obj.x, obY = obj.y;
        var newX = obX + _anchorOffsetX - obj.anchorOffsetX; //显示对象的x偏移量 + 设置的锚点的x偏移量 - 显示对象原始的锚点的x位置
        var newY = obY + _anchorOffsetY - obj.anchorOffsetY;
        obj.anchorOffsetX = _anchorOffsetX;
        obj.anchorOffsetY = _anchorOffsetY;
        obj.x = newX;
        obj.y = newY;
    };
    Utils.fNotUsefunData = function (data) {
        if (data == undefined || data == null || data == '' || data == NaN)
            return true;
        else
            return false;
    };
    Utils.fGetAncestor = function (display) {
        var parent = display;
        while (parent.parent) {
            parent = parent.parent;
        }
        return parent;
    };
    Utils.fClipDisplay = function (display, srcX, srcY, srcW, srcH, dstX, dstY) {
        if (!display.mask) {
            display.mask = new egret.Rectangle(); //qs:其坐标是否相对于需要遮罩的对象的锚点???????
        }
        display.mask.x = srcX;
        display.mask.y = srcY;
        display.mask.width = srcW;
        display.mask.height = srcH;
        display.x = dstX - srcX;
        display.y = dstY - srcY;
    };
    Utils.fGetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    /**
     * 桌子位置转换为游戏位置
     *
     * @ ownPlayPos  第一玩家位置
     *
     * @ otherPlayPos 其他的任意一个玩家位置
     */
    Utils.fDeskPosToGamePos = function (ownPlayPos, otherPlayPos) {
        if (ownPlayPos == otherPlayPos)
            return game.PlayePosition.e_Down;
        else if (ownPlayPos == game.PlayePosition.e_Left) {
            if (otherPlayPos == game.PlayePosition.e_Right)
                return game.PlayePosition.e_Up;
            else if (otherPlayPos == game.PlayePosition.e_Down)
                return game.PlayePosition.e_Left;
            else if (otherPlayPos == game.PlayePosition.e_Up)
                return game.PlayePosition.e_Right;
            else
                return otherPlayPos;
        }
        else if (ownPlayPos == game.PlayePosition.e_Right) {
            if (otherPlayPos == game.PlayePosition.e_Left)
                return game.PlayePosition.e_Up;
            else if (otherPlayPos == game.PlayePosition.e_Down)
                return game.PlayePosition.e_Right;
            else if (otherPlayPos == game.PlayePosition.e_Up)
                return game.PlayePosition.e_Left;
            else
                return otherPlayPos;
        }
        else if (ownPlayPos == game.PlayePosition.e_Up) {
            if (otherPlayPos == game.PlayePosition.e_Down)
                return game.PlayePosition.e_Up;
            else if (otherPlayPos == game.PlayePosition.e_Right)
                return game.PlayePosition.e_Left;
            else if (otherPlayPos == game.PlayePosition.e_Left)
                return game.PlayePosition.e_Right;
            else
                return otherPlayPos;
        }
        else
            return otherPlayPos;
    };
    //根据桌子座位方向获取座位名
    Utils.fGetNameByDesktopPos = function (pos) {
        if (pos == game.PlayePosition.e_Up)
            return "北";
        else if (pos == game.PlayePosition.e_Down)
            return "南";
        else if (pos == game.PlayePosition.e_Left)
            return "西";
        else if (pos == game.PlayePosition.e_Right)
            return "东";
    };
    return Utils;
}());
__reflect(Utils.prototype, "Utils");
//# sourceMappingURL=Utils.js.map