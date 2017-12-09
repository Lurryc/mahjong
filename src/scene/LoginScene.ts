
/**
 * brief:   登录
 * date:    2017-11-17
 * author:  徐为
 */
module game
{
    export class LoginScene extends Scene
    {


      //***********************************/

      private m_textIptUid:eui.TextInput;
      private m_btnLogin:eui.Button;

      //***********************************/

       
        public constructor()
        {
            super();
             
            this.skinName = "resource/gameSkins/scene/LoginScene.exml";
 
           
        }
      

         /**该场景需要加载的资源组 */
        public fSceneResGroup():string
        {
            return "";
        }

       
        public fOnUICreate()
        {

            this.m_textIptUid = new eui.TextInput();
             this.m_textIptUid.width = 15;
            this.m_textIptUid.prompt  = "请输入账号:";
             this.m_textIptUid.textColor = 0xffffff;
             this.m_textIptUid.restrict = "0-9"
            this.m_textIptUid.x = this.width/7 + 50;
            this.m_textIptUid.y = this.height - 80;
            this.addChild( this.m_textIptUid);


            this.fSetClickButton(this.m_btnLogin)
        }
        
        private onChange(){}

        public fOnClick(button)
        {
            
            if(Utils.fNotUsefunData(this.m_textIptUid.text))
              {
                 // alert('未输入账号')
                  TipShow.fShow('请输入账号');
                  return;
              }
       GameManager.fGetIns().m_sCreatorUId = this.m_textIptUid.text;

             
           Main.fGetIns().m_oGameSocket.fInitSocket();

           GameScenenManager.fGetIns().fEnterScene(GameSceneName.HALL)
        }

      
    }
}