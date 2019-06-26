import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-shell></app-shell>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'azure-functions-sms';
}
