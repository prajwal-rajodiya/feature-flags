import { Component, Input, OnChanges, OnInit } from "@angular/core";
import {} from "../../app.component";
import { FeatureflagService, User, UserService } from "../../core";

import { DataSharingService } from "../../core/services/data-sharing.service";
@Component({
  selector: "app-layout-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  featureFlags: any;
  constructor(
    private userService: UserService,
    private featureflagService: FeatureflagService,
    private dataSharingService: DataSharingService
  ) {
    this.featureflagService.loadFeatureFlags();
    this.dataSharingService.getUpdate().subscribe((val) => {
      console.log("Inside header - {feature }")
      this.featureFlags = val;
    });
    console.log("In Header -constructore :");
  }
  features: Map<string, boolean[]> = new Map<string, boolean[]>();
  currentUser: User;

  ngOnInit() {
    console.log("In Header -OnInit :");
    console.log(JSON.stringify(this.featureFlags));
    this.userService.currentUser.subscribe((userData) => {
      this.currentUser = userData;
    });

    for (let index = 0; index < this.featureFlags.length; index++) {
      this.features.set(
        this.featureFlags[index].name,
        this.featureFlags[index].status
      );
    }
  }
}
