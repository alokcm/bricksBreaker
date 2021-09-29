import { _decorator, Component, Node, Prefab, instantiate, ButtonComponent, Button, Label, director } from 'cc';
import { SingletonClass } from './SingletonClass';
const { ccclass, property } = _decorator;


    var LevelManager:SingletonClass = SingletonClass.getInstance();
        console.log('Level : ', LevelManager.getLevel());

/**
 * Predefined variables
 * Name = LevelScreen
 * DateTime = Tue Sep 28 2021 17:51:19 GMT+0530 (India Standard Time)
 * Author = alokraj0024
 * FileBasename = LevelScreen.ts
 * FileBasenameNoExtension = LevelScreen
 * URL = db://assets/Scripts/LevelScreen.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 */
 
@ccclass('LevelScreen')
export class LevelScreen extends Component {
    
    @property(Node)
    scrollView : Node = null;

    @property(Prefab)
    levelButton : Prefab = null;

    @property(Node)
    playButton : Node = null;

    levelNumber : number = null;
    ch : any = null;

    addLevel()
    {
        this.ch = instantiate(this.levelButton);
        let content = this.scrollView.getChildByName('view').getChildByName('content');
        for(let i = 1;i<=3;i++)
        {
            this.ch = instantiate(this.levelButton);
            console.log(this.ch);
            console.log('printing component');
            this.ch.getChildByName('Label').getComponent(Label).string = `${i}`;
            this.ch.on(Node.EventType.TOUCH_START,this.levelSelected,this);
            this.ch.buttonNumber = i;
            content.addChild(this.ch);
        }
    }
    start () {
       this.addLevel();
    }

    onLoad()
    {
        this.playButton.on(Node.EventType.TOUCH_START,this.loadGame,this);
    }

    loadGame()
    {
        console.log('play button clicked');
        director.loadScene('playScreen');
    }

    levelSelected(event)
    {
        console.log(event);
        console.log(event.currentTarget.buttonNumber);
        this.levelNumber = event.currentTarget.buttonNumber;
        console.log('level clicked');
        LevelManager.setLevel(event.currentTarget.buttonNumber);
        console.log(LevelManager.getLevel());
    }
}
