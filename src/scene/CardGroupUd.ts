
/**
 * brief:   头像
 * date:    2017-11-03
 * author:  徐为
 */
module game
{
    export class CardGroupUd extends Scene
    {


      //***********************************/
        
        private m_gopDown:eui.Group;
        private m_gopUp:eui.Group;
        private m_nCardWidth:number = 32.5;
      //***********************************/

       
        public constructor()
        {
            super();
           
            this.skinName = "resource/gameSkins/CardGroupUd.exml";

           
        }
      

        public fOnUICreate()
        {
           
        }


        public fAddCards(num:number, pos:PlayePosition)
        {
              this.m_gopUp.width = num * this.m_nCardWidth;
              this.m_gopDown.width = num * this.m_nCardWidth;
              for(var i = 0; i < num; i++)
              {

                 var card  = new egret.Bitmap();
                  card.texture = RES.getRes("cardbei1_png");
                  card.name = "card" + i * 2;
                  card.x = i * this.m_nCardWidth;
                  this.m_gopUp.addChild(card);

                 var card1 = new egret.Bitmap();//new eui.Image(RES.getRes("cardbei1_png"));
                 card1.texture = RES.getRes("cardbei1_png");
                  card1.name = "card" + (i * 2 + 1);
                   card1.x = i * this.m_nCardWidth;
                  this.m_gopDown.addChild(card1);

                  if(pos == PlayePosition.e_Up)
                  {
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
        }

       
        public fOnClick(button)
        {

           
        }

      
    }
}