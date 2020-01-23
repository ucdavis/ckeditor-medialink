// Dialog window for the Media Link

CKEDITOR.dialog.add('media_link', function (editor) {
  'use strict';

  return {
    title: 'Media Link Options',
    minWidth: 200,
    minHeight: 100,
    contents: [
      {
        id: 'info',
        elements: [
          {
            id: 'linkUrl',
            type: 'text',
            label: 'Link URL',

            setup: function (widget) {
              this.setValue(widget.data.linkUrl);
            },

            commit: function (widget) {
              widget.setData('linkUrl', this.getValue());
            }
          }
        ]
      }
    ]
  };
});
