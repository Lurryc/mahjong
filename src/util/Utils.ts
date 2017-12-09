/**
 * brief:   游戏工具类
 * date:    2017-11-02
 * author:  徐为
 */


class Utils{

    /*
    *重新设置锚点
    */
    public static fResetAnchor(obj:egret.DisplayObject, anchorX? : number, anchorY? : number){
        var width = obj.width, height = obj.height;
        var _anchorX = 0.5, _anchorY = 0.5;
        if(anchorX != undefined) _anchorX = anchorX;
        if(anchorY != undefined) _anchorY = anchorY;

        var _anchorOffsetX = _anchorX * width;   //偏移长度
        var _anchorOffsetY = _anchorY * height;  //偏移宽度

        if(obj instanceof eui.Label)
        {
            var label = <eui.Label>obj;
            width = label.measuredWidth;
            height = label.measuredHeight;
        }

        var obX = obj.x, obY = obj.y;
        var newX = obX + _anchorOffsetX - obj.anchorOffsetX;
        var newY = obY + _anchorOffsetY - obj.anchorOffsetY;
        obj.anchorOffsetX = _anchorOffsetX;
        obj.anchorOffsetY = _anchorOffsetY;
        obj.x = newX;
        obj.y  = newY;
    }

    public static fNotUsefunData(data):boolean
    {
        if(data == undefined || data == null || data == '')
          return true;
        else
          return false;
    }

    public static fGetAncestor(display:egret.DisplayObject)
    {
        var parent = display;
        while(parent.parent)
        {
            parent = parent.parent;
        }
        return parent;
    }
	
	 public static fClipDisplay(display: egret.DisplayObject,srcX,srcY,srcW,srcH,dstX,dstY) 
      {
           if(!display.mask)
           {
              display.mask = new egret.Rectangle();
           }
           display.mask.x = srcX;
           display.mask.y = srcY;
           display.mask.width = srcW;
           display.mask.height = srcH;
          display.x = dstX - srcX;
           display.y = dstY - srcY;
      }


      public static fGetRandomNum(Min,Max):number
      {   
        var Range = Max - Min;   
        var Rand = Math.random();   
        return(Min + Math.round(Rand * Range));   
      }   

      /**
       * 桌子位置转换为游戏位置
       * 
       * @ ownPlayPos  第一玩家位置
       * 
       * @ otherPlayPos 其他的任意一个玩家位置
       */
      public static fDeskPosToGamePos(ownPlayPos:game.PlayePosition, otherPlayPos:game.PlayePosition):game.PlayePosition{
             if(ownPlayPos == otherPlayPos)
                return  game.PlayePosition.e_Down;
            else  if(ownPlayPos == game.PlayePosition.e_Left)   //第一玩家在西边
             {
                 if(otherPlayPos == game.PlayePosition.e_Right)  //东
                   return game.PlayePosition.e_Up;
                 else if(otherPlayPos == game.PlayePosition.e_Down)   //南
                   return game.PlayePosition.e_Left;
                 else if(otherPlayPos == game.PlayePosition.e_Up)     //北
                    return game.PlayePosition.e_Right;
                 else
                    return otherPlayPos;
             }
             else if(ownPlayPos == game.PlayePosition.e_Right)   //第一玩家在东边
             {
                 if(otherPlayPos == game.PlayePosition.e_Left)  //西
                    return game.PlayePosition.e_Up;
                 else if(otherPlayPos == game.PlayePosition.e_Down) //南
                    return game.PlayePosition.e_Right;
                 else if(otherPlayPos == game.PlayePosition.e_Up)   //北
                    return game.PlayePosition.e_Left
                 else 
                    return otherPlayPos;
             }  
             else if(ownPlayPos == game.PlayePosition.e_Up)   //第一家玩家在北边
             {
                 if(otherPlayPos == game.PlayePosition.e_Down)  //南
                   return game.PlayePosition.e_Up;
                 else if(otherPlayPos == game.PlayePosition.e_Right) //东
                   return game.PlayePosition.e_Left;
                else if(otherPlayPos == game.PlayePosition.e_Left)
                   return game.PlayePosition.e_Right;
                else 
                   return otherPlayPos;
             } 
             else
                return otherPlayPos;
      }

      //根据桌子座位方向获取座位名
      public static fGetNameByDesktopPos(pos:game.PlayePosition):string{
          if(pos == game.PlayePosition.e_Up)
             return "北"
          else if(pos == game.PlayePosition.e_Down)
             return "南";
          else if(pos == game.PlayePosition.e_Left)
             return "西";
          else if(pos == game.PlayePosition.e_Right)
             return "东";
      }
}
