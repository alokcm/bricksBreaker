
import { _decorator, Component, Node, SpriteComponent, Sprite, Vec3, UIComponent, UIModelComponent, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, RigidBody, RigidBody2D, UITransform, rect, Vec2 } from 'cc';
const { ccclass, property } = _decorator;



   /* "1" : "show",
    "2" : "hide",
    "3" : "hide",
    "4" : "hide",
    "5" : "rewardType",
    "6" : "show",
    "7" : "hide",
    "8" : "hide",
    "9" : "rewardType",
    "10" : "show",
    "11" : "show",
    "12" : "hide",
    "13" : "rewardType",
    "14" : "show",
    "15" : "show",
    "16" : "show"
    */
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
 
enum BRICKS
{
    IN_TWO_COLLISION = 1,
    IN_FOUR_COLLISION = 2,
    HAS_REWARDS = 3
}

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
    arrayOfBricksOnScreen : any[] = [];
    ballInitialPosition : any;
    rows : number = null;
    columns : number = null;
    level : number = 1;
    ch : any;
    startXPos : number = null;
    startYPos : number = null;
    bricksWidthTemp : number = null;
    bricksHeightTemp : number = null;
    scaleFactor : number = null;


    start () {
        this.posOfSlider = this.sliderSprite.getPosition();
        this.screenWidth = this.node.width;
        this.tileDetails = this.asset[this.level-1].json["tileDetails"];
        console.log(this.tileDetails);
        console.log('row in the script  ' + this.asset[0].json["rows"] + ' columns : ' + this.asset[0].json["columns"]);
        this.fetchScript(this.level);

        let wallLeft = this.node.getChildByName('wallLeft');
        let wallRight = this.node.getChildByName('wallRight');
        let wallTop = this.node.getChildByName('wallTop');
        wallLeft.setScale(1,this.node.getComponent(UITransform).height/1920);
        wallRight.setScale(1,this.node.getComponent(UITransform).height/1920);
        wallTop.setScale(this.screenWidth/1080,1);

        let collider = this.ball.getComponent(Collider2D)
        if(collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
        }
        this.ballInitialPosition = this.ball.getPosition();
       
        console.log('start ended');
        this.addBricks();
    }
    fetchScript(lev : number)
    {
        this.tileDetails = this.asset[lev-1].json["tileDetails"];
        this.rows = this.asset[lev-1].json["rows"];
        this.columns = this.asset[lev-1].json["columns"];

        this.startXPos = -((this.screenWidth)/2);
        this.startYPos = (((this.node.getComponent(UITransform).height)/2));
        this.bricksWidthTemp = this.screenWidth/this.columns;
        this.bricksHeightTemp = (this.bricksPrefab.data.height * this.bricksWidthTemp)/this.bricksPrefab.data.width;
        this.startXPos  += this.bricksWidthTemp/2;
        this.startYPos -= this.bricksHeightTemp/2;
        this.scaleFactor = this.bricksWidthTemp/this.bricksPrefab.data.width;
        this.bricksPrefab.data.setScale(this.scaleFactor,this.scaleFactor);
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
    {
        if(otherCollider.name == 'brick<BoxCollider2D>')
        {
            this.updateBricks(otherCollider);
        }
        if(this.arrayOfBricksOnScreen.length == 0)
        {
            setTimeout(() => {
                this.level++;
                this.fetchScript(this.level);
                this.addBricks();
                this.ball.setPosition(this.ballInitialPosition);
                this.ball.getComponent(RigidBody2D).linearVelocity = new Vec2(0,0);
                if(this.level == 3)
                {
                    this.level = 1;
                }
            },200);
        }
    }

    updateBricks(collider)
    {
        collider.node.brickTime--;
        if(collider.node.brickTime == 1)
        {
            collider.getComponent(Sprite).spriteFrame = this.BrokenBricks[collider.node.colorNumber];
        }
        if(collider.node.brickTime == 0)
        {
            collider.getComponent(Sprite).destroy();
            this.arrayOfBricksOnScreen.pop();
            collider.destroy();
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
        for(let i=0;i<this.tileDetails.length;i++)
        {
            let type = this.tileDetails[i]["type"];
            console.log(type);
            let posX = this.startXPos + (Math.floor((this.tileDetails[i]["index"]%this.columns)) * this.bricksWidthTemp);
            let posY = this.startYPos - (Math.floor((this.tileDetails[i]["index"]/this.columns)) * this.bricksHeightTemp);
            console.log(posX,posY);
            this.ch = instantiate(this.bricksPrefab);
            this.node.addChild(this.ch);
            this.ch.setPosition(new Vec3(posX,posY,1));
            this.ch.getComponent(Sprite).spriteFrame = this.NormalBricks[this.tileDetails[i]["color"]-1];
            this.ch.colorNumber = this.tileDetails[i]["color"]-1;
            this.arrayOfBricksOnScreen.push(this.ch);
            switch(type)
            {
                case BRICKS.IN_TWO_COLLISION :
                    this.ch.brickTime = 2;
                    this.ch.reward = false;
                    break;
                case BRICKS.IN_FOUR_COLLISION : 
                    this.ch.brickTime = 4;
                    this.ch.reward = false;
                    break;
                case BRICKS.HAS_REWARDS :
                    this.ch.brickTime = 2;
                    this.ch.reward = true;
                    break;
                default :
                    console.log('No details for this bricks.');
            }
        }
    }
}