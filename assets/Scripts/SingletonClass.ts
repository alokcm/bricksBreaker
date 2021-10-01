import { JsonAsset, Prefab, sys } from "cc";

export class SingletonClass {

    private static _instance:SingletonClass = new SingletonClass();
    private _score : number = 0;
    private _currLevel : number = 1;
    private _levelsPlayed = 1;
    private _eachlevelHighScore = [0,0,0,0,0,0];
    private _eachlevelStar = [1,0,0,0,0,0];

    constructor() {
        if(SingletonClass._instance){
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        SingletonClass._instance = this;
    }

    public static getInstance():SingletonClass
    {              
        return SingletonClass._instance;
    }

    public setScore(value:number):void
    {
        this._score = value;
        if(value > this._eachlevelHighScore[this._currLevel-1])
        {
            this._eachlevelHighScore[this._currLevel-1] = value;
            sys.localStorage.setItem('level_highScore',JSON.stringify(this._eachlevelHighScore));
        }
    }

    public getScore():number
    {
        return this._score;
    }

    public addPoints(value:number):void
    {
        this._score += value;
    }
    
    public setLevel(value:number):void
    {
        this._currLevel = value;
    }

    public getLevel():number
    {
        return this._currLevel;
    }

    public increaseLevel():void
    {
        this._currLevel++;
        if(this._currLevel>=this._levelsPlayed)
        {
            this._levelsPlayed = this._currLevel;
        }
    }

    public setLevelPlayed(value : number):void
    {
        this._levelsPlayed = value;
        sys.localStorage.setItem('level_played' , `${this._levelsPlayed}`);
    }

    public getLevelPlayed():number
    {
        let level = Number.parseInt(sys.localStorage.getItem('level_played'));
        return level;
    }

    public getLevelHighScore():number
    {
        return this._eachlevelHighScore[this._currLevel-1];
    }

    public setLevelHighScore(highScore : number):void
    {
        if(highScore > this._eachlevelHighScore[this._currLevel-1])
        {
            this._eachlevelHighScore[this._currLevel-1] = highScore;
            sys.localStorage.setItem('level_highScore',JSON.stringify(this._eachlevelHighScore));
        }
    }

    public getLevelStar(level : number):number
    {
        return this._eachlevelStar[level-1];
    }

    public setLevelStar(star : number):void
    {
        if(star > this._eachlevelStar[this._currLevel-1])
        {
            this._eachlevelStar[this._currLevel-1] = star;
            sys.localStorage.setItem('level_stars',JSON.stringify(this._eachlevelHighScore));
        }
    }

    public updateLevelHighScoreAndStar():void
    {
        let getLevelHighScoreFromCache = sys.localStorage.getItem('level_highScore');
        let getLevelStarFromCache = sys.localStorage.getItem('level_stars');
        if(getLevelHighScoreFromCache)
        {    
            let tempArr : number[] = [];
            for(let i=0;i<getLevelHighScoreFromCache.length;i++)
            {
                let p = parseInt(getLevelHighScoreFromCache[i]);
                if(p>=0)
                {
                    tempArr.push(p);
                }
            }
            this._eachlevelHighScore = tempArr;
        }

        if(getLevelStarFromCache)
        {    
            let tempArr : number[] = [];
            for(let i=0;i<getLevelStarFromCache.length;i++)
            {
                let p = parseInt(getLevelStarFromCache[i]);
                if(p>=0)
                {
                    tempArr.push(p);
                }
            }
            this._eachlevelStar = tempArr;
        }

    }
}