

module game {


  /**
     * brief:   基本活动数据包
     * date:    2017-11-09
     * author:  徐为
   */

   export class C2s_ActionBase extends Packet{

          /********************************/
      
             public m_pCurrentPlayer:PlayePosition;    //当前活动者位置

             public m_pBelongPlayer:PlayePosition;     //活动归属者位置
       
             public m_nCardsGroupCount:number;    //活动用到的牌组的数量
      
             public m_aGroupCards:CardGroup[] = [];    //活动用到的牌组

         /********************************/

       public constructor(){
             super();
             this.m_oHead.m_nPktType = Protocol.s_C2S_BASE;
             this.m_sActionType = Packet.s_BaseAct;
       }

       public fGetCurrPlayrPos():PlayePosition{
           return this.m_pCurrentPlayer;
       }

       public fGetBelongPlayerPos():PlayePosition{
           return this.m_pBelongPlayer;
       }

     
       public fGetCards():CardGroup[]
       {
           return  this.m_aGroupCards;
       }

       public fSetCards(cards:CardGroup[])
       {
           this.m_aGroupCards = cards;
       }

       public fWrite():GameByteArray{
          var by = super.fWrite();
          by.writeShort(this.m_pBelongPlayer);
          by.writeShort(this.m_pCurrentPlayer);
          by.writeShort(this.m_nCardsGroupCount);
      //    by.writeUTF(this.m_sActionType);

          for(var i in this.m_aGroupCards)
          {
              this.m_aGroupCards[i].fWrite(by);
           //   by.writeShort(this.m_aGroupCards[i].fGetType())
           //   by.writeShort(this.m_aGroupCards[i].fGetValue())
          }
         return by;
       }

       public fRead(by:GameByteArray):void{
           super.fRead(by);
           this.m_pBelongPlayer = by.readShort();
           this.m_pCurrentPlayer = by.readShort();
           this.m_nCardsGroupCount = by.readShort();
           

            var type , value, index;
           for(var i = 0; i < this.m_nCardsGroupCount; i++)
           {
              // type = by.readShort();
             ///  value = by.readShort();
            //  index = by.readShort();
            //   var card =  CardBase.fCreateCard(type, value, index);
               var cardGop = new CardGroup();
               cardGop.fRead(by);
               this.m_aGroupCards.push(cardGop);
           }
       }
       

     

   }
}
