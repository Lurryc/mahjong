
/**
 * brief:   创建层
 * date:    2017-11-15
 * author:  徐为
 */
module game
{
    export class CreateRoomLayer extends ShowLayer
    {
       


       //***********************************/

     // private m_radio:eui.RadioButton;
     private m_btnClose:game.Button;
     private m_gopFuStyle:eui.Group;
     private m_gopCount:eui.Group;
     private m_gopName:eui.Group;
     private m_btnCreateRoom:game.Button;
     
     private m_inputPayStyle:eui.TextInput;
     private m_inputCircle:eui.TextInput;
     private m_inputGameName:eui.TextInput;

     private m_oCreateRoomPacket:C2s_CreateRoomPacket;
      //***********************************/


        public constructor()
        {
            super();
            
            this.skinName = "resource/gameSkins/layer/CreateRoom.exml";
            
          
        }
       
   
        public fOnUICreate()
        {
           this.fSetClickButton(this.m_btnClose);
           this.fSetClickButton(this.m_btnCreateRoom);

           var self = this;

            this.m_oHandle.fReceiveOnce(this, function(act){
              
               self.m_oCreateRoomPacket = act.m_oDisObj;
               if(self.m_oCreateRoomPacket.fGetHead().m_nErrcode)
               {
                      TipShow.fShow('创建房间失败' + self.m_oCreateRoomPacket.fGetHead().m_nErrcode);
               }
               else
               {
                    game.GameManager.fGetIns().m_pCreatorPos = self.m_oCreateRoomPacket.m_pPosition;
                    this.fExit();
                    game.GameScenenManager.fGetIns().fEnterScene(GameSceneName.MAIN)
               }
              
          }, Packet.s_CreateRoom);
        }

        public fOnClick(button)
        {
          if(button == this.m_btnClose)
            this.fExit();
          else if(button == this.m_btnCreateRoom)
          {
              var pack = <C2s_CreateRoomPacket>Packet.fCreateAction(Packet.s_CreateRoom);
              pack.m_gameName = parseInt(this.m_inputGameName.text);
              pack.m_nPayStyle = parseInt(this.m_inputPayStyle.text);
              pack.m_nCircle = parseInt(this.m_inputCircle.text);
            //  pack.fWrite();
              Main.fGetIns().m_oGameSocket.fSendPkt(pack);
            //  
          }
        }

     
      
    }
}