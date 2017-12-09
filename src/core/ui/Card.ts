module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class Card extends eui.Component{

        /********************************/

         private m_labValue:eui.Label;
         private m_oCardBuf:CardBase;

        /********************************/

      

        public constructor(name:string, cardBase:CardBase)
        {
            super();
            this.skinName = "resource/gameSkins/BaseCard.exml";
            this.once(eui.UIEvent.COMPLETE, this.fOnUICreate, this);
            this.m_oCardBuf = cardBase;
            this.m_labValue.text = name;
        }

        protected fOnUICreate(){
          
         
        }
      
    }

    	export class CardLeft extends eui.Component{

        /********************************/

       
        /********************************/

      

        public constructor(name:string, cardBase:CardBase)
        {
            super();
            this.skinName = "resource/gameSkins/CardBaseLeft.exml";
            this.once(eui.UIEvent.COMPLETE, this.fOnUICreate, this);
        
        }

        protected fOnUICreate(){
          
         
        }
      
    }

    	export class CardUp extends eui.Component{

        /********************************/

       
        /********************************/

      

        public constructor(name:string, cardBase:CardBase)
        {
            super();
            this.skinName = "resource/gameSkins/CardBaseUp.exml";
            this.once(eui.UIEvent.COMPLETE, this.fOnUICreate, this);
        
        }

        protected fOnUICreate(){
          
         
        }
      
    }

   	export class CardRight extends eui.Component{

        /********************************/

       
        /********************************/

      

        public constructor(name:string, cardBase:CardBase)
        {
            super();
            this.skinName = "resource/gameSkins/CardBaseRight.exml";
            this.once(eui.UIEvent.COMPLETE, this.fOnUICreate, this);
        
        }

        protected fOnUICreate(){
          
         
        }
      
    }
}
