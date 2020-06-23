/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import List from '@ckeditor/ckeditor5-list/src/list';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Heading,
	Paragraph,
	Bold,
	Italic,
	Code,
	List,
	Link,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	SimpleUploadAdapter,
	BlockQuote,
	Table,
	TableToolbar,
	MediaEmbed,
	CodeBlock
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	codeBlock: {
		indentSequence: '  '
	},
	image: {
		styles: [ 'full' ],
		toolbar: [ 'imageTextAlternative' ],
		upload: {
			types: [ 'jpeg', 'png', 'webp', 'gif', 'svg+xml' ]
		}
	},
	simpleUpload: {
		uploadUrl: 'http://upload-url.com',
		headers: {
			'X-CSRF-TOKEN': 'CSFR-Token',
			Authorization: 'Bearer <JSON Web Token>'
		}
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	placeholder: 'Escriba o pegue el contenido aquí.',
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'link',
			'blockQuote',
			'imageUpload',
			'insertTable',
			'mediaEmbed',
			'|',
			'code',
			'codeBlock',
			'|',
			'undo',
			'redo'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'es'
};
