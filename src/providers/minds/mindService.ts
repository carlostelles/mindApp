import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import {Mind} from '../../models/mind';

@Injectable()
export class MindService {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/mind', params);
  }

  add(mind: Mind) {
  }

  delete(mind: Mind) {
  }

}
