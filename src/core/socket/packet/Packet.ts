

module game {

/**
 * brief:   通信数据包头
 * date:    2017-10-31
 * author:  徐为
 */
class PacketHead
{

   /********************************/
   public  m_nPktLen:number;
   public m_nPktType:number;
   public m_nErrcode:number = 0;
  /********************************/

   public fWrite():GameByteArray{
      var by = new GameByteArray;
      by.writeShort(this.m_nPktType);
    
      by.writeInt(this.m_nErrcode);
      return by;
   }

   public fRead(by:GameByteArray):void
   {
      this.m_nPktLen = by.readShort();
      this.m_nPktType = by.readShort();
      this.m_nErrcode = by.readInt();
   }

}

/**
 * brief:   通信基础数据
 * date:    2017-10-31
 * author:  徐为
 */
export class Packet
{
   protected m_oHead:PacketHead = new PacketHead;

   protected m_sActionType:string;

   
   
   public fWrite():GameByteArray
   {
     return this.m_oHead.fWrite();
   }

   public fRead(by:GameByteArray):void
   {
     this.m_oHead.fRead(by);
   }

   public fGetHead():PacketHead
   {
     return this.m_oHead;
   }


   private static  s_aPacketMap = [];

   public static fInitPacketMap()
   {
     if(Packet.s_aPacketMap.length)
        return;
       
     Packet.s_aPacketMap.push([game.Packet.s_Eat, function(){return new game.C2s_EatAction}])
     Packet.s_aPacketMap.push([game.Packet.s_JoinRoom, function(){return new game.C2s_JoinRoomPacket}])
     Packet.s_aPacketMap.push([game.Packet.s_PlayHand, function(){return new game.C2s_PlayHandAction}])
     Packet.s_aPacketMap.push([game.Packet.s_ReadyPlay, function(){return new game.C2s_ReadyPacket}])
     Packet.s_aPacketMap.push([game.Packet.s_LaunchPai, function(){return new game.C2s_LaunchPaiPacket}])
     Packet.s_aPacketMap.push([game.Packet.s_CreateRoom, function(){return new game.C2s_CreateRoomPacket}])
     Packet.s_aPacketMap.push([game.Packet.s_ReadyActive, function(){return new game.S2C_ReadyActive}])
   }
 

    public static fCreateAction(type:string):Packet{
            var action:Packet = null;
           if(!Packet.s_aPacketMap.length)
           {
              console.warn('Packet.s_aPacketMap 未初始化');
              return null;
           }

           for(var i in Packet.s_aPacketMap)
           {
             if(Packet.s_aPacketMap[i][0] ==type )
                action = Packet.s_aPacketMap[i][1]();
           }

           if(action == null)
           {
             console.warn('C2s_ActionBase.CreateAction fail ' + type);
  
           }

           return action;
          
       }

       public fGetActionType():string{

           return this.m_sActionType;
       }

   public static fCreatePkt(type): Packet
   {
      var p:Packet = null;
      switch(type){
        case Protocol.s_C2S_HEARDBEAT:
          p = new C2s_HeartBeat;
          break;
        case Protocol.s_C2S_CREATEROOM:
          p = new C2s_CreateRoomPacket;
          break;
        case Protocol.s_C2S_JOINROOM:
          p = new C2s_JoinRoomPacket;
          break;
         case Protocol.s_C2S_ROOMINFO:
          p = new S2C_RoomInfoPacket;
          break;
        case Protocol.s_C2S_HEARDBEAT:
          p = new C2s_HeartBeat;
          break;
          case Protocol.s_C2S_Ready:
          p = new S2C_ReadyActive;
          break;
         case Protocol.s_C2S_StartHand:
          p = new C2s_ReadyPacket;
          break;
             case Protocol.s_C2S_MOPAI:
          p = new C2s_TouchPacket;
          break;
        default:
          alert("fCreatePkt fail" + type);
      }

      return p;
   }

 


     /********************************/

        public static s_Eat:string = "eat_pai";
        public static s_PlayHand:string = "chu_pai";
        public static s_ReadyPlay:string = "ready";
        public static s_LaunchPai:string = 'launch_pai';
        public static s_CreateRoom:string = "create_room";
        public static s_JoinRoom:string = 'join_room';
        public static s_BaseAct:string = "base_act";
        public static s_Login:string = "login";
        public static s_Heart:string = "heart";
        public static s_RoomInfo:string = "roominfo"
        public static s_ReadyActive:string = "readyActive";
        public static s_Touch:string = "touch_pai";   //摸排

      /********************************/
}

	
}
