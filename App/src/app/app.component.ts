import { Component, OnInit } from "@angular/core";

import { FeatureflagService, UserService } from "./core";
import { DataSharingService } from "./core/services/data-sharing.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  featureFlags: any;
  constructor(
    private userService: UserService,
    private featureFlagService: FeatureflagService,
    private dataSharingService: DataSharingService
  ) {
    this.featureFlags = this.featureFlagService.getFeatureFlags();
    dataSharingService.sendUpdate(this.featureFlags);
    console.log("In App constructor :");
    console.log(JSON.stringify(this.featureFlags));
  }
  getAllFeature() {
    this.featureFlagService.loadFeatureFlags();
  }
  ngOnInit() {
    this.oninitCallback();
  }
  oninitCallback() {
    this.userService.populate();
    this.dataSharingService.sendUpdate(this.featureFlags);
    console.log("In App - OnInit :");
    this.dataSharingService.getUpdate().subscribe((val) => {
      this.featureFlags = val;
    });
    console.log("--------------");
    console.log(JSON.stringify(this.featureFlags));
  }
}
