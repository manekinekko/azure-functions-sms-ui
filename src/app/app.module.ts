import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppShellComponent } from "./app-shell/app-shell.component";
import { AppComponent } from "./app.component";
import { WebcamModule } from './webcam/webcam.module';


@NgModule({
  declarations: [AppComponent, AppShellComponent],
  imports: [
    BrowserModule,
    WebcamModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
