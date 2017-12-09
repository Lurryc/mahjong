
module game{

/**
 * brief:   活动网络逻辑处理
 * date:    2017-11-01
 * author:  徐为f
 */

export class ActionMoudle{

  private m_oHandle:Handle;

  public constructor(){
     GameSocket.s_aProtocols[Protocol.s_C2S_PLAYHAND] = [this, this.fPlayHand]
    // GameSocket.s_aProtocols[Protocol.s_C2S_Ready] = [this, this.fReady]
     GameSocket.s_aProtocols[Protocol.s_C2S_LaunchPai] = [this, this.fReady]
     GameSocket.s_aProtocols[Protocol.s_C2S_CREATEROOM] = [this, this.fCreateRoom];
     GameSocket.s_aProtocols[Protocol.s_C2S_MOPAI] = [this, this.fCreateRoom];
     this.m_oHandle = new Handle();
  }

  public fPlayHand(pkt: C2s_PlayHandAction):void{
      
  }

  public fReady(pkt:C2s_ReadyPacket):void{
      this.m_oHandle.fSendMessage(pkt.fGetActionType())
  }

  public fLaunchPai(pkt:C2s_ActionBase):void
  {
       this.m_oHandle.fSendMessage(pkt.fGetActionType(), pkt)
  }

  public fCreateRoom(pkt:C2s_CreateRoomPacket):void
  {
        this.m_oHandle.fSendMessage(pkt.fGetActionType(), pkt)
  }
  
    private fDispatchPkt(pktName: string, pkt: Packet): void {
       // var event: ModuleEvent = new ModuleEvent(pktName);
       // event.pkt = pkt;
       // WndManager.root.clientSocket.dispatchEvent(event);
    }
}
}
