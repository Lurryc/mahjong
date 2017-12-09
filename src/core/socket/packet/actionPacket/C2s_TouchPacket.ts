

module game {

  /**
     * brief:   摸排
     * date:    2017-12-04
     * author:  徐为
   */

   export class C2s_TouchPacket extends C2s_ActionBase{
        /********************************/
           
        /********************************/

       public constructor(){
          
          super();
          this.m_oHead.m_nPktType = Protocol.s_C2S_MOPAI;
          this.m_sActionType = Packet.s_Touch;
      
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
           // if(this.m_nCardsCount != 3)
            {
            //    console.info('C2s_EatAction this.m_nCardsCount != 3, = ' + this.m_nCardsCount);
             //   alert('C2s_EatAction this.m_nCardsCount != 3, = ' + this.m_nCardsCount);
            }
            
       }
      
   }

  

}
