import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

type headerHome = "default" | "small";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  items: Array<any> = [];

  mode: headerHome = "default";
  toggleHeaderMode = () => {
    this.mode = this.mode === "default" ? "small" : "default";
    return this.mode;
  };
  isDefaultMode = () => {
    return this.mode === "default";
  };
  isSmallMode = () => {
    return this.mode === "small";
  };

  constructor(private router: Router) {
    const routes: any[] = router.config;

    routes.forEach((route) => {
      if(route.icon) {
        this.items.push({
          icon: route.icon,
          text: route.text,
          path: route.path ? route.path : "",
        });
      }
    });

    this.items[0].selected = true;
  }
}
