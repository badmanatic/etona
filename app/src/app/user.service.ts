import { Injectable } from '@angular/core'; 
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{ Observable} from 'rxjs'
import { setDefaultService, getDefaultService} from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
