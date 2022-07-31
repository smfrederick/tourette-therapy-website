import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  @Output() public homeClicked = new EventEmitter();
  @Output() public aboutMeClicked = new EventEmitter();
  @Output() public servicesClicked = new EventEmitter();
  @Output() public resourcesClicked = new EventEmitter();
  @Output() public contactUsClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public goToHome() {
    this.homeClicked.emit();
  }

  public goToAboutMe() {
    this.aboutMeClicked.emit();
  }

  public goToServices() {
    this.servicesClicked.emit();
  }

  public gotToResources() {
    this.resourcesClicked.emit();
  }

  public gotToContactUs() {
    this.contactUsClicked.emit();
  }
}
