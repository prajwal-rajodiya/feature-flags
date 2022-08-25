import { Component } from "@angular/core";
import { DataSharingService } from "../core/services/data-sharing.service";
import { FeatureflagService } from "../core/services/feature-flag.service";

@Component({
  selector: "  feature-flag",
  templateUrl: "./feature-flag.template.html",
  styleUrls: ["./feature-flag.component.css"],
})
export class FeatureFlagComponent {
  featureFlags: any;

  constructor(
    private dataSharingService: DataSharingService,
    private featureflagService: FeatureflagService
  ) {
    console.log("In Header -constructore :");
  }

  ngOnInit() {
    this.dataSharingService.getUpdate().subscribe((val) => {
      console.log("Inside header - {feature }");
      console.log(val);
      this.featureFlags = val;
    });
  }
  handleChange() {
    console.log("handlechanege");
    this.featureflagService
      .updateServices(this.featureFlags)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
