
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SplashScreen
 * DateTime = Wed Sep 22 2021 13:42:44 GMT+0530 (India Standard Time)
 * Author = alokraj0024
 * FileBasename = SplashScreen.ts
 * FileBasenameNoExtension = SplashScreen
 * URL = db://assets/Scripts/SplashScreen.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('SplashScreen')
export class SplashScreen extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Node)
    playButton : Node = null;

    start () {
        director.preloadScene('playScreen');
    }
    onLoad()
    {
        this.playButton.on(Node.EventType.MOUSE_DOWN,this.changeScreen,this);
        
    }

    changeScreen(event)
    {
        director.loadScene('playScreen');
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
