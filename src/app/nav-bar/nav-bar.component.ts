import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() public homeClicked = new EventEmitter();
  @Output() public aboutMeClicked = new EventEmitter();
  @Output() public servicesClicked = new EventEmitter();
  @Output() public fAQClicked = new EventEmitter();
  @Output() public contactMeClicked = new EventEmitter();

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

  public gotToFAQ() {
    this.fAQClicked.emit();
  }

  public gotToContactMe() {
    this.contactMeClicked.emit();
  }
}
