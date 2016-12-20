import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-preview',
  styleUrls:['././ad-preview.component.scss'],
  templateUrl: '././ad-preview.component.html'
})
export class AdPreviewComponent implements OnInit {
  @Input() adWidth: number;
  @Input() adHeight: number;
  constructor() { }

  ngOnInit() {
  }

}
