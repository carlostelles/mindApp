import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api.provider';
import {Mind} from '../../models/mind';

@Injectable()
export class MindProvider {

  constructor(public api: ApiProvider) { }

  query(params?: any) {
    return this.api.get('/mind', params);
  }

  add(mind: Mind) {
  }

  delete(mind: Mind) {
  }

}
