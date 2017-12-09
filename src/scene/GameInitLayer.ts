
/**
 * brief:   麻将初始准备层
 * date:    2017-11-03
 * author:  徐为
 */
module game
{
    export class GameInitLayer extends Scene
    {
       


       //***********************************/

        private m_gopTop:eui.Group;
        private m_aTopCards:eui.Image[] = []
        private m_aTopCardsGroup:eui.Group[] = [];

        private m_gopButtom:eui.Group;
        private m_aButtomCards:eui.Image[] = []
        private m_aButtomCardsGroup:eui.Group[] = [];

        private m_gopLeft:eui.Group;
        private m_aLeftCards:eui.Image[] = []
        private m_aLeftCardsGroup:eui.Group[] = [];

        private m_gopRight:eui.Group;
        private m_aRightCards:eui.Image[] = []
        private m_aRightCardsGroup:eui.Group[] = [];

        private m_aAllGroup:eui.Group[] = [];

      //***********************************/


        public constructor()
        {
            super();
            this.skinName = "resource/gameSkins/layer/GameInitLayer.exml";
           
        }
       
   
        public fOnUICreate()
        {
           // this.addEventListener(egret.TouchEvent.TOUCH_END, this.fOnClick, this);
           // this.touchEnabled = false;
           // this.touchChildren = false;
            this.m_gopTop.visible = false;
            this.m_gopButtom.visible = false;
            this.m_gopLeft.visible = false;
            this.m_gopRight.visible = false;


            this.m_aAllGroup[PlayePosition.e_Up] = this.m_gopTop;
        }

        private fDeleteImgCard(index:PlayePosition, dir:number)
        {
            var group:eui.Group;
            if(dir == 0)  //顺时针
            {
                
            }
            else
            {

            }
        }


        private fAddReadCards(dir:PlayePosition)
        {

            var groupCard:eui.Group[];
            var group:eui.Group;
            var img0:eui.Image;
            var img1:eui.Image;
            var index:number = 0;
            var self = this;
            if(dir == PlayePosition.e_Left)
            {
                 group = <eui.Group>this.m_gopLeft;
                 groupCard = this.m_aLeftCardsGroup;
            }
            else if(dir == PlayePosition.e_Right)
            {
                 group = <eui.Group>this.m_gopRight
                 groupCard = this.m_aRightCardsGroup;
            }
            else if(dir == PlayePosition.e_Down)
            {
                group = <eui.Group>this.m_gopButtom
                groupCard = this.m_aButtomCardsGroup;
            }
            else if(dir == PlayePosition.e_Up)
            {
                group = <eui.Group>this.m_gopTop
                groupCard = this.m_aTopCardsGroup;
            }


            index = groupCard.length;
            img0 = <eui.Image>group.getChildByName('m_img0');
            img1 = <eui.Image>group.getChildByName('m_img1');

            var imgName:string;
            if(dir == PlayePosition.e_Left || dir == PlayePosition.e_Right)
            {
                imgName = "majiangzi_json.pai_gai_bot2_png";
            }
            else if(dir == PlayePosition.e_Up || dir == PlayePosition.e_Down)
            {
                imgName = 'majiangzi_json.pai_gai_bot1_png';
            }

           var newGroup = new eui.Group();
           newGroup.name = 'm_gop' + index;
           img0 = new eui.Image(RES.getRes(imgName));
           img0.name = 'm_img0'
           img1 = new eui.Image(RES.getRes(imgName));
           img1.name = 'm_img1';
           newGroup.addChild(img0);
           newGroup.addChild(img1);
           group.addChild(newGroup)

           if(dir == PlayePosition.e_Left)
           {
               this.m_aLeftCardsGroup[index] = newGroup;
               this.m_aLeftCardsGroup[index].y = 25 * index;
               this.m_aLeftCards[index * 2] = img0;
               this.m_aLeftCards[index * 2].y = 7;
               this.m_aLeftCards[index * 2 + 1] = img1;
           }
           else if(dir == PlayePosition.e_Right)
           {
               this.m_aRightCardsGroup[index] = newGroup;
               this.m_aRightCardsGroup[index].y = 25 * index;
               this.m_aRightCards[index * 2] = img0;
               this.m_aRightCards[index * 2].y = 7;
               this.m_aRightCards[index * 2 + 1] = img1;
           }
           else if(dir == PlayePosition.e_Down)
           {
               this.m_aButtomCardsGroup[index] = newGroup;
               this.m_aButtomCardsGroup[index].x = 34 * index;
               this.m_aButtomCards[index * 2] = img0;
               this.m_aButtomCards[index * 2].y = 10.64;
               this.m_aButtomCards[index * 2 + 1] = img1;
           }
           else if(dir == PlayePosition.e_Up)
           {
               this.m_aTopCardsGroup[index] = newGroup;
               this.m_aTopCardsGroup[index].x = 34 * index;
               this.m_aTopCards[index * 2] = img0;
               this.m_aTopCards[index * 2].y = 10.64;
               this.m_aTopCards[index * 2 + 1] = img1;
            
           }

        }

        public fGameReady(){
           /* this.m_gopTop.visible = true;
            this.m_gopButtom.visible = true;
            this.m_gopLeft.visible = true;
            this.m_gopRight.visible = true;

           
            for(var i = 1; i < 26; i++)
            {
             
                this.fAddReadCards( PlayePosition.e_Up)
                 this.fAddReadCards( PlayePosition.e_Down)
            }

            for(var i = 0; i < 17; i++)
            {
               this.fAddReadCards(PlayePosition.e_Left)
               this.fAddReadCards( PlayePosition.e_Right)
            }
             

            var readPkt =  <C2s_LaunchPaiPacket>C2s_ActionBase.fCreateAction(C2s_ActionBase.s_LaunchPai)
            var cards =   game.GameCardManager.fGetIns().m_oCards;
            var launchCards:CardBase[] = [];
          
               var kk = PlayePosition.e_Up;
               for(; kk < PlayePosition.e_Right; kk ++)
               {
                     for(var i = 0; i < 13; i++)
                     {
                        var noUseCard:number = 0;
                        for(var j in cards)
                        {
                           if(cards[j].m_pBelong == undefined)
                           {
                            ++noUseCard;
                           }
                        }
                
                       var index =  Utils.fGetRandomNum(1, noUseCard);
                    
                       cards[index].m_pBelong = kk;
                       launchCards.push(cards[index]);
                     //  this.fCreateCard(index, kk, launchCards, cards);
                     }
               }
            
            readPkt.fSetCards(launchCards);
            Main.fGetIns().m_oGameSocket.m_oActionMoudle.fLaunchPai(readPkt);


            for(var del in cards)
            {
                if(cards[del].m_pBelong)
                {
                    var cardImg = this.m_gopButtom
                }
            }*/
        }

      
        
        public fOnClick(button)
        {
            console.info('button');
        }

      
    }
}