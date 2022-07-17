import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('navBarComponent') public navBarElement!: ElementRef;
  public menuPosition: any;
  public stickNavBarToTop = false;
  public screenWidth = 0;
  public hideSmall = false;

  constructor() {
    this.onResize();
  }

  public ngAfterViewInit(): void {
    this.menuPosition = this.navBarElement.nativeElement.offsetTop;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event?: any) {
    this.screenWidth = window.innerWidth;
    this.hideSmall = this.screenWidth <=  576;
  }

  public scrollIntoView(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  public scrollHomeIntoView(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }

  @HostListener('window:scroll', ['$event'])
  public windowScrolling() {
    const windowScroll = window.pageYOffset;
    this.stickNavBarToTop = windowScroll >= this.menuPosition;
  }
}
