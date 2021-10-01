
import { _decorator, Component, Node, SpriteComponent, Sprite, Vec3,AudioSourceComponent, UIComponent, UIModelComponent, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, RigidBody, RigidBody2D, UITransform, rect, Vec2, Slider, Intersection2D, Label, director, Button, AudioSource, AudioClip } from 'cc';
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

    @property(Node)
    gameOverPopUp : Node = null;

    @property(Node)
    levelEndPopUp : Node = null;

    @property(Button)
    gameOverHome : Button = null;

    @property(Button)
    gameOverRestart : Button = null;

    @property(Button)
    levelEndHome : Button = null;

    @property(Button)
    levelEndRestart : Button = null;

    @property(Button)
    levelEndNext : Button = null;

    @property(Label)
    gameOverScore : Label = null;

    @property(Label)
    gameOverHighScore : Label = null;

    @property(Label)
    LevelEndScore : Label = null;

    @property(Label)
    LevelEndHighScore : Label = null;

    @property(SpriteFrame)
    yellowStar : SpriteFrame = null;

    @property(AudioClip)
    audioGame : AudioClip = null;

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
    timer : number = 0;
    intervalID : any = null;

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

        this.gameOverPopUp.active = false;
        this.levelEndPopUp.active = false;
        
        this.gameOverHome.node.on(Node.EventType.TOUCH_END,this.moveToHome,this);
        this.levelEndHome.node.on(Node.EventType.TOUCH_END,this.moveToHome,this);
        this.gameOverRestart.node.on(Node.EventType.TOUCH_END,this.restartTheSameLevel,this);
        this.levelEndRestart.node.on(Node.EventType.TOUCH_END,this.restartTheSameLevel,this);
        this.levelEndNext.node.on(Node.EventType.TOUCH_END,this.loadNextLevel,this);
        console.log('start called in playScript');
        LevelManager.setScore(0);
        this.score = 0;
    }

    resetChances()
    {
        for(let i =0;i<this.arrayOfChances.length;i++)
        {
            let p = this.arrayOfChances.pop();
            p.getComponent(Sprite).destroy();
            p.removeFromParent();
        }
        this.arrayOfChances = [];
        this.score = 0;
        LevelManager.setScore(this.score);
        this.scoreLabel.getComponent(Label).string = `score : ${this.score}`;
    }

    moveToHome(event)
    {
        director.loadScene('levelScreenNew');
    }

    restartTheSameLevel(event)
    {
        this.resetChances();
        console.log('before ' + this.arrayOfBricksOnScreen.length);
        for(let i = 0;i<this.arrayOfBricksOnScreen.length;i++)
        {
            let t = this.arrayOfBricksOnScreen[i];
            //let p = t.node.getParent();
        }

        this.arrayOfBricksOnScreen = [];
        this.fetchScript(LevelManager.getLevel());
        this.addBricks();
        setTimeout(() => {
            this.gameOverPopUp.active = false;
            this.levelEndPopUp.active = false;
        },100);
    }

    loadNextLevel()
    {
        LevelManager.increaseLevel();
        this.resetChances();
        this.fetchScript(LevelManager.getLevel());
        this.addBricks();
        setTimeout(() => {
            this.gameOverPopUp.active = false;
            this.levelEndPopUp.active = false;
        },100);
    }

    onBeginContactTry(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        console.log(otherCollider);
    }

    showGameOverPopUp()
    {
        this.gameOverScore.getComponent(Label).string = `${LevelManager.getScore()}`;
        this.gameOverHighScore.getComponent(Label).string = `${LevelManager.getLevelHighScore()}`;
        this.gameOverPopUp.active = true;
    }

    showlevelEndPopUp()
    {
        
        setTimeout(() => {
            LevelManager.setScore(this.score);
            this.LevelEndScore.getComponent(Label).string = `${LevelManager.getScore()}`;
            this.LevelEndHighScore.getComponent(Label).string = `${LevelManager.getLevelHighScore()}`;
            this.levelEndPopUp.active = true;
        },510);
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
        //this.scoreLabel.getComponent(Label).string = `score : ${LevelManager.getScore()}`;
    }

    addChances()
    {
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
        console.log('addchances called');
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
        //console.log(this.ball.getPosition());
        if(otherCollider.name == 'brick<BoxCollider2D>')
        {
            // otherCollider.node.parent.removeChild(otherCollider.node);
            console.log('from function');
            this.updateBricks(otherCollider);
            // this.arrayOfBricksOnScreen.pop();
        }

        if(this.arrayOfBricksOnScreen.length == 0)
        {
            this.addLevel = true;
        }
    }


    updateScore(newScore : number):void
    {
        let scoreUpdateTime = 500/newScore;
        let timerId = setInterval(() => {
            this.score++;
            this.scoreLabel.getComponent(Label).string = `score : ${this.score}`;
        },scoreUpdateTime);

        setTimeout(() => {
            clearInterval(timerId);
        },500);
    }

    updateBricks(collider)
    {
        //console.log(collider);
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
            //collider.node.destroy();
            //this.score += 2;
            //this.scoreLabel.getComponent(Label).string = `score : ${this.score}`;
            this.updateScore(2);
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
                    //this.score += 10;
                    //this.scoreLabel.getComponent(Label).string = `score : ${this.score}`;
                    this.updateScore(10);
                }
        });

        if(this.ballNode.getPosition().y < (-(this.node.getComponent(UITransform).height)))
        {
            console.log('ball is out of the screen');
            this.maxNumberOfBall--;
            console.log('chances left : ' + this.maxNumberOfBall);
            if(this.maxNumberOfBall>=1)
            {
                this.ballNode.setPosition(this.ballInitialPosition);
                this.ballNode.getComponent(RigidBody2D).linearVelocity = new Vec2(0,0);
                this.ballNode.getComponent(RigidBody2D).angularVelocity = 0;
                let tempball = this.arrayOfChances.pop();
                tempball.removeFromParent();
                console.log('one ball removed');
                //this.score--;
                //LevelManager.setScore(this.score);
            }

            else
            {
                this.ballNode.removeFromParent();

                LevelManager.setScore(this.score);
                
                this.showGameOverPopUp();
                console.log(this.gameOverPopUp.getSiblingIndex());
                for(let i =0;i<this.arrayOfChances.length;i++)
                {
                    let p = this.arrayOfChances.pop();
                    p.removeFromParent();
                }
                this.arrayOfChances = [];
                console.log('game is over now ');
                clearInterval(this.intervalID);
                
                this.timer = 0;
                
            }
        }

        if(this.arrayOfBricksOnScreen.length == 0 && this.addLevel == true)
        {
            this.addLevel = false;
            this.ballNode.removeFromParent();

            this.level++;
            if(this.level == 7)
            {
                this.level = 1;
            }

            LevelManager.setLevelPlayed(this.level);
            LevelManager.setScore(this.score);
            clearInterval(this.intervalID);
            this.timer = 0;
            this.showlevelEndPopUp();
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
        console.log('last prefab : ' + this.ch.getSiblingIndex());
        this.gameOverPopUp.setSiblingIndex(this.ch.getSiblingIndex()+5);
        this.intervalID = setInterval( () =>{
            this.timer++;
            console.log(this.timer);
        },1000);

    }
}