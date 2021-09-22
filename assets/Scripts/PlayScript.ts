
import { _decorator, Component, Node, SpriteComponent, Sprite, Vec3, UIComponent, UIModelComponent, SpriteFrame, Prefab, instantiate, JsonAsset } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlayScript
 * DateTime = Wed Sep 22 2021 13:48:26 GMT+0530 (India Standard Time)
 * Author = alokraj0024
 * FileBasename = PlayScript.ts
 * FileBasenameNoExtension = PlayScript
 * URL = db://assets/Scripts/PlayScript.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 * Math.floor(Math.random() * (max - min + 1)) + min;
 */
 
@ccclass('PlayScript')
export class PlayScript extends Component {

    @property(Node)
    sliderSprite : Node = null;

    @property(SpriteFrame)
    NormalBricks : SpriteFrame[] = [];

    @property(SpriteFrame)
    BrokenBricks : SpriteFrame[] = [];

    @property(Prefab)
    bricksPrefab : Prefab = null;

    @property(JsonAsset)
    asset : JsonAsset = null;


    posOfSlider : Vec3 = null;
    screenWidth : any;
    titleList: string[] = [];
    titleIndex: number = 1;

    start () {
        this.posOfSlider = this.sliderSprite.getPosition();
        this.screenWidth = this.node.width;
        this.addBricks();
        this.titleList = this.asset.json["Symptoms data"][0];
        console.log(this.titleList);
    }

    moveSliderOnTouch(touch,event)
    {
        let current = touch.getUILocation();
        if(current.x+128>this.screenWidth)
        {
            current.x = this.screenWidth-128;
        }
        else if(current.x-128<0)
        {
            current.x = 128;
        }
        this.sliderSprite.setPosition(new Vec3(current.x-this.screenWidth/2,this.posOfSlider.y,1));
    }
    onLoad()
    {
        this.sliderSprite.on(Node.EventType.TOUCH_MOVE,this.moveSliderOnTouch,this);
    }

    onClick()
    {
        let str = this.titleList[this.titleIndex];
        console.log(str);
        this.titleIndex++;
        if(this.titleIndex>13)
            this.titleIndex = 1;
    }

    row : number = 6;
    column : number = 3;
    noBrciks : number[] = [7,8,9,13,14,15];

    addBricks()
    {
        let k =1,loc=0;
        for(let i=1;i<=this.row;i++)
        {
            for(let j =1;j<=this.column;j++)
            {
                if(k++ == this.noBrciks[loc])
                {
                    loc++;
                }
                else
                {

                }


            }


            let x = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            let ch = instantiate(this.bricksPrefab);
            console.log(ch);
            ch.getComponent(Sprite).spriteFrame = this.NormalBricks[x];
            this.node.addChild(ch);
            ch.setPosition(new Vec3(0,i*43,1));
        }
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

