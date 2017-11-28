# ckeditor-medialink

This is a plugin for for the CKEditor WYSIWYG.

The Media Link (labeled "Teaser Link Box" in the UI) is another custom CKEditor
plugin. The output is a standard
[media object](https://css-tricks.com/media-object-bunch-ways/) that shows an
[image to the left of a title and body](http://ucd-one-patternlab.s3-website-us-west-1.amazonaws.com/?p=molecules-media-link)

The markup within CKEditor is slightly differen than the final output
```html
<div class="media-link__wrapper" data-url="#">
  <div class="media-link__figure">
    <img src="http://placehold.it/135x135" alt="Thumbnail" data-entity-type="file" />
  </div>
  <div class="media-link__body">
    <h3 class="media-link__title">Title</h3>
    <div class="media-link__content"><p>Content</p></div>
  </div>
</div>
```
A Text filter on the frontend can then transform this markup into the following
```html
<a href="#" class="media-link ">
  <div class="media-link__wrapper">
    <div class="media-link__figure">
      <img src="http://placehold.it/135x135" alt="Thumbnail" data-entity-type="file" />
    </div>
    <div class="media-link__body">
      <h3 class="media-link__title">Title</h3>
      <p class="media-link__content">Content</p>
    </div>
  </div>
</a>
```
The reason for needing this transformation is due to CKEditor not recognizing
block elements like a `div` inside of an `a` tag.
