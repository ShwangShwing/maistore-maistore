import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class UsersService {
  private serverUrl: string;

  constructor(private http: Http) {


  }

}

