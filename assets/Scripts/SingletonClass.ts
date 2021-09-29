import { sys } from "cc";

export class SingletonClass {

    private static _instance:SingletonClass = new SingletonClass();

    private _score:number = 0;
    private _level:number = 1;
    private _levelsPlayed = 1;

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

    public removePoints(value:number):void
    {
        this._score -= value;
    }
    
    public setLevel(value:number):void
    {
        this._level = value;
    }

    public getLevel():number
    {
        return this._level;
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

}