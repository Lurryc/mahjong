
/**
 * brief:   创建层
 * date:    2017-11-15
 * author:  徐为
 */
module game
{
    export class JoinRoomLayer extends ShowLayer
    {
       


       //***********************************/

     private m_btnClose:game.Button;

     private m_btnJoin:game.Button;
    
     private m_inputRoomId:eui.TextInput;

     private m_inputName:eui.TextInput;
   
     private m_oCreateRoomPacket:C2s_CreateRoomPacket;
      //***********************************/


        public constructor()
        {
            super();
            
            this.skinName = "resource/gameSkins/layer/JoinRoom.exml";
            
          
        }
       
   
        public fOnUICreate()
        {
           this.fSetClickButton(this.m_btnClose);
           this.fSetClickButton(this.m_btnJoin);

           var self = this;

            this.m_oHandle.fReceiveOnce(this, function(act){
              
               self.m_oCreateRoomPacket = act.m_oDisObj;
               if(self.m_oCreateRoomPacket.fGetHead().m_nErrcode)
               {
                      TipShow.fShow('加入房间失败' + self.m_oCreateRoomPacket.fGetHead().m_nErrcode);
               }
               else
               {
                     this.fExit();
                     game.GameScenenManager.fGetIns().fEnterScene(GameSceneName.MAIN)
               }
              
          }, Packet.s_JoinRoom);
        }

        public fOnClick(button)
        {
          if(button == this.m_btnClose)
            this.fExit();
          else if(button == this.m_btnJoin)
          {
              var pack = <C2s_JoinRoomPacket>Packet.fCreateAction(Packet.s_JoinRoom);
              pack.m_gameName = parseInt(this.m_inputName.text);
              pack.m_sRoomId = this.m_inputRoomId.text;
           //   pack.m_nCircle = parseInt(this.m_inputCircle.text);
            //  pack.fWrite();
              Main.fGetIns().m_oGameSocket.fSendPkt(pack);
          }
        }

     
      
    }
}