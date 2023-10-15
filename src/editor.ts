import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Strikethrough } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';

export async function getEditor(div: HTMLDivElement) {
  return ClassicEditor
    .create(div, {
      plugins: [
        Alignment,
        Autoformat,
        BlockQuote,
        Bold,
        Essentials,
        GeneralHtmlSupport,
        Heading,
        Indent,
        IndentBlock,
        Italic,
        Link,
        List,
        Paragraph,
        SourceEditing,
        Strikethrough,
      ],
      toolbar: [
        'undo', 'redo',
        '|', 'heading',
        '|', 'bold', 'italic', 'strikethrough',
        '|', 'link', 'bulletedList', 'numberedList', 'blockQuote',
        '|', 'alignment', 'outdent', 'indent',
        '|', 'sourceEditing',
      ],
      htmlSupport: {
        allow: [
          {
            name: /^(div|p|ul|li|a|strong|em|h[1-6])$/,
            styles: true,
            classes: true,
          }
        ],
      },
    } )
    .catch( error => {
      console.error( error );
    } );
}
