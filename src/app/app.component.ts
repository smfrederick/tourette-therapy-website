import {AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('navBarComponent') public navBarElement!: ElementRef;
  @ViewChild('sideNavBarComponent') public sideNavBarComponent!: ElementRef;
  public menuPosition: any;
  public stickNavBarToTop = false;
  public screenWidth = 0;
  public hideSmall = false;
  public isMenuOpen: boolean = false;

  constructor(private renderer: Renderer2) {
    this.onResize();
  }

  onClick(event: any) {
    if (!this.sideNavBarComponent.nativeElement.contains(event.target)) // or some similar check
      this.isMenuOpen=false;
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
    this.closeSideNav();
  }

  public scrollHomeIntoView(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
    this.closeSideNav();
  }

  @HostListener('window:scroll', ['$event'])
  public windowScrolling() {
    const windowScroll = window.pageYOffset;
    this.stickNavBarToTop = windowScroll >= this.menuPosition;
  }

  public toggleSideNav(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeSideNav(): void {
    this.isMenuOpen = false;
  }
}
