import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: '[app-message]',
  template: `
    <div class="header">
      {{ header }}
    </div>
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: [
    '.ui { font-weight: bold; }',
    '.message { font-weight: bold; }'
  ],
})
export class MessageComponent implements OnInit {
  @Input() header: string;
  @HostBinding('attr.class') cssClass = 'ui message';

  ngOnInit(): void {
    console.log('header', this.header);
  }
}