import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "adminComponent",
  templateUrl: "admin.component.html",
})
export class AdminComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl("/");
  }
}
