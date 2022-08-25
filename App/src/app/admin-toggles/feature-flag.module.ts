import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FeatureflagService } from "../core";
import { DataSharingService } from "../core/services/data-sharing.service";
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [],
  providers: [FeatureflagService,DataSharingService],
})
export class featureFlagModule {}
