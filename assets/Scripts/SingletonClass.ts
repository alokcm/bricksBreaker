import { Prefab, sys } from "cc";

export class SingletonClass {

    private static _instance:SingletonClass = new SingletonClass();
    private _score : number = 0;
    private _currLevel : number = 1;
    private _levelsPlayed = 1;
    private _eachlevelHighScore = [0,0,0,0,0,0];
    private _eachlevelStar = [1,1,1,1,1,1];

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

    public setLevelHighScore(level : number,highScore : number):void
    {
        this._eachlevelHighScore[level-1] = highScore;
    }

    public getLevelHighScore(level : number):number
    {
        return this._eachlevelHighScore[level-1];
    }

}