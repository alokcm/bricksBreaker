
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
        //director.preloadScene('playScreen');
    }

    onLoad()
    {
        this.playButton.on(Node.EventType.TOUCH_START,this.moveScreen,this);
        console.log('on load called');
    }


    moveScreen()
    {
        console.log('clicked diff');
        director.loadScene('playScreen');
    }
    changeScreen()
    {
        console.log('clicked');
        director.loadScene('playScreen');
    }
}