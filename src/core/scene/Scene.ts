module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class Scene extends eui.Component{

        /********************************/

         private m_nTimeOnEnterFrame:number = 0; //上次进入frame时间
         
         private m_aClickBtns:any[] = [];        //所有的按钮

         protected m_oHandle : game.Handle;

        /********************************/

      

        public constructor()
        {
            super();
            this.m_oHandle = new Handle();
            this.once(eui.UIEvent.COMPLETE, this.fOnUICreate, this);
        }

        protected fOnUICreate(){
            this.addEventListener(egret.Event.ENTER_FRAME, this.fEnterFrame, this);

            this.m_nTimeOnEnterFrame = egret.getTimer();
        }

        private fEnterFrame()
        {
            this.fUpdate(egret.getTimer() - this.m_nTimeOnEnterFrame);
            this.m_nTimeOnEnterFrame = egret.getTimer();
        }

        public fSetVisible(visi:boolean)
        {
            this.visible = visi;

            if(!this.visible)
            {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.fEnterFrame, this);
            }
            else
            {
                this.addEventListener(egret.Event.ENTER_FRAME, this.fEnterFrame, this);
                this.m_nTimeOnEnterFrame = egret.getTimer();
            }
        }

        /**该场景需要加载的资源组 */
        public fSceneResGroup():string
        {
            return "";
        }

        protected fUpdate(dt_ms:number)
        {
             
        }

       
        public fSetClickButton(button)
        {
            if(this.m_aClickBtns.indexOf(button) == -1)
            {
                this.m_aClickBtns.push(button);

                if(button instanceof game.Button)
                {
                    (<Button>button).fBindListener(this);
                }
                else if(button instanceof eui.RadioButton)
                {
                   
                     button.addEventListener(egret.Event.CHANGE, this.fTouchTap, this);
                }
                else{
                    button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.fTouchTap, this);
                }
            }
        }

        private fTouchTap(event:egret.TouchEvent){
            var target = event.currentTarget;
            this.fOnClick(target);
        }

        public fOnClick(button)
        {}

        public fRelease()
        {
           for(var i in this.m_aClickBtns)
           {
              this.fRemoveClickEvent(this.m_aClickBtns[i]);
           }

            this.removeEventListener(egret.Event.ENTER_FRAME, this.fEnterFrame, this);
        }

        private fRemoveClickEvent(button)
        {
            if(button instanceof Button)
              (<Button>button).fRelease();
            else
               button.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.fTouchTap, this)
        }
    }
}
