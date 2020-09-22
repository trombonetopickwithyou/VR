import * as THREE from './three.module.js'

console.log("hey world from app.js in webstorm");

//create a new scene
var scene = new THREE.Scene();

//create a new camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);	//FOV,AspRatio,NearPlane,FarPlane

camera.position.z = 5;	//camera height

//create renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5"); //make background grey
renderer.setSize(window.innerWidth,window.innerHeight);

//create canvas element with renderer settings
document.body.appendChild(renderer.domElement);


//make canvas resize actively with window
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth,window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();
});




//add sphere
// var geometry = new THREE.SphereGeometry(1,10,10);	//radius, width segment, height segment
// var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
// var mesh = new THREE.Mesh(geometry, material);	//combine two aspects into a mesh
// scene.add(mesh);

// add square
var geometry = new THREE.BoxGeometry(1,1,1);	//xscale,yscale,zscale
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var mesh = new THREE.Mesh(geometry, material);	//combine two aspects into a mesh

//moving/rotating the square
//mesh.position.set(2,2,-2);
//mesh.rotation.set(45,0,0); //rotate about x,y,z axis
mesh.rotation.x = 0;
//add square
scene.add(mesh);


//add light
var light = new THREE.PointLight(0xFFFFFF, 1, 500);	//color, intensity, distance
light.position.set(10,0,25);
scene.add(light);


//render scene (gets called 60 fps)
var render = function(){
	requestAnimationFrame(render);	//makes sure browser window is active

	mesh.rotation.x += 0.01;

	renderer.render(scene, camera);
}

render();