
import { _decorator, Component, Node, SpriteComponent, Sprite, Vec3, UIComponent, UIModelComponent, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, RigidBody, RigidBody2D, UITransform, rect, Vec2, Slider, Intersection2D, Label, director } from 'cc';
import { SingletonClass } from './SingletonClass';
const { ccclass, property } = _decorator;


var LevelManager:SingletonClass = SingletonClass.getInstance();

/**
 * Predefined variables
 * Name = PlayScript
 * DateTime = Wed Sep 22 2021 13:48:26 GMT+0530 (India Standard Time)
 * Author = alokraj0024
 * FileBasename = PlayScript.ts
 * FileBasenameNoExtension = PlayScript
 * URL = db://assets/Scripts/PlayScript.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 * 
 * Math.floor(Math.random() * (max - min + 1)) + min;
 * this.bg!.getComponent(UITransform)?.convertToNodeSpaceAR(pos);
 * let level=sys.localStorage.getItem('current_level');
 * sys.localStorage.setItem('current_level' , `${this.current_level}`);
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

    @property(JsonAsset)
    asset : JsonAsset[] = [];

    @property(SpriteFrame)
    Rewards : SpriteFrame[] = [];

    @property(Prefab)
    bricksPrefab : Prefab = null;

    @property(Prefab)
    rewardsPrefab : Prefab = null;

    @property(Prefab)
    ballPrefab : Prefab = null;

    @property(Prefab)
    ballForChances : Prefab = null;

    posOfSlider : Vec3 = null;
    screenWidth : any;
    tileDetails: string[] = [];
    arrayOfBricksOnScreen : any[] = [];
    ballInitialPosition : any;
    rows : number = null;
    columns : number = null;
    level : number = LevelManager.getLevel();
    ch : any;
    startXPos : number = null;
    startYPos : number = null;
    bricksWidthTemp : number = null;
    bricksHeightTemp : number = null;
    scaleFactor : number = null;
    arrayOfRewards : any[] = [];
    maxNumberOfBall : number = null;
    ballNode : Node = null;
    collider : any = null;
    addLevel : Boolean = false;
    scoreLabel : any = null;
    score : number = 0;
    arrayOfChances : any[] = [];



    onLoad()
    {
        this.sliderSprite.on(Node.EventType.TOUCH_MOVE,this.moveSliderOnTouch,this);
    }

    start () {
        this.posOfSlider = this.sliderSprite.getPosition();
        this.screenWidth = this.node.width;
        this.tileDetails = this.asset[this.level-1].json["tileDetails"];
        
        let wallLeft = this.node.getChildByName('wallLeft');
        let wallRight = this.node.getChildByName('wallRight');
        let wallTop = this.node.getChildByName('wallTop');
        wallLeft.setScale(1,this.node.getComponent(UITransform).height/1920);
        wallRight.setScale(1,this.node.getComponent(UITransform).height/1920);
        wallTop.setScale(this.screenWidth/1080,1);

        this.fetchScript(this.level);
        this.addBricks();

        this.scoreLabel = this.node.getChildByName('score');
        this.ballInitialPosition = this.ball.getPosition();
    }

    onBeginContactTry(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        console.log(otherCollider);
    }

    fetchScript(lev : number)
    {
        this.tileDetails = this.asset[lev-1].json["tileDetails"];
        this.rows = this.asset[lev-1].json["rows"];
        this.columns = this.asset[lev-1].json["columns"];
        this.maxNumberOfBall = this.asset[lev-1].json["maxBall"];

        this.startXPos = -((this.screenWidth)/2);
        this.startYPos = (((this.node.getComponent(UITransform).height)/2));
        this.bricksWidthTemp = this.screenWidth/this.columns;
        this.bricksHeightTemp = (this.bricksPrefab.data.height * this.bricksWidthTemp)/this.bricksPrefab.data.width;
        this.startXPos  += this.bricksWidthTemp/2;
        this.startYPos -= this.bricksHeightTemp/2;
        this.scaleFactor = this.bricksWidthTemp/this.bricksPrefab.data.width;
        this.bricksPrefab.data.setScale(this.scaleFactor,this.scaleFactor);
        console.log(this.ballInitialPosition);
        let balltemp = instantiate(this.ballPrefab);
        this.node.addChild(balltemp);
        this.ballNode = balltemp;
        console.log(this.ballNode);
        this.collider = this.ballNode.getComponent(Collider2D);
        this.addChances();
        if(this.collider)
        {
            this.collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
            //this.collider.on(Contact2DType.END_CONTACT,this.onEndContact,this);
        }
    }

    addChances()
    {
        console.log('addchances called');
        let x = -((this.screenWidth)/2);
        let y = -(((this.node.getComponent(UITransform).height)/2));
        x+=38;
        y+=38;
        for(let i =1;i<this.maxNumberOfBall;i++)
        {
            console.log('loop called');
            let b = instantiate(this.ballForChances);
            this.node.addChild(b);
            b.setPosition(new Vec3(x,y,1));
            this.arrayOfChances.push(b);
            x+=76;
        }
    }
    
    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        if(this.arrayOfBricksOnScreen.length == 0)
        {
            //this.ballNode.getComponent(Sprite).destroy();
            this.ballNode.removeFromParent();
        }
    }
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
    {
        console.log(this.ball.getPosition());
        if(otherCollider.name == 'brick<BoxCollider2D>')
        {
            this.updateBricks(otherCollider);
        }

        if(this.arrayOfBricksOnScreen.length == 0)
        {
            this.addLevel = true;
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

            if(collider.node.reward == true)
            {
                let randomRewards = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
                let currBricksPos = collider.node.getPosition();
                console.log(currBricksPos);
                let rew = instantiate(this.rewardsPrefab);
                this.node.addChild(rew);
                rew.setPosition(new Vec3(currBricksPos));
                rew.getComponent(Sprite).spriteFrame = this.Rewards[randomRewards];
                this.arrayOfRewards.push(rew);
            }
            this.arrayOfBricksOnScreen.pop();
            collider.destroy();
            this.score += 2;
            this.scoreLabel.getComponent(Label).string = `score : ${this.score}`;
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

    

    update()
    {
        this.arrayOfRewards.forEach(element => {
            element.setPosition(element.getPosition().x,element.getPosition().y-10,1);

            if(Intersection2D.rectRect(
                element.getComponent(UITransform)?.getBoundingBoxToWorld(),
                this.sliderSprite.getComponent(UITransform)?.getBoundingBoxToWorld()!
                ))
                {
                    console.log('collided rewards and slider');
                    let removeReward = this.arrayOfRewards.shift();
                    removeReward.getComponent(Sprite).destroy();
                    removeReward.destroy();
                    console.log(this.arrayOfRewards);
                    this.score += 10;
                    this.scoreLabel.getComponent(Label).string = `score : ${this.score}`;
                }
        });

        if(this.ballNode.getPosition().y < (-(this.node.getComponent(UITransform).height)))
        {
            console.log('ball is out of the screen');
            this.maxNumberOfBall--;
            if(this.maxNumberOfBall>=1)
            {

                this.ballNode.setPosition(this.ballInitialPosition);
                this.ballNode.getComponent(RigidBody2D).linearVelocity = new Vec2(0,0);
                // let newBall = instantiate(this.ballPrefab);
                // this.node.addChild(newBall);
                // this.ball = newBall;
                let tempball = this.arrayOfChances.pop();
                tempball.removeFromParent();
            }
            else
            {
                this.ballNode.removeFromParent();
            }
        }

        if(this.arrayOfBricksOnScreen.length == 0 && this.addLevel == true)
        {
            this.addLevel = false;
            this.ballNode.removeFromParent();

            this.level++;
            if(this.level == 3)
            {
                this.level = 1;
            }
            LevelManager.setLevel(this.level);
            LevelManager.setLevelPlayed(this.level);
            /*this.fetchScript(this.level);
            this.addBricks();*/
            for(let i = 1;i<this.arrayOfChances.length;i++)
            {
                let temp = this.arrayOfChances[i];
                temp.removeFromParent();
            }
            this.arrayOfChances = [];
            director.loadScene('levelScreenNew');
        }
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