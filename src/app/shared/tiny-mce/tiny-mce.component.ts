import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-tiny-mce',
  styleUrls:['././tiny-mce.component.scss'],
  templateUrl: '././tiny-mce.component.html'
})
export class TinyMceComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      plugins: ['link', 'paste', 'table'],
      selector: '#' + this.elementId,
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
      skin_url: './assets/tinymce/skins/lightgray'
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
