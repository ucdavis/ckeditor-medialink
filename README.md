# ckeditor-medialink

This is a plugin for for the CKEditor WYSIWYG.

The Media Link (labeled "Teaser Link Box" in the UI) is another custom CKEditor
plugin. The output is a standard
[media object](https://css-tricks.com/media-object-bunch-ways/) that shows an
[image to the left of a title and body](http://ucd-one-patternlab.s3-website-us-west-1.amazonaws.com/?p=molecules-media-link)

The markup within CKEditor will be:
```html
<media-link url="#">
  <div slot="image"></div>
  <div slot="title">Title</div>
  <div slot="content"><p>Content</p></div>
</media-link>
```
A Text filter or web component on the frontend can then transform this markup
into whatever is desired.
