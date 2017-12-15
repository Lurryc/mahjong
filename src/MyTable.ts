module game {
	export class MyTable extends Scene{

		/***************************** */
		public m_gopDownStackDown:eui.Group;
		public m_gopDownStackUp:eui.Group;
		public m_gopHandCardsDown:eui.Group;

		public m_gopRightStackDown:eui.Group;
		public m_gopRightStackUp:eui.Group;

		public m_gopUpStackDown:eui.Group;
		public m_gopUpStackUp:eui.Group;


		public m_gopLeftStackDown:eui.Group;
		public m_gopLeftStackUp:eui.Group;
		
		public m_btnStart:eui.Button;
		private m_bStartPress:boolean = false;
		public m_btnGoBack:eui.Button;

		private m_nCardRangeCount:number = 0;
		private m_nAllCardCount:number;
		private m_aTableCards:eui.Image[][] = [];

		private m_bNotEnough:Boolean = true;
		private m_nFrameNum:number = 0;

		private m_aInternal:number[] = [1];
		/***************************** */

		public constructor(num:number=136) {
			super();
			this.skinName = "resource/gameSkins/MyMajiangTable.exml";
			this.m_nAllCardCount = num;
		}

		protected fOnUICreate(){
           super.fOnUICreate();

		   	this.fSetClickButton(this.m_btnStart);
			   var aa:number[][] = [];
			   aa[0] = [];
			   aa[0][0] = 3;

        }

		protected fUpdate(dt_ms:number)
        {
             if(this.m_bNotEnough && this.m_bStartPress)
			 {
				if(this.m_nFrameNum == this.m_aInternal[0]){
					this.m_nFrameNum = 0;
				
					var card1 = new eui.Image("cardbei1_png");
					var card2 = new eui.Image("cardbei1_png");

					var card3 = new eui.Image("cardbei2_png");
					var card4 = new eui.Image("cardbei2_png");

					var card5 = new eui.Image("cardbei1_png");
					var card6 = new eui.Image("cardbei1_png");

					var card7 = new eui.Image("cardbei2_png");
					var card8 = new eui.Image("cardbei2_png");

					if(this.m_nCardRangeCount < 17)
					{
						// this.m_aTableCards[0].push(card1);
						card1.x = this.m_nCardRangeCount * 33;
						this.m_gopDownStackUp.addChild(card1)
						// this.m_aTableCards[0].push(card2);
						card2.x = this.m_nCardRangeCount * 33;
						this.m_gopDownStackDown.addChild(card2)

						// this.m_aTableCards[1].push(card3);
						card3.y = (this.m_nCardRangeCount+1) * -20
						this.m_gopRightStackUp.addChildAt(card3,17-this.m_nCardRangeCount);
						// this.m_aTableCards[1].push(card4);
						card4.y = (this.m_nCardRangeCount+1) * -20;
						this.m_gopRightStackDown.addChildAt(card4,17-this.m_nCardRangeCount);

						// this.m_aTableCards[2].push(card5);
						card5.x = (this.m_nCardRangeCount+1) * -33;
						this.m_gopUpStackUp.addChild(card5);
						// this.m_aTableCards[2].push(card6);
						card6.x = (this.m_nCardRangeCount+1) * -33;
						this.m_gopUpStackDown.addChild(card6);

						// this.m_aTableCards[3].push(card7);
						card7.y = this.m_nCardRangeCount * 20
						this.m_gopLeftStackUp.addChild(card7);
						// this.m_aTableCards[3].push(card8);
						card8.y = this.m_nCardRangeCount * 20;
						this.m_gopLeftStackDown.addChild(card8);

						this.m_nCardRangeCount++;
					}else{
						this.m_bNotEnough = false;
					}
					if(this.m_aInternal.length > 1)
					{
						this.m_aInternal.splice(0, 1);
					}
				}
				this.m_nFrameNum++
			 }
        }

        public fOnClick(button)
        {
		
			if(button == this.m_btnStart)
			{
	           this.m_bStartPress = true;
			}
		
		}
		private timerStartCmp(){
			var timer = new egret.Timer(100,34)
			// this.removeChild(this.m_aTableCards[4])
		}
	}
}