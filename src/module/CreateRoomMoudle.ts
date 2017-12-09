
module game{

/**
 * brief:   创建房间网络逻辑处理
 * date:    2017-11-01
 * author:  徐为
 */

export class CreateRoomMoudle{

  private m_oHandle:Handle;

  public constructor(){
     GameSocket.s_aProtocols[Protocol.s_C2S_CREATEROOM] = [this, this.fCreateRoom]
     this.m_oHandle = new Handle();
  }

  public fCreateRoom(pkt:C2s_CreateRoomPacket):void{
       GameManager.fGetIns().fSetGameName(pkt.m_gameName);
       GameManager.fGetIns().fSetGameStyle(pkt.m_gameType);
       GameManager.fGetIns().fGetRoomInfo().m_nPayStyle = pkt.m_nPayStyle;
       GameManager.fGetIns().fGetRoomInfo().m_nCircle = pkt.m_nCircle;
       GameManager.fGetIns().fGetRoomInfo().m_sRoomId = pkt.m_sRoomId;
       var useinfo = new C2s_UserInfoPacket();
       useinfo.m_sUid = GameManager.fGetIns().m_sCreatorUId;
       useinfo.m_nStatus = 0;
       useinfo.m_pPosition = GameManager.fGetIns().m_pCreatorPos;
       GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo.push(useinfo);

       this.m_oHandle.fSendMessage(pkt.fGetActionType(), pkt)
       this.m_oHandle.fSendMessage(Packet.s_RoomInfo,   GameManager.fGetIns().fGetRoomInfo())
  }
}
}
