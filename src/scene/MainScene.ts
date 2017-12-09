
/**
 * brief:   麻将主场景
 * date:    2017-11-03
 * author:  徐为
 */
module game
{
    export class MainScene extends Scene
    {


      //***********************************/

      private m_labRoomId:eui.Label;
      private m_btnBack:game.Button;

      private m_btnBegin:game.Button;
     
      private m_labGoUp:eui.Label;
      private m_labGoDown:eui.Label;
      private m_labGoLeft:eui.Label;
      private m_labGoRight:eui.Label;

     /* private m_gopLeft:eui.Group;
      private m_gopUp:eui.Group;
      private m_gopDown:eui.Group;
      private m_gopRight:eui.Group;*/

      private m_oPhotoScene:PhotoScene;

      private m_imgPos:eui.Image;

       private m_aPhotos:Photo[] = [];

       private m_gopCardDown:eui.Group;
       private m_gopCardUp:eui.Group;

       private m_oCardDown:CardGroupUd;
        private m_oCardUp:CardGroupUd;


        private m_gopCardLeft:eui.Group;
          private m_gopCardRight:eui.Group;
        private m_oCardLeft:CardGroupLr;
        private m_oCardRight:CardGroupLr;


       private m_gopHandDown:eui.Group;
       private m_gopHandLeft:eui.Group;
       private m_gopHandUp:eui.Group;
        private m_gopHandRight:eui.Group;

       private m_oHandCardDown:HandCardDown;
       private m_oHandCardLeft:HandCardLeft;
       private m_oHandCardUp:HandCardUp;
        private m_oHandCardRight:HandCardRight;
      //***********************************/

       
        public constructor()
        {
            super();
           
            this.skinName = "resource/gameSkins/scene/MainScene.exml";
             this.fSetClickButton(this.m_btnBack);

             this.m_oPhotoScene = new PhotoScene();
             this.addChild(this.m_oPhotoScene);

             this.m_oPhotoScene.m_oMainScene = this;
             
           // this.m_aPhotos[PlayePosition.e_Down] = new Photo();
          
         // this.m_gopDown.addChild(this.m_aPhotos[PlayePosition.e_Down]);

        //  this.m_aPhotos[PlayePosition.e_Up] = new Photo();
         // this.m_gopUp.addChild(this.m_aPhotos[PlayePosition.e_Up]);
         // this.m_aPhotos[PlayePosition.e_Up].visible = false;

        //  this.m_aPhotos[PlayePosition.e_Left] = new Photo();
         // this.m_gopLeft.addChild(this.m_aPhotos[PlayePosition.e_Left]);
           // this.m_aPhotos[PlayePosition.e_Left].visible = false;

       //   this.m_aPhotos[PlayePosition.e_Right] = new Photo();
       //   this.m_gopRight.addChild(this.m_aPhotos[PlayePosition.e_Right]);
           
        }
      

         /**该场景需要加载的资源组 */
        public fSceneResGroup():string
        {
            return "hall";
        }

        public fResetRoomIdUi(roomId:string){
            this.m_labRoomId.text = roomId;
        }


        public fHideInit(){
          
            if(GameManager.fGetIns().m_pCreatorPos == PlayePosition.e_Down)
            {
                this.m_imgPos.source = RES.getRes("pos_nan_png")
            }
            else if(GameManager.fGetIns().m_pCreatorPos == PlayePosition.e_Left)
            {
                this.m_imgPos.source = RES.getRes("pos_xi_png")
            }
            else if(GameManager.fGetIns().m_pCreatorPos == PlayePosition.e_Right)
            {
                this.m_imgPos.source = RES.getRes("pos_dong_png")
            }

            this.m_gopCardUp.visible = false;
            this.m_gopCardRight.visible = false;
            this.m_gopCardDown.visible = false;
            this.m_gopCardLeft.visible = false;


             
            this.m_labGoUp.visible = false;
            this.m_labGoDown.visible = false;
            this.m_labGoLeft.visible = false;
            this.m_labGoRight.visible = false;
        }

        //桌牌初始化
        private fInitDeskCard(){

          this.m_oCardDown = new CardGroupUd();
          this.m_gopCardDown.addChild(this.m_oCardDown);

          this.m_oCardUp = new CardGroupUd();
          this.m_gopCardUp.addChild(this.m_oCardUp);
       
          this.m_oCardLeft = new CardGroupLr();
          this.m_gopCardLeft.addChild(this.m_oCardLeft);

          this.m_oCardRight = new CardGroupLr();
          this.m_gopCardRight.addChild(this.m_oCardRight);
        }
       
        public fOnUICreate()
        {
          
         this.fSetClickButton(this.m_btnBegin)
         this.fInitDeskCard();
        
         this.m_labRoomId.text = GameManager.fGetIns().fGetRoomInfo().m_sRoomId;

         


        
        this.m_oHandCardDown = new HandCardDown();
         this.m_gopHandDown.addChild(this.m_oHandCardDown);
      
        this.m_oHandCardLeft = new HandCardLeft();
        this.m_gopHandLeft.addChild(this.m_oHandCardLeft);

        this.m_oHandCardUp = new HandCardUp();
        this.m_gopHandUp.addChild(this.m_oHandCardUp);

           this.m_oHandCardRight = new HandCardRight();
        this.m_gopHandRight.addChild(this.m_oHandCardRight);
         
        //  this.m_oGameInitLayer = new GameInitLayer();
        //  this.addChild(this.m_oGameInitLayer);

        //  this.m_oLaunchLayer = new LaunchPaiLayer();
        //  this.addChild(this.m_oLaunchLayer);

          var self = this;
          this.m_oHandle.fReceiveOnce(this, function(act:MessageEvent){
               var pak:C2s_ReadyPacket = act.m_oDisObj;

                 self.m_gopCardUp.visible = true;
                 self.m_gopCardRight.visible = true;
                 self.m_gopCardDown.visible = true;
                 self.m_gopCardLeft.visible = true;
                 var  handCount = pak.m_aCardGroup[0].m_nCardsCount;
                 var deskNum = pak.m_nStartCardsNum - handCount * 4;
                 this.m_oCardDown.fAddCards(deskNum/4, PlayePosition.e_Down);
                 this.m_oCardUp.fAddCards(deskNum/4, PlayePosition.e_Up);
                 this.m_oCardLeft.fAddCards(deskNum/4, PlayePosition.e_Left);
                 this.m_oCardRight.fAddCards(deskNum/4, PlayePosition.e_Right);

                 for(var i = 0; i < pak.m_aCardGroup.length; i++){
                     if(pak.m_aCardGroup[i].m_pBelong == GameManager.fGetIns().m_pCreatorPos){
                         self.m_oHandCardDown.visible = true;
                         self.m_oHandCardDown.fAddCards(pak.m_aCardGroup[i].fGetCard())
                     }
                     else if(Utils.fDeskPosToGamePos(GameManager.fGetIns().m_pCreatorPos, pak.m_aCardGroup[i].m_pBelong) == PlayePosition.e_Left) {
                          self.m_oHandCardLeft.visible = true; 
                           self.m_oHandCardLeft.fAddCards(pak.m_aCardGroup[i].fGetCard())
                     }
                     else if(Utils.fDeskPosToGamePos(GameManager.fGetIns().m_pCreatorPos, pak.m_aCardGroup[i].m_pBelong) == PlayePosition.e_Up) {
                          self.m_oHandCardUp.visible = true; 
                           self.m_oHandCardUp.fAddCards(pak.m_aCardGroup[i].fGetCard())
                     }
                     else if(Utils.fDeskPosToGamePos(GameManager.fGetIns().m_pCreatorPos, pak.m_aCardGroup[i].m_pBelong) == PlayePosition.e_Right) {
                          self.m_oHandCardRight.visible = true; 
                           self.m_oHandCardRight.fAddCards(pak.m_aCardGroup[i].fGetCard())
                     }
                 }
     
          }, C2s_ActionBase.s_ReadyPlay);

   

          this.m_oHandle.fReceiveMessage(this, function(act:MessageEvent){
            console.info('有人加入');
          }, C2s_ActionBase.s_JoinRoom);

           this.m_oHandle.fReceiveMessage(this, function(act:MessageEvent){
            console.info('有人摸排');
            var mopai:C2s_TouchPacket = <C2s_TouchPacket>(act.m_oDisObj);
            if(mopai.fGetCurrPlayrPos() == mopai.fGetBelongPlayerPos() )
            {
                   var pack = <C2s_PlayHandAction>Packet.fCreateAction(Packet.s_PlayHand);
               pack.m_nCardsGroupCount = 1;
               pack.m_pBelongPlayer = mopai.fGetCurrPlayrPos();
               pack.m_pCurrentPlayer = mopai.fGetCurrPlayrPos();
              var gop = new CardGroup();
              pack.m_aGroupCards.push(gop);

              var firstPos = game.GameManager.fGetIns().fGetFirstPlayPos();
              var gop = GameManager.fGetIns().fGetRoomInfo().fGetUserInfoByPos(firstPos).fGetHandCardGop();

            
              var num = Math.floor(Math.random()*(gop.m_nCardsCount+1));
              var card = gop.fGetCard()[num];
              gop.fGetCard().splice(num,1);//
              pack.m_nCardsGroupCount = 1;
              Main.fGetIns().m_oGameSocket.fSendPkt(pack);
            }
          }, C2s_ActionBase.s_Touch);

           this.m_oHandle.fReceiveMessage(this, function(act:MessageEvent){
             var pak:S2C_ReadyActive = act.m_oDisObj;
               GameManager.fGetIns().fGetRoomInfo(). fCancelUserReadyStatus();
             for(var i =0; i < pak.m_aReadyPos.length; i++)
             {
                  GameManager.fGetIns().fGetRoomInfo().fGetUserInfoByPos(pak.m_aReadyPos[i]).m_nStatus = 1;
                   var pos = Utils.fDeskPosToGamePos(GameManager.fGetIns().m_pCreatorPos, pak.m_aReadyPos[i]);
                    if(pos == PlayePosition.e_Down)
                 self.m_aPhotos[PlayePosition.e_Down].fResetReady()
              else if(pos == PlayePosition.e_Up)
                 self.m_aPhotos[PlayePosition.e_Up].fResetReady()
              else if(pos == PlayePosition.e_Left)
                 self.m_aPhotos[PlayePosition.e_Left].fResetReady()
              else if(pos == PlayePosition.e_Right)
                 self.m_aPhotos[PlayePosition.e_Right].fResetReady()
             }

            for(var i = 0; i <   GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo.length; i++)
            {
                if( GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo[i].m_nStatus == 0)
                {
                     var pos = Utils.fDeskPosToGamePos(GameManager.fGetIns().m_pCreatorPos,GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo[i].m_pPosition);
                      self.m_aPhotos[ pos].fResetReady(false);
                }
            }

          }, C2s_ActionBase.s_ReadyActive);
          
          
        }

    



        public fResetPhoto(pos:PlayePosition, userInfo:C2s_UserInfoPacket){

          
        }

        
        
        public fOnClick(button)
        {

            if(button == this.m_btnBack)
            {
                game.GameScenenManager.fGetIns().fBackToLastScene();
                return ;
            }
            else if(button == this.m_btnBegin)
            {
                 var readPkt:C2s_ReadyPacket =  <C2s_ReadyPacket>C2s_ActionBase.fCreateAction(C2s_ActionBase.s_ReadyPlay)
                
                  Main.fGetIns().m_oGameSocket.fSendPkt(readPkt);
             //  readPkt.m_nReadyNum = 1;
             //  readPkt.m_aReadyPos = [GameManager.fGetIns().m_pCreatorPos];
                //  Main.fGetIns().m_oGameSocket.fSendPkt(readPkt);
            }
            else{
               var readAPkt:S2C_ReadyActive =  <S2C_ReadyActive>C2s_ActionBase.fCreateAction(C2s_ActionBase.s_ReadyActive)
               readAPkt.m_nReadyNum = 1;
               readAPkt.m_aReadyPos = [GameManager.fGetIns().m_pCreatorPos];
                  Main.fGetIns().m_oGameSocket.fSendPkt(readAPkt);
            }
          
             
         //   this.m_btnReady.fRelease();
          //  this.m_btnReady.parent.removeChild(this.m_btnReady);
         
        }

      
    }
}