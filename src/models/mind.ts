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
}
