

module game {
    /**
 * brief:   游戏名
 * date:    2017-11-09
 * author:  徐为
 */   
  export enum GameName{
    e_xinPuMj = 0,              //新浦麻将
    e_ganYuMj = 1,              //赣榆麻将
  }

/**
 * brief:   游戏方式
 * date:    2017-11-09
 * author:  徐为
 */ 
export enum GameStyle{
  e_createRooom = 0,         //创建房间
  e_joinRoom = 1,            //加入房间
}

    /**
 * brief:   游戏管理类
 * date:    2017-11-09
 * author:  徐为
 */   
   export class GameManager{
       
      /********************************/

 
        public m_sCreatorUId:string;
        private m_gameStyle:GameStyle;

        public m_nCostDiamond:number;  //花费钻石数

        public m_pCreatorPos:PlayePosition;     //房间创建者位置

        public m_nLoginType:number;    //登录方式，0微信登录

        private m_oRoomInfo:S2C_RoomInfoPacket;

      /********************************/

       public constructor()
       {
           this.m_nLoginType = 0;
          
           this.m_oRoomInfo = new S2C_RoomInfoPacket();

       }

       public fGetRoomInfo(){
         return this.m_oRoomInfo;
       }

       public fSetRoomInfo(roomInfo:S2C_RoomInfoPacket){
           this.m_oRoomInfo = roomInfo;
       }

       public fSetGameName(name:GameName)
       {
           this.m_oRoomInfo.m_gameName = name;
       }


       public fGetGameName():GameName
       {
         return   this.m_oRoomInfo.m_gameName;
       }


       public fGetGameStyle():GameStyle{
         return this.m_gameStyle;
       }


       public fSetGameStyle(style:GameStyle)
       {
         this.m_gameStyle = style;
       }


      public fGetUid(pos:PlayePosition) : string{
           return this.m_oRoomInfo.m_aPlay[pos].m_sUid;
       }


       public fSetUid(uid:string, pos:PlayePosition)
       {
           if(Utils.fNotUsefunData(uid))
            console.warn('NotUsefunData');
           this.m_oRoomInfo.m_aPlay[pos].m_sUid = uid;
       }


       public fGetCreatorUid() : string{
           return this.m_oRoomInfo.m_aPlay[this.m_pCreatorPos].m_sUid;
       }

       public fGetFirstPlayPos():PlayePosition{
           for(var i in this.m_oRoomInfo.m_aPlayerInfo)
           {
             if(this.m_sCreatorUId == this.m_oRoomInfo.m_aPlayerInfo[i].m_sUid)
               return this.m_oRoomInfo.m_aPlayerInfo[i].m_pPosition;
           }
       }
	
	    public static fGetIns()
		  {
		  	if (!GameManager.s_ins)
		  	{
			  	GameManager.s_ins = new GameManager();
			  }
		    return GameManager.s_ins;
		  }


      public fGetStatusByPos(pos:PlayePosition):number
      {
         for(var i = 0; i < this.m_oRoomInfo.m_aPlayerInfo.length; i++){
            if(pos == this.m_oRoomInfo.m_aPlayerInfo[i].m_pPosition)
               return this.m_oRoomInfo.m_aPlayerInfo[i].m_nStatus;
         }

         console.warn('GameManager fGetStatusByPos 失败');
         return -1;
      }

       /********************************/
            
        private static s_ins: GameManager;

        /********************************/
   }
}
