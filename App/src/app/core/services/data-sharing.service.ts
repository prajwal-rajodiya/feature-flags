import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class DataSharingService {
  // public feautureFlags: BehaviorSubject<any> = new BehaviorSubject<any>([{}]);
  public feautureFlags = new Subject<any>(); //need to create a subject

  sendUpdate(val: any) {
    //the component that wants to update something, calls this fn
    console.log(typeof val);
    this.feautureFlags.next(val);
    //next() will feed the value in Subject
  }

  getUpdate(): Observable<any> {
    //the receiver component calls this function
    return this.feautureFlags.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
}
