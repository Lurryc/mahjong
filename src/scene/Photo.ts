
/**
 * brief:   头像
 * date:    2017-11-03
 * author:  徐为
 */
module game
{
    export class Photo extends Scene
    {


      //***********************************/
     
        private m_labPos:eui.Label;
        private m_labZhuang:eui.Label;
        private m_labUid:eui.Label;
        private m_btnReady:game.Button;

        private m_pPlayPos:PlayePosition;
      //***********************************/

       
        public constructor()
        {
            super();
           
            this.skinName = "resource/gameSkins/Photo.exml";

           
        }
      

        public fOnUICreate()
        {
           this.visible = false;
        }

        public fResetReady(ready:boolean = true){
            if(ready)
               this.m_btnReady.label = "已准备"
            else
                this.m_btnReady.label = "未准备"
        }

        public fResetUi(useInof:C2s_UserInfoPacket){
            if(GameManager.fGetIns().m_pCreatorPos == useInof.m_pPosition)
              this.fSetClickButton(this.m_btnReady);
            this.visible = true;
            this.m_labPos.text = Utils.fGetNameByDesktopPos(useInof.m_pPosition);
            this.m_labZhuang.visible = false;
            this.m_labUid.text = useInof.m_sUid;
            this.m_pPlayPos = useInof.m_pPosition;
            if(useInof.m_nStatus)
            {
                this.m_btnReady.label = '已准备'
            }
            else
                 this.m_btnReady.label = '未准备'
        }



        
        public fOnClick(button)
        {

           console.info('已准备');

              var pack = <S2C_ReadyActive>Packet.fCreateAction(Packet.s_ReadyActive);
            
              var  status = GameManager.fGetIns().fGetStatusByPos(this.m_pPlayPos);
              if(status == 1)
                 status = 0;
              else
                 status = 1;
              pack.m_nReadyNum = 1;
              pack.m_aReadyPos.push(this.m_pPlayPos);
              pack.fGetHead().m_nErrcode = status;
          
              Main.fGetIns().m_oGameSocket.fSendPkt(pack);
        }

      
    }
}