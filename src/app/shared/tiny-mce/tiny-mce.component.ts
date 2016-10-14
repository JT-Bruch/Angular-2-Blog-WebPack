import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
/*

If I remove the commented out section in the index.html and attempt to use this
I get the error from https://github.com/tinymce/tinymce/issues/3247

import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/table/plugin';
*/
@Component({
  selector: 'app-tiny-mce',
  templateUrl: './tiny-mce.component.html',
  styleUrls: ['./tiny-mce.component.scss']
})
export class TinyMceComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: './assets/tinymce/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
