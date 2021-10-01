
import { _decorator, Component, Node, Prefab, instantiate, Label, director, sys, Sprite, UIOpacity, SpriteFrame } from 'cc';
import { SingletonClass } from './SingletonClass';
const { ccclass, property } = _decorator;

var LevelManager:SingletonClass = SingletonClass.getInstance();

@ccclass('LevelScreenNewScript')
export class LevelScreenNewScript extends Component {

    @property(Prefab)
    levelPrefab : Prefab = null;

    @property(Node)
    content : Node = null;

    @property(SpriteFrame)
    yellowStar : SpriteFrame = null;

    tempNode : any = null;
    levelPlayed : any = null;

    start () {
        this.levelPlayed = LevelManager.getLevelPlayed();
        this.addLevel();
        console.log('start called');
    }
    addLevel()
    {
        for(let i =1;i<=8;i++)
        {
            this.tempNode = instantiate(this.levelPrefab);
            this.tempNode.getChildByName('Label').getComponent(Label).string = `${i}`;
            this.tempNode.star1 = this.tempNode.getChildByName('star1').getComponent(Sprite);
            this.tempNode.buttonNumber = i;
            
            this.tempNode.on(Node.EventType.TOUCH_START,this.loadGame,this);
            console.log(this.levelPlayed);
            if(i<=this.levelPlayed)
            {
                this.tempNode.getChildByName('status').getComponent(Sprite).spriteFrame = null;
                this.tempNode.unlocked = true;
            }
            else
            {
                this.tempNode.unlocked = false;
                console.log(this.tempNode.addComponent(UIOpacity).opacity = 190);
            }
            switch(LevelManager.getLevelStar(i))
            {
                case 3 : this.tempNode.getChildByName('star3').getComponent(Sprite).spriteFrame = this.yellowStar;
                case 2 : this.tempNode.getChildByName('star2').getComponent(Sprite).spriteFrame = this.yellowStar;
                case 1 : this.tempNode.getChildByName('star1').getComponent(Sprite).spriteFrame = this.yellowStar;
                default : console.log(' no data for these ');
            }
            
            this.content.addChild(this.tempNode);
            console.log(this.tempNode);
        }
    }
    loadGame(event)
    {
        console.log(event);
        if(event.currentTarget.unlocked)
        {
            LevelManager.setLevel(event.currentTarget.buttonNumber);
            director.loadScene('playScreen');
        }
        else
        {
            console.log('Level '+ event.currentTarget.buttonNumber + ' is still locked');
        }
    }
}