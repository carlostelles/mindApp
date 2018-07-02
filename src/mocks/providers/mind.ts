import { Injectable } from '@angular/core';
import { Mind } from '../../models/mind';

@Injectable()
export class MindService {
  minds: Mind[] = [];

  defaultMind: any = {
    "title": "Lorem Ipsum 1",
    "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "assets/imgs/speakers/bear.jpg",
    "avatar": "assets/imgs/avatars/avataaars_1.png",
    "createdDate": "2018-06-01 11:30:00",
    "likes": [],
    "comments": [],
    "lastUpdate": "2018-06-01 11:30:00"
  };


  constructor() {
    let minds = [
      {
        "title": "Lorem Ipsum 1",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "assets/imgs/speakers/bear.jpg",
        "avatar": "assets/imgs/avatars/avataaars_1.png",
        "createdDate": "2018-06-01 11:30:00",
        "likes": [],
        "comments": [],
        "lastUpdate": "2018-06-01 11:30:00"
      },
      {
        "title": "Lorem Ipsum 2",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "assets/imgs/speakers/cheetah.jpg",
        "avatar": "assets/imgs/avatars/avataaars_2.png",
        "createdDate": "2018-06-02 11:30:00",
        "likes": [],
        "comments": [],
        "lastUpdate": "2018-06-02 11:30:00"
      },
      {
        "title": "Lorem Ipsum 3",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "assets/imgs/speakers/duck.jpg",
        "avatar": "assets/imgs/avatars/avataaars_3.png",
        "createdDate": "2018-06-03 11:30:00",
        "likes": [],
        "comments": [],
        "lastUpdate": "2018-06-03 11:30:00"
      },
      {
        "title": "Lorem Ipsum 4",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "assets/imgs/speakers/eagle.jpg",
        "avatar": "assets/imgs/avatars/avataaars_4.png",
        "createdDate": "2018-06-04 11:30:00",
        "likes": [],
        "comments": [],
        "lastUpdate": "2018-06-04 11:30:00"
      },
      {
        "title": "Lorem Ipsum 5",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "assets/imgs/speakers/elephant.jpg",
        "avatar": "assets/imgs/avatars/avataaars_5.png",
        "createdDate": "2018-06-05 11:30:00",
        "likes": [],
        "comments": [],
        "lastUpdate": "2018-06-05 11:30:00"
      },
      {
        "title": "Lorem Ipsum 6",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "assets/imgs/speakers/giraffe.jpg",
        "avatar": "assets/imgs/avatars/avataaars_6.png",
        "createdDate": "2018-06-06 11:30:00",
        "likes": [],
        "comments": [],
        "lastUpdate": "2018-06-06 11:30:00"
      },
      {
        "title": "Lorem Ipsum 7",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "assets/imgs/speakers/iguana.jpg",
        "avatar": "assets/imgs/avatars/avataaars_7.png",
        "createdDate": "2018-06-07 11:30:00",
        "likes": [],
        "comments": [],
        "lastUpdate": "2018-06-07 11:30:00"
      }
    ];

    for (let mind of minds) {
      this.minds.push(new Mind(mind.title, mind.descriptions, mind.image, mind.avatar, mind.createdDate, mind.lastUpdate));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.minds;
    }

    return this.minds.filter((mind) => {
      for (let key in params) {
        let field = mind[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return mind;
        } else if (field == params[key]) {
          return mind;
        }
      }
      return null;
    });
  }

  add(mind: Mind) {
    this.minds.push(mind);
  }

  delete(mind: Mind) {
    this.minds.splice(this.minds.indexOf(mind), 1);
  }
}
