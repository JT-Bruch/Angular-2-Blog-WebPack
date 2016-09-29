import { Component, Input, OnInit } from '@angular/core';

@Component({

  selector: 'app-ad-preview',
  templateUrl: 'ad-preview.component.html',
  styleUrls: ['ad-preview.component.sass']
})
export class AdPreviewComponent implements OnInit {
  @Input() adWidth: number;
  @Input() adHeight: number;
  constructor() { }

  ngOnInit() {
  }

}
