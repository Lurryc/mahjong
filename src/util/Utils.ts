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
        var _anchorX = 0.5, _anchorY = 0.5;//qs:定义变量之前加一个_表示什么
        if(anchorX != undefined) _anchorX = anchorX;
        if(anchorY != undefined) _anchorY = anchorY;

        var _anchorOffsetX = _anchorX * width;   //偏移长度
        var _anchorOffsetY = _anchorY * height;  //偏移宽度

        if(obj instanceof eui.Label)//判断需要设置锚点的对象是否为文本,如果是,就需要对他的长宽进行测量
        {
            var label = <eui.Label>obj;//qs:<type>????
            width = label.measuredWidth;
            height = label.measuredHeight;
        }

        var obX = obj.x, obY = obj.y;
        var newX = obX + _anchorOffsetX - obj.anchorOffsetX;//显示对象的x偏移量 + 设置的锚点的x偏移量 - 显示对象原始的锚点的x位置
        var newY = obY + _anchorOffsetY - obj.anchorOffsetY;
        obj.anchorOffsetX = _anchorOffsetX;
        obj.anchorOffsetY = _anchorOffsetY;
        obj.x = newX;
        obj.y  = newY;
    }

    public static fNotUsefunData(data):boolean//qs:判断数据是否为空?????有什么用???????用!data不行么????
    {
        if(data == undefined || data == null || data == ''  || data == NaN)
          return true;
        else
          return false;
    }

    public static fGetAncestor(display:egret.DisplayObject)//qs:返回顶级祖先显示对象???????
    {
        var parent = display;
        while(parent.parent)
        {
            parent = parent.parent;
        }
        return parent;
    }
	
	 public static fClipDisplay(display: egret.DisplayObject,srcX,srcY,srcW,srcH,dstX,dstY) //qs:其中各个参数代表什么??函数的功能??
      {
           if(!display.mask)
           {
              display.mask = new egret.Rectangle();//qs:其坐标是否相对于需要遮罩的对象的锚点???????
           }
           display.mask.x = srcX;
           display.mask.y = srcY;
           display.mask.width = srcW;
           display.mask.height = srcH;
          display.x = dstX - srcX;
           display.y = dstY - srcY;
      }


      public static fGetRandomNum(Min,Max):number//随机数的结果包含Min和Max
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
