import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { HomeModule } from "./home/home.module";
import { FooterComponent, HeaderComponent, SharedModule } from "./shared";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FeatureFlagComponent } from "./admin-toggles/feature-flag.component";
import { FeatureflagService } from "./core";
import { DataSharingService } from "./core/services/data-sharing.service";
import { featureFlagModule } from "./admin-toggles/feature-flag.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FeatureFlagComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    CoreModule,
    featureFlagModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    DataSharingService,
    FeatureflagService,
    {
      provide: APP_INITIALIZER,
      useFactory: (featureFlagsService: FeatureflagService) => () =>
        featureFlagsService.loadFeatureFlags(),
      deps: [FeatureflagService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
