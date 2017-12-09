
/**
 * brief:   麻将发牌层
 * date:    2017-11-15
 * author:  徐为
 */
module game
{
    export class LaunchPaiLayer extends Scene
    {
       


       //***********************************/

        private m_gopDown:eui.Group;
     
        private m_oLaunchPacket:C2s_LaunchPaiPacket;

      //***********************************/


        public constructor()
        {
            super();
            
            this.skinName = "resource/gameSkins/layer/LaunchPaiLayer.exml";
            
          
        }
       
   
        public fOnUICreate()
        {
            this.m_gopDown.visible = false;

            var self = this;
           this.m_oHandle.fReceiveOnce(this, function(act){
               self.m_gopDown.visible = true;
               self.m_oLaunchPacket = act.m_oDisObj;
               var cards = self.m_oLaunchPacket.fGetCards();
               for(var i in cards)
               {
                  // self.fAddReadCards(cards[i].fGetType(), cards[i].fGetValue(), cards[i].m_pBelong);
               }
          }, C2s_ActionBase.s_LaunchPai);
        }


        private fAddReadCards(type:string, value:string, dir:PlayePosition)
        {

            if(dir == PlayePosition.e_Down)
            {
                  var index = this.m_gopDown.numChildren;
                var img = new eui.Image(RES.getRes('majiangzi_json.pai_user_wan9_png'))
                img.x = index * 74;
                this.m_gopDown.addChild(img);
              
                console.info("index= " +index)
                
            }
        }

        public fLaunchPai(){
            this.m_gopDown.visible = true;
          
           
            for(var i = 1; i < 12; i++)
            {
                this.fAddReadCards('','', PlayePosition.e_Up)
            }

         
        }
        
        public fOnClick(button)
        {
            console.info('button');
        }

      
    }
}