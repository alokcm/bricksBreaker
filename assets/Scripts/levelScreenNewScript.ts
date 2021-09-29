
import { _decorator, Component, Node, Prefab, instantiate, Label, director, sys, Sprite, UIOpacity } from 'cc';
import { SingletonClass } from './SingletonClass';
const { ccclass, property } = _decorator;


var LevelManager:SingletonClass = SingletonClass.getInstance();
console.log('Level : ', LevelManager.getLevel());
LevelManager.setLevelPlayed(1);


@ccclass('LevelScreenNewScript')
export class LevelScreenNewScript extends Component {

    @property(Prefab)
    levelPrefab : Prefab = null;

    @property(Node)
    content : Node = null;

    tempNode : any = null;
    levelPlayed : any = null;

    start () {
        
        this.levelPlayed = LevelManager.getLevelPlayed();
        console.log('start loaded');
        console.log(this.levelPlayed);
        console.log(typeof(this.levelPlayed));
        this.addLevel();
    }
    addLevel()
    {
        for(let i =1;i<=8;i++)
        {
            this.tempNode = instantiate(this.levelPrefab);
            this.tempNode.getChildByName('Label').getComponent(Label).string = `${i}`;
            this.tempNode.buttonNumber = i;
            this.tempNode.on(Node.EventType.TOUCH_START,this.loadGame,this);
            console.log(this.levelPlayed);
            if(i<=this.levelPlayed)
            {
                //console.log('in if');
                this.tempNode.getChildByName('status').getComponent(Sprite).spriteFrame = null;

                this.tempNode.unlocked = true;
                console.log('in if')
            }
            else
            {
                this.tempNode.unlocked = false;
                console.log('in else');
                console.log(this.tempNode.addComponent(UIOpacity).opacity = 190);
            }
            this.content.addChild(this.tempNode);
            console.log('added');
            console.log(this.tempNode);
        }
    }
    loadGame(event)
    {
        LevelManager.setLevel(event.currentTarget.buttonNumber);
        if(event.currentTarget.unlocked)
        {
            director.loadScene('playScreen');
        }
        else
        {
            console.log('level not unlocked');
        }
        
    }
}