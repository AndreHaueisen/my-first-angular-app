export class Photo {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly url: string,
    readonly thumbnailUrl: string,
    readonly votes: number = 1,
  ) {}

  voteUp(): Photo {
    return new Photo(this.id, this.title, this.url, this.thumbnailUrl, this.votes + 1);
  }

  voteDown(): Photo {
    return new Photo(this.id, this.title, this.url, this.thumbnailUrl, this.votes - 1);
  }
}
