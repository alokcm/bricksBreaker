
import { _decorator, Component, Node, director, absMaxComponent } from 'cc';
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

    @property(Node)
    playButton : Node = null;

    start () {
        director.preloadScene('levelScreenNew');
    }

    onLoad()
    {
        this.playButton.on(Node.EventType.TOUCH_START,this.changeScreen,this);
    }

    changeScreen()
    {
        console.log('clicked');
        director.loadScene('levelScreenNew');
    }
}