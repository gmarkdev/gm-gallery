# gm-gallery
##### It's simple html and javascript gallery

#### Firstly you have to create div:

  <div id="gm-gallery" gm-arrows="true">

  </div>

##### with parameter "gm-arrows". You can set "true" or "false" it's means visibility of arrows to next/prev image.

##### Next put image in gallery div. 
##### Such as:

  <div id="gm-gallery" gm-arrows="true">
  
    <img class="img-medium" gm-icon-size="small" gm-open-size="medium" gm-bg="dark" src="img/picture2.jpg">
    
  </div>
  
## Tag "img" have 3 another parameters:

##### "gm-icon-size" - size of thumbnail image
##### "gm-open-size" - size of opened image
##### "gm-bg" - color of background image

### Values

#### gm-icon-size:

##### gm-icon-size="small"
##### gm-icon-size="medium"
##### gm-icon-size="large"
##### or in percentages gm-icon-size="40%"

#### gm-open-size:

##### gm-open-size="small"
##### gm-open-size="medium"
##### gm-open-size="large"
##### or in percentages gm-open-size="40%"

#### gm-bg

##### gm-bg="dark"
##### gm-bg="light"

