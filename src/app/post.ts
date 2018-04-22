export class Post {

  title: string;
  content: string;
  created_at: Date;
  loveIts: number;

  constructor(title, content)
  {
      this.title = title;
      this.content = content;
      this.loveIts = 0;
      this.created_at = new Date();
  }
}
