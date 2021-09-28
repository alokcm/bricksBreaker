
import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LevelScreen
 * DateTime = Tue Sep 28 2021 17:51:19 GMT+0530 (India Standard Time)
 * Author = alokraj0024
 * FileBasename = LevelScreen.ts
 * FileBasenameNoExtension = LevelScreen
 * URL = db://assets/Scripts/LevelScreen.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('LevelScreen')
export class LevelScreen extends Component {
    
    @property(Node)
    scrollView : Node = null;

    @property(Prefab)
    levelButton : Prefab = null;

    ch : any = null;
    addLevel()
    {
        this.ch = instantiate(this.levelButton);
        let content = this.scrollView.getChildByName('view').getChildByName('content');
        for(let i = 1;i<10;i++)
        {
            this.ch = instantiate(this.levelButton);
            content.addChild(this.ch);
        }
    }
    start () {
       this.addLevel();
    }

    
}
