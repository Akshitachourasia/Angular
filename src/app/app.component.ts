import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header>
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"/>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  imports: [HomeComponent, RouterModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}