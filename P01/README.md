# Joshua Williams - CS5331 (VR at Texas Tech University)
## Project 1: How has COVID-19 affected you?

Project 1 focuses on creating a human-scale VR experience of something happening 'inside' your mind.
This project is an opportunity to design and express how COVID-19 has affected our lives. 
Specifically, this project focuses on the environments which have changed due to the Covid-19.
The VR environment must include objects and be decorated in some kind of a consistent style. The environment should also be explorable.



#### Click the image below to watch a brief video demo.
[![Link to Demo Video](/images/p1.williams.gif)](https://youtu.be/7pK0n02emos)

#### Click the link below to try it for yourself (live demo).
https://trombonetopickwithyou.github.io/VR




## Libraries Used
- A-Frame [1.0.4](https://aframe.io)
- A-Frame csg-meshs [1.0.0](https://github.com/SebastianBaltes/aframe-csg-meshs)  
  
This application is written in HTML and JavaScript, using the A-Frame framework.  







# Some notable aspects of this program

### Walls and Barred Windows
The walls are designed to be "prison-like," portraying how COVID-19 has, in many ways, imprisoned us in our own homes.  

![barred windows](/images/barred_windows.JPG)  

The bars on the windows are made out of cyliders placed flush outside of the wall. The windows cut into the walls use the A-Frame csg-meshs component. This component allows for "boolean mesh operations" on constructive geometry.

```javascript
<a-entity mixin="wall" csg-meshs="subtract: .window;">
  <a-entity class="window" mixin="window" position="-2 0 0">
</a-entity>
```
  
### Navigating the Space
To navigate the space, WASD can be used if viewing from a computer. Additionally, there are floating "teloport here" blocks located among the scene, which allow the user to teleport to a specific spot by gazing at the respective block long enough.  

![teleport here block](/images/teleport.gif)  

The blocks are assigned a custom component "waypoint" and the respective javascript registering that component allows for a specific set of actions to occur every time a "waypoint" is clicked.
```javascript
AFRAME.registerComponent('waypoint',{
  init:function(data){

      this.el.addEventListener('click',function(e){
          //get position of waypoint block. get user camera info
          var wp_position = this.getAttribute("position");
          var camPos = document.querySelector("#camera").object3D.position;

          //set camera position
          camPos.set(wp_position.x, 1.6, wp_position.z);
      });
  }
});
```

### Making balloon object follow the user
A balloon floats at a height just above the user, and follows the user around the scene. The speed of the object varies over time, making the object's movement look more realistic.  

![balloon movement](/images/balloon.gif)  

A custom component named "follow" is created, and allows for the user to attach this component to any object in their environment and specify which object they would like it to follow. In this case, the object it is told to follow is the camera.  

```javascript
<a-entity follow="target:#camera" gltf-model="#balloon"></a-entity>
```


### Clock
![clock](/images/clock.gif)  

The clock is made from scratch using A-Frame primitives. In order to make the axis of rotation be the end of the shape instead of the center of the shape, the object is wrapped in a second entity (located in the center of the clock, and rotating around its center), and each hand is positioned in the environment relative to the wrapper.  

```javascript
<!-- Clock -->
<a-cylinder position="3.5 2.5 0.05" height="0.05" radius="0.5" rotation="90 0 0" color="white">
    <!-- First hand -->
    <a-entity position="0 0.05 0"
                animation="property: rotation; to:0 -360 0; dur:100000; easing: linear; loop:true">
        <a-box position="0.15 0 0" width="0.35" height="0.01" depth="0.05" color="black"></a-box>
    </a-entity>
    <!-- Second Hand -->
    <a-entity position="0 0.05 0"
              animation="property: rotation; to:0 -360 0; dur:10000; easing: linear; loop:true">
        <a-box position="0.2 0 0" width="0.45" height="0.01" depth="0.05" color="black"></a-box>
    </a-entity>
</a-cylinder>

```

### Animation: Interactable Objects
Boxes spin and are interactable for:
- Adjusting light intensity  
![adjust light intensity](/images/light_box.gif)  

- Adjusting light color  
![adjust light color](/images/color_box.gif)  

- Changing the TV's 'channel'  
![change tv channel](/images/tv_remote.gif)  

- Play/Pause Music from the speakers  
(see live demo / video for example)  

- Turning on/off COVID mode  
![turn off covid move](/images/covid_mode.gif)


# References

#### Models  

There are ~17 different objects in this VR scene, 10 of which are pulled from other sources:  
- "couch" - https://sketchfab.com/3d-models/couch-low-poly-88aa89d84e1441a8927c09164d18275d  
- "lightfixture" - https://sketchfab.com/3d-models/light-fixture-bae2e5cae1a24655a9223c1a82d7921f  
- "book" - https://sketchfab.com/3d-models/book-low-poly-d6465435cb3241f9a550067e34c28918  
- "monitor" - https://sketchfab.com/3d-models/desktop-computer-561abc2fc95941609fc7bc6f232895c2  
- "chair" - https://sketchfab.com/3d-models/simple-low-poly-office-chair-f27a1912734943aab7521adf1fe6fa51
- "picframe" - https://sketchfab.com/3d-models/picture-frame-in-african-style-72ece6bbf86d45faaf0f6d02d1788262
- "plant" - https://sketchfab.com/3d-models/low-poly-plant-9b1916457ab74e98a4e9124e637390fd  
- "dog" - https://sketchfab.com/3d-models/low-poly-doggy-1c8c763518ab4751bfcddf0b6a34011a  
- "speakers" - https://sketchfab.com/3d-models/speakers-low-poly-b2e3d6ecef4e40d994066416c395bf0a  
- "balloon" - https://sketchfab.com/3d-models/low-poly-hot-air-balloon-3eff436e33ce4db3a54d4d8edc43528b  


#### Textures
- "tv_zoom" - https://ca-times.brightspotcdn.com/dims4/default/7f069ce/2147483647/strip/true/crop/2808x1607+0+0/resize/840x481!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F22%2F94%2Fdcba53814c47b09bc8d84b43cc0f%2Fartist-relief-fund.jpg  
- "tv_cartoons" - https://www.bbc.com/news/world-us-canada-51357832  
- "tv_news" - https://www.nytimes.com/2020/03/24/business/media/coronavirus-evening-news.html  
- "tv_off" - https://colourlex.com/project/peach-stone-black/  
- "coffeewood" - https://www.wonderwoodstore.nl/en/stolle-t46-coffee-table.html  
- "concretewall" - https://www.pinterest.com/pin/510525307748609205/?nic_v2=1a7MtPd3O  
- "concretefloor" - https://eyehortilux.com/grow-lights/blue-metal-halide/concrete-texture/  
- "concreteroof" - https://www.publicdomainpictures.net/en/view-image.php?image=280995&picture=gray-concrete-texture  
- "night" - http://sjastronomy.ca/introduction-360-nighttime-panoramic-photography/
- "day" - https://www.shutterstock.com/search/360+panorama
- "masksign" - https://www.customsigns.com/notice-please-wear-a-face-mask-sign  
- "socialdist" - https://www.minutemanpress.com/products-services/product-gallery/free-downloadable-social-distancing-signs-now-available.html
- "cat" - https://www.amazon.com/Hang-There-Cat-Poster-Motivational/dp/B073FKH276
- "teleport" - https://www.shutterstock.com/search/teleport+logo  


#### Misc.
- https://aframe.io/
- https://www.youtube.com/playlist?list=PL8MkBHej75fJD-HveDzm4xKrciC5VfYuV
- https://alex-nguyen.github.io/CS5331001-Virtual-Reality/index.html
- https://www.youtube.com/watch?v=dQw4w9WgXcQ
