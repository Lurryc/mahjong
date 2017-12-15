
/**
 * brief:   大厅
 * date:    2017-11-17
 * author:  徐为
 */
module game
{
    export class HallScene extends Scene
    {


      //***********************************/

        private m_btnJoin:game.Button;
        private m_btnCreate:game.Button;

      //***********************************/

       
        public constructor()
        {
            super();
             
            this.skinName = "resource/gameSkins/scene/HallScene.exml";
 
           
        }
      

         /**该场景需要加载的资源组 */
        public fSceneResGroup():string
        {
            return "hall";
        }

       
        public fOnUICreate()
        {
          this.fSetClickButton(this.m_btnJoin);
        
          this.fSetClickButton(this.m_btnCreate);

          var self = this;
           this.m_oHandle.fReceiveOnce(this, function(act:C2s_ActionBase){
                 //self.m_oGameInitLayer.fGameReady();
          }, C2s_ActionBase.s_CreateRoom);
        }
        
        public fOnClick(button)
        {
           var layer:ShowLayer;
          if(button == this.m_btnCreate)
          {
          /*  var readPkt:C2s_CreateRoomPacket =  <C2s_CreateRoomPacket>Packet.CreateAction(Packet.s_CreateRoom);
            readPkt.m_gameName = GameName.e_ganYuMj;
            readPkt.m_gameType = GameStyle.e_createRooom;
            readPkt.m_nCircle = 4;
            readPkt.m_nPayStyle = 0;
            Main.fGetIns().m_oGameSocket.m_oActionMoudle.fCreateRoom(<C2s_CreateRoomPacket>readPkt);*/
            layer = new CreateRoomLayer();
            layer.fShow();
          }
          else if(button == this.m_btnJoin)
          {
             layer = new JoinRoomLayer()
             layer.fShow();
          }
         
        }

      
    }
}