
/**
 * brief:   桌牌，左右
 * date:    2017-11-03
 * author:  徐为
 */
module game
{
    export class CardGroupLr extends Scene
    {


      //***********************************/
        
        private m_gopDown:eui.Group;
        private m_gopUp:eui.Group;
        private m_nCardHeight:number = 25.5;
      //***********************************/

       
        public constructor()
        {
            super();
           
            this.skinName = "resource/gameSkins/CardGroupLR.exml";

           
        }
      

        public fOnUICreate()
        {
           
        }


        public fAddCards(num:number, pos:PlayePosition)
        {
              this.m_gopDown.height = num * this.m_nCardHeight;
              this.m_gopUp.width = num * this.m_nCardHeight;
              for(var i = 0; i < num; i++)
              {

                 var card  = new egret.Bitmap();
                  card.texture = RES.getRes("cardbei2_png");
                  card.name = "card" + i * 2;
                  card.y = i * this.m_nCardHeight;
                  this.m_gopDown.addChild(card);

                 var card1 = new egret.Bitmap();//new eui.Image(RES.getRes("cardbei1_png"));
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

                  if(pos == PlayePosition.e_Left)
                  {
                         card.x -= i * 3.3;
                          card1.x -= i * 3.3;
                          card.rotation = 10;
                          card1.rotation = 10;
                  }
                       
                 else
                    
                    {
                         card.x += i * 3.3;
                          card1.x += i * 3.3;
                           card.rotation = -10;
                          card1.rotation = -10;
                    }
              }
        }

       
        public fOnClick(button)
        {

           
        }

      
    }
}