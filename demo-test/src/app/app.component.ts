import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-test';

  htmlSnippets = 'template : <h2>External Script</h2>';

  constructor(
    private sanitize: DomSanitizer,
    private zone: NgZone,
    private cdRef: ChangeDetectorRef
  ) {
    // this.sanitize.

    // this.cdRef.

    this.zone.runOutsideAngular(() => {});
  }
}
