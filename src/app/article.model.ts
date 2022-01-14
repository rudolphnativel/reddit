export class Article {
  private _id:number;
  static ID:number =0;
  constructor( private _title: string, private _link: string, private _votes?: number) {
this._id = 0;
   }

   public get id() : number {
     return this._id
   }
   public set id(v : number) {
    this._id = v;
  }


  public get votes() {
    if (this._votes === undefined) {
        this._votes = 0;
        return this._votes;
    } else {
      return this._votes;
    }
  }

  public set votes(v: number) {
    this._votes = v;
  }


  public get title() {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }


  public get link() {
    return this._link;
  }
  public set link(v: string) {
    this._link = v;
  }

  voteUp(): void {
    if (this._votes !== undefined) {
      this._votes += 1;
    } else {
      this._votes = 1;
    }
  }
  voteDown() {
    if (this._votes !== undefined) {
      this._votes -= 1;
    } else {
      this._votes = 0;
    }

  }

}
