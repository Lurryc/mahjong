

module game {

  /**
     * brief:   打牌准备完毕数据包
     * date:    2017-11-15
     * author:  徐为
   */

   export class C2s_ReadyPacket extends Packet{

       public m_aDiceNum:number[] = [];
       public m_nStartCardsNum:number;   //牌总数
       public m_nStartGroupNum:number;    //牌组数量
       public m_aCardGroup:CardGroup[] = [];

       public constructor(){
          
          super();

          this.m_oHead.m_nPktType = Protocol.s_C2S_StartHand;
          this.m_sActionType = Packet.s_ReadyPlay;
          this.m_aDiceNum[0]  = -1;
           this.m_aDiceNum[1]  = -1;
          this.m_nStartCardsNum = -1;
          this.m_nStartGroupNum = 0;
       }


       public fWrite():GameByteArray{
          var by = super.fWrite();
          by.writeShort(this.m_aDiceNum[0]);
          by.writeShort(this.m_aDiceNum[1]);
           by.writeShort(this.m_nStartCardsNum);
          by.writeShort(this.m_nStartGroupNum);
          return by;
       }

       public fRead(by:GameByteArray)
       {
             super.fRead(by);
             this.m_aDiceNum[0] = by.readShort();
             this.m_aDiceNum[1] = by.readShort();
             this.m_nStartCardsNum = by.readShort();
             this.m_nStartGroupNum = by.readShort();
             for(var i = 0; i< this.m_nStartGroupNum; i++)
             {
               var gup: CardGroup  = new CardGroup();
               gup.fRead(by);
               this.m_aCardGroup.push(gup);
             }
             this.fVerifyNumber();
       }

       //成员变量校验
       private fVerifyNumber(){
            /*if(this.m_nCardsCount != 0)
            {
                console.info('C2s_ReadyPacket this.m_nCardsCount != 0, = ' + this.m_nCardsCount);
                alert('C2s_ReadyPacket this.m_nCardsCount != 0, = ' + this.m_nCardsCount);
            }*/
          
       }
      
   }

  

}
