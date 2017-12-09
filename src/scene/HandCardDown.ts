
/**
 * brief:   桌牌，左右
 * date:    2017-11-03
 * author:  徐为
 */
module game
{
    export class HandCardDown extends Scene
    {


      //***********************************/
          private m_aCards:Card[] = [];
    
      //***********************************/

       
        public constructor()
        {
            super();
            this.skinName = "resource/gameSkins/Blanck.exml";
        }

      
        public fOnUICreate()
        {
            //    for(var i = 0; i < 13; i++){
              //   var card1= new Card('五万');
         //   card1.x = 46 * i;
       ////   this.addChild(card1);
        //  this.fSetClickButton(card1);
         // }
        }

        public fAddCards(cards:CardBase[]){
           for(var i = 0; i < cards.length; i++)
           {
              var cardBase = CardBase.fCreateCard(cards[i].fGetType(), cards[i].fGetValue(), cards[i].fGetIndex())
              var name = cardBase.m_sName;
              var card = new Card(name, cardBase);
              card.x = 46 * i;
              this.addChild(card);
              this.fSetClickButton(card);
           }
        }

      
        public fOnClick(button)
        {

           console.info('goubi');
           if(button.y == 0)
              button.y = -20;
            else
               button.y = 0
        }

      
    }

    export class HandCardUp extends Scene
    {


      //***********************************/
          private m_aCards:Card[] = [];
    
      //***********************************/

       
        public constructor()
        {
            super();
            this.skinName = "resource/gameSkins/Blanck.exml";
        }

      
        public fOnUICreate()
        {
            //    for(var i = 0; i < 13; i++){
              //   var card1= new Card('五万');
         //   card1.x = 46 * i;
       ////   this.addChild(card1);
        //  this.fSetClickButton(card1);
         // }
        }

        public fAddCards(cards:CardBase[]){
           for(var i = 0; i < cards.length; i++)
           {
              var cardBase = CardBase.fCreateCard(cards[i].fGetType(), cards[i].fGetValue(), cards[i].fGetIndex())
              var name = cardBase.m_sName;
              var card = new CardUp(name, cardBase);
              card.x = 20 * i;
              this.addChild(card);
              this.fSetClickButton(card);
           }
        }

      
        public fOnClick(button)
        {

           console.info('goubi');
           if(button.y == 0)
              button.y = -20;
            else
               button.y = 0
        }

      
    }

     export class HandCardRight extends Scene
    {


      //***********************************/
          private m_aCards:CardLeft[] = [];
    
      //***********************************/

       
        public constructor()
        {
            super();
            this.skinName = "resource/gameSkins/Blanck.exml";
        }

      
        public fOnUICreate()
        {
            //    for(var i = 0; i < 13; i++){
              //   var card1= new Card('五万');
         //   card1.x = 46 * i;
       ////   this.addChild(card1);
        //  this.fSetClickButton(card1);
         // }
        }

        public fAddCards(cards:CardBase[]){
           for(var i = 0; i < cards.length; i++)
           {
              var cardBase = CardBase.fCreateCard(cards[i].fGetType(), cards[i].fGetValue(), cards[i].fGetIndex())
              var name = cardBase.m_sName;
              var card = new CardRight(name, cardBase);
              card.y = 18 * i;
               card.x += 3.8 * i;
              this.addChild(card);
              this.fSetClickButton(card);
           }
        }

      
        public fOnClick(button)
        {

           console.info('goubi');
           if(button.y == 0)
              button.y = -20;
            else
               button.y = 0
        }

      
    }

    export class HandCardLeft extends Scene
    {


      //***********************************/
          private m_aCards:CardLeft[] = [];
    
      //***********************************/

       
        public constructor()
        {
            super();
            this.skinName = "resource/gameSkins/Blanck.exml";
        }

      
        public fOnUICreate()
        {
            //    for(var i = 0; i < 13; i++){
              //   var card1= new Card('五万');
         //   card1.x = 46 * i;
       ////   this.addChild(card1);
        //  this.fSetClickButton(card1);
         // }
        }

        public fAddCards(cards:CardBase[]){
           for(var i = 0; i < cards.length; i++)
           {
              var cardBase = CardBase.fCreateCard(cards[i].fGetType(), cards[i].fGetValue(), cards[i].fGetIndex())
              var name = cardBase.m_sName;
              var card = new CardLeft(name, cardBase);
              card.y = 18 * i;
               card.x -= 3.8 * i;
              this.addChild(card);
              this.fSetClickButton(card);
           }
        }

      
        public fOnClick(button)
        {

           console.info('goubi');
           if(button.y == 0)
              button.y = -20;
            else
               button.y = 0
        }

      
    }
}