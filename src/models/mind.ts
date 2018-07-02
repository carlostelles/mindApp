import {Like} from './like';
import {Comment} from './comment';

export class Mind {

  title: string;
  descriptions: string;
  image: string;
  avatar: string;
  createdDate: string;
  likes: Like[];
  comments: Comment[];
  lastUpdate: string;


  constructor(title: string, descriptions: string, image: string, avatar: string, createdDate: string, lastUpdate: string) {
    this.title = title;
    this.descriptions = descriptions;
    this.image = image;
    this.avatar = avatar;
    this.createdDate = createdDate;
    this.lastUpdate = lastUpdate;
  }
}
