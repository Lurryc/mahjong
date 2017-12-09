

module game {


/**
 * brief:   创建房间数据
 * date:    2017-10-31
 * author:  徐为
 */

export class C2s_CreateRoomPacket extends Packet{
   
     /********************************/
        public m_gameName : GameName;

        public m_gameType : GameStyle;

        public m_nPayStyle : number;   //付费方式, 0为AA，1为房主付费

        public m_nCircle : number;    //局数

        public m_sRoomId : string;

        public m_pPosition:PlayePosition;

     /********************************/

    public constructor(){
       super();
       this.m_oHead.m_nPktType = Protocol.s_C2S_CREATEROOM;
       this.m_sActionType = Packet.s_CreateRoom;
       this.m_sRoomId = "";
       this.m_gameName = GameName.e_ganYuMj;
       this.m_gameType = GameStyle.e_createRooom;
       this.m_nPayStyle = 0;
       this.m_nCircle = 4;
       this.m_pPosition = PlayePosition.e_Unknow;

    }

    public fWrite():GameByteArray{
          var by = super.fWrite();
          by.writeShort(this.m_gameName);
          by.writeShort(this.m_gameType);
          by.writeShort(this.m_nPayStyle);
          by.writeShort(this.m_nCircle);
          by.writeUTF(this.m_sRoomId);
          by.writeShort(this.m_pPosition);
          return by;
       }

       public fRead(by:GameByteArray)
       {
             super.fRead(by);
             this.m_gameName = by.readShort();
             this.m_gameType = by.readShort();
             this.m_nPayStyle = by.readShort();
             this.m_nCircle = by.readShort();
             this.m_sRoomId = by.readUTF();
             GameManager.fGetIns().fGetRoomInfo().m_sRoomId = this.m_sRoomId;
             this.m_pPosition = by.readShort();
             GameManager.fGetIns().m_pCreatorPos = this.m_pPosition;
             this.fVerifyNumber();
       }

       //成员变量校验
       private fVerifyNumber(){
            if(this.m_nPayStyle >= 2)
            {
                console.info('C2s_HeartCreateRoomPacket this.m_nPayStyle >= 2, = ' + this.m_nPayStyle);
                alert('C2s_HeartCreateRoomPacket this.m_nPayStyle >= 2, = ' + this.m_nPayStyle);
            }
            if(this.m_gameType != GameStyle.e_createRooom)
            {
                 console.info('C2s_HeartCreateRoomPacket this.m_gameType != e_createRooom, = ' + this.m_gameType);
                 alert('C2s_HeartCreateRoomPacket this.m_gameType != e_createRooom, = ' + this.m_gameType);
            }
       }
   
}

}
