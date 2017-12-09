

module game {

  /**
     * brief:   发牌数据包
     * date:    2017-11-15
     * author:  徐为
   */

   export class C2s_LaunchPaiPacket extends C2s_ActionBase{
       public constructor(){
          
          super();

          this.m_oHead.m_nPktType = Protocol.s_C2S_LaunchPai;
          this.m_sActionType = Packet.s_LaunchPai;
        //  this.m_nCardsCount = 52;
       }


       public fWrite():GameByteArray{
          var by = super.fWrite();
          return by;
       }

       public fRead(by:GameByteArray)
       {
             super.fRead(by);
             this.fVerifyNumber();
       }

       //成员变量校验
       private fVerifyNumber(){
         //   if(this.m_nCardsCount != 52)
            {
              //  console.info('C2s_LaunchPaiPacket this.m_nCardsCount != 52, = ' + this.m_nCardsCount);
              //  alert('C2s_LaunchPaiPacket this.m_nCardsCount != 52, = ' + this.m_nCardsCount);
            }
           
       }
      
   }

  

}
