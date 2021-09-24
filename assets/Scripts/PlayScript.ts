
import { _decorator, Component, Node, SpriteComponent, Sprite, Vec3, UIComponent, UIModelComponent, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, RigidBody, RigidBody2D, UITransform, rect, Vec2 } from 'cc';
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
    asset : JsonAsset[] = [];

    @property(SpriteFrame)
    Rewards : SpriteFrame[] = [];


    posOfSlider : Vec3 = null;
    screenWidth : any;
    tileDetails: string[] = [];
    titleIndex: number = 1;
    destroyBrick : number = 0;
    arrayOfBricksOnScreen : any[] = [];
    ballInitialPosition : any;
    rows : number = null;
    columns : number = null;
    level : number = 1;

    start () {
        this.posOfSlider = this.sliderSprite.getPosition();
        this.screenWidth = this.node.width;
        this.tileDetails = this.asset[0].json["tileDetails"];
        console.log('row in the script  ' + this.asset[0].json["rows"]);

        let collider = this.ball.getComponent(Collider2D)
        if(collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
        }

        this.ballInitialPosition = this.ball.getPosition();
        this.fetchScript(1);
        this.addBricks();
        console.log('printing the tile details  : ');
        // for(let i = 1,k=1;i<=this.asset[0].json['rows'];i++)
        // {
        //     for(let j =1;j<=this.asset[0].json['columns'];j++)
        //     {
        //         console.log(k + " : " + this.tileDetails[`${k++}`]);
        //     }
        // }
        console.log('start ended')
        console.log(this.bricksPrefab.data.width);
    }
    fetchScript(lev : number)
    {
        this.tileDetails = this.asset[lev-1].json["tileDetails"];
        this.rows = this.asset[lev-1].json["rows"];
        this.columns = this.asset[lev-1].json["columns"];
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
    {
        console.log(otherCollider)
        //console.log(otherCollider.name);
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
                this.level++;
                this.fetchScript(this.level);
                this.addBricks();
                this.ball.setPosition(this.ballInitialPosition);
                this.ball.getComponent(RigidBody2D).linearVelocity = new Vec2(0,0);
                if(this.level == 3)
                {
                    this.level = 0;
                }
            },500);
        }
    }

    updateBricks(collider)
    {
        let str = collider.getComponent(Sprite).spriteFrame.name;
        for(let i=0;i<this.NormalBricks.length;i++)
        {
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


    addBricks()
    {
        let startX = -((this.screenWidth)/2);
        let startY = (((this.node.getComponent(UITransform).height)/2));
        let bricksWidth = this.screenWidth/this.columns;
        let bricksHeight = (this.bricksPrefab.data.height * bricksWidth)/this.bricksPrefab.data.width;
        startX += bricksWidth/2;
        startY -= bricksHeight/2;
        let scaleX = bricksWidth/this.bricksPrefab.data.width;
        let scaleY = bricksHeight/this.bricksPrefab.data.height;

        let noBricks = this.tileDetails["noBricks"][0];
        console.log('test no Bricks');
        console.log(noBricks);
        for(let i=1,k=1;i<=this.rows;i++)
        {
            let initX = startX;
            console.log('loop ran');
            for(let j=1;j<=this.columns;j++)
            {
                if(this.tileDetails[`${k}`] != "hide")
                {
                let x = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
                let ch = instantiate(this.bricksPrefab);
                this.node.addChild(ch);
                ch.getComponent(Sprite).spriteFrame = this.NormalBricks[x];
                ch.setScale(scaleX,scaleY);
                ch.setPosition(new Vec3(initX,startY,1));
                this.arrayOfBricksOnScreen.push(ch);
                }
                k++;
                initX+=bricksWidth;
            }
            startY-=bricksHeight;
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

