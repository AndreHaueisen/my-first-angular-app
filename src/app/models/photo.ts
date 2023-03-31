export class Photo {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly url: string,
    readonly author: string,
    readonly votes: number = 0,
  ) {}

  voteUp(): Photo {
    return new Photo(this.id, this.title, this.url, this.author, this.votes + 1);
  }

  voteDown(): Photo {
    return new Photo(this.id, this.title, this.url, this.author, this.votes - 1);
  }
}
