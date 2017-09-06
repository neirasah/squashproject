import { Component, Input } from '@angular/core'

@Component({
  selector: 'club-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{club?.name}}</h2>
      <div>Address: {{club?.address}}</div>
      <div>Courts#: {{club?.courts}}</div>
      <div>Open: {{club?.open}}</div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class ClubThumbnailComponent {
  @Input() club:any

}