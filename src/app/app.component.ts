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

  public ngAfterViewInit(): void {
    this.menuPosition = this.navBarElement.nativeElement.offsetTop;
  }

  public scrollIntoView(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }

  @HostListener('window:scroll', ['$event'])
  public windowScrolling() {
    const windowScroll = window.pageYOffset;
    this.stickNavBarToTop = windowScroll >= this.menuPosition;
  }
}
