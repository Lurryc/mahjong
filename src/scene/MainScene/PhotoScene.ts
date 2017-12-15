
/**
 * brief:   头像层
 * date:    2017-12-04
 * author:  徐为
 */
module game
{
    export class PhotoScene extends Scene
    {


      //***********************************/
     
        private m_gopUp:eui.Group;
        private m_gopDown:eui.Group;
        private m_gopLeft:eui.Group;
        private m_gopRight:eui.Group

        public m_oMainScene:game.MainScene;
      //***********************************/

       
        public constructor()
        {
            super();
           
            this.skinName = "resource/gameSkins/scene/MainScene/PhotoScene.exml";

           var a = new JianCard(0, 0, 0);
      
        }
      

        public fOnUICreate()
        {
           var pos = GameManager.fGetIns().m_pCreatorPos;
           if(!Utils.fNotUsefunData(pos) )   //创建房间
           {
               var photo = new Photo();
               this.m_gopDown.addChild(photo);
             //  photo.fResetUi(GameManager.fGetIns().fGetRoomInfo().m_aPlayerInfo[pos]);
           }

           this.m_oHandle.fReceiveMessage(this, this.fRoomPacket, C2s_ActionBase.s_RoomInfo);
        }

        public fRoomPacket(act:MessageEvent){
         
           var roomInf:S2C_RoomInfoPacket = <S2C_RoomInfoPacket>act.m_oDisObj;
           GameManager.fGetIns().fSetRoomInfo(roomInf);
           this.m_oMainScene.fResetRoomIdUi(GameManager.fGetIns().fGetRoomInfo().m_sRoomId);

           var userInfo:C2s_UserInfoPacket[] = roomInf.m_aPlayerInfo;

           for(var i =0; i < userInfo.length; i++){
               if(userInfo[i].m_sUid == GameManager.fGetIns().m_sCreatorUId)
                  GameManager.fGetIns().m_pCreatorPos = userInfo[i].m_pPosition;
           }

           this.m_oMainScene.fHideInit();


           for(var i =0; i < userInfo.length; i++)
           {
              var pos = Utils.fDeskPosToGamePos(GameManager.fGetIns().m_pCreatorPos, userInfo[i].m_pPosition);
                var gop = <eui.Group>this.getChildByName("gop_" + pos);
                if(gop.numChildren > 0){
                    var photo:Photo = <Photo>gop.getChildAt(0);
                    photo.fResetUi(userInfo[i]);
                }
                else
                {
                      var photo:Photo = new Photo();
                    photo.fResetUi(userInfo[i]);
                    gop.addChild(photo);
                }
               
           }
          
           console.info('roomInfo')
        }

        public fAddPhoto(photo:Photo, pos:number, firstPlayer:boolean)
        {
            var gop = <eui.Group>(this.getChildByName('gop_' + pos));
            gop.addChild(photo);
        }

        
        public fOnClick(button)
        {

        }

      
    }
}