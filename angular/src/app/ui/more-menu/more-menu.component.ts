import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreMenuComponent implements OnInit, AfterViewInit {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  @Input() isFavorite: boolean;

  isShow = false;

  @ViewChild('template', { read: TemplateRef, static: false }) templateRef: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.hideMenu();
    }
  }

  constructor(
    private elementRef: ElementRef,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

  showMenu(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.isShow = true;
  }

  hideMenu(): void {
    this.viewContainerRef.clear();
    this.isShow = false;
  }

  onRemove(event: any): void {
    event.stopPropagation();
    this.hideMenu();
  }

  onFavorite(event: any): void {
    event.stopPropagation();
    this.hideMenu();
  }

  onMore(event: any): void {
    event.stopPropagation();
    console.log('on more');
    this.isShow ? this.hideMenu() : this.showMenu();
    console.log(this.isShow);
  }
}
