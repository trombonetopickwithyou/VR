# Joshua Williams - CS5331 (VR at Texas Tech University)
## Project 1: How has COVID-19 affected you?

Project 1 focuses on creating a human-scale VR experience of something happening 'inside' your mind.
This project is an opportunity to design and express how COVID-19 has affected our lives. 
Specifically, this project focuses on the environments which have changed due to the Covid-19.
The VR environment must include objects and be decorated in some kind of a consistent style. The environment should also be explorable.



#### Click the image below to watch a brief video demo.
[![Link to Demo Video](/images/demo_screenshot.JPG)](https://www.youtube.com/watch?v=uLcRlKjseq8&feature=youtu.be)

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
The windows are cut into the walls using the A-Frame csg-meshs component developed by SebastianBaltes. This component allows for "boolean mesh operations" on constructive geometry.

```javascript
<a-entity mixin="wall" csg-meshs="subtract: .window;">
  <a-entity class="window" mixin="window" position="-2 0 0">
</a-entity>
```
  
### Navigating the Space


### Creating an object that follows you


### Animation: Clock


### Animation: Interactable Objects
- Box for light intensity
- Box for light color
- Changing the TV 'channel'
- Play/Pause Music from the speakers
- Turn on/off COVID mode


### References

#### Models

#### Textures






## References
- https://aframe.io/
- https://www.youtube.com/playlist?list=PL8MkBHej75fJD-HveDzm4xKrciC5VfYuV

