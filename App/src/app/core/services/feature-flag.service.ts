import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable()
export class FeatureflagService {
  featureFlags$: JSON;
  constructor(public http: HttpClient) {}

  //load features from server
  loadFeatureFlags(): Promise<any> {
    return this.http
      .get("http://localhost:5050/features")
      .pipe(tap((response) => (this.featureFlags$ = response as any)))
      .toPromise();
  }
  getFeatureFlags(): any {
    return this.featureFlags$;
  }

  private _refreshrequired$ = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired$;
  }

  //get feature list after loading from server to client browser

  updateServices(body: Observable<object>) {
    return this.http.post(environment["api_admin_url"] + "/update", body).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    );
  }
}
