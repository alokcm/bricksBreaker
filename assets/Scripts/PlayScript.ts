
import { _decorator, Component, Node, SpriteComponent, Sprite, Vec3, UIComponent, UIModelComponent, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, RigidBody, RigidBody2D } from 'cc';
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

    @property(Node)
    ball : Node = null;

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
    destroyBrick : number = 0;
    arrayOfBricksOnScreen : any[] = [];
    ballInitialPosition : any;

    start () {
        this.posOfSlider = this.sliderSprite.getPosition();
        this.screenWidth = this.node.width;
        this.addBricks();
        this.titleList = this.asset.json["tileDetails"];
        console.log('row ' + this.titleList["row"])
        console.log('json');
        //console.log(this.asset.json["Level"][0]);
        //console.log(this.asset.json["Level"][2]);

        let collider = this.ball.getComponent(Collider2D)
        if(collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
        }
        this.ballInitialPosition = this.ball.getPosition();
        this.addBricks();
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log(selfCollider);
        console.log(otherCollider);
        console.log(otherCollider.name);
        if(otherCollider.name == 'brick<BoxCollider2D>')
        {
            this.updateBricks(otherCollider);
            this.destroyBrick++;
            if(this.destroyBrick == 2)
            {
                this.arrayOfBricksOnScreen.pop();
                this.destroyBrick = 0;
            }
        }
        if(this.arrayOfBricksOnScreen.length == 0)
        {
            this.arrayOfBricksOnScreen = [];
            setTimeout(() => {
                this.addBricks();
                this.ball.setPosition(this.ballInitialPosition);
                this.ball.getComponent(RigidBody2D).gravityScale = 0.4;
            },500);
        }
    }

    updateBricks(collider)
    {
        let str = collider.getComponent(Sprite).spriteFrame.name;
        console.log(str);
        for(let i=0;i<this.NormalBricks.length;i++)
        {
            //console.log()
            if(str == this.NormalBricks[i].name)
            {
                collider.getComponent(Sprite).spriteFrame = this.BrokenBricks[i];
                break;
            }
            if(str == this.BrokenBricks[i].name)
            {
                collider.getComponent(Sprite).spriteFrame = this.BrokenBricks[i];
                collider.getComponent(Sprite).destroy();
                collider.destroy();
                break;
            }
        }
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

    addBricks()
    {
        let row = 4;
        let column = 4;
        let startPosOfBricks = Math.floor(column/2) * -128;
        for(let i=1;i<=row;i++)
        {
            let xy = startPosOfBricks;
            for(let j=1;j<=column;j++)
            {
                let x = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
                let ch = instantiate(this.bricksPrefab);
                ch.getComponent(Sprite).spriteFrame = this.NormalBricks[x];
                this.node.addChild(ch);
                ch.setPosition(new Vec3(xy,i*43,1));
                this.arrayOfBricksOnScreen.push(ch);
                xy+=128;
            }
        }
    }
    update()
    {   
        //console.log(this.ball.getPosition())
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

