import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {FirstPersonControls} from 'three/examples/jsm/controls/FirstPersonControls'
import {FlyControls} from 'three/examples/jsm/controls/FlyControls'
import {TransformControls} from 'three/examples/jsm/controls/TransformControls'
const scene=new THREE.Scene();
// scene.background=new THREE.Color(0.5,0.5,0.5)
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=10;
camera.position.y=5;
// renderer using canvas
const renderer=new THREE.WebGLRenderer();
// size for the canvas
renderer.setSize(window.innerWidth,window.innerHeight)
// add canvas to body
document.getElementById('app').appendChild(renderer.domElement)

// lights
const ambianceLight=new THREE.AmbientLight(0xffffff,0.2)
// arguments are color and intensity
scene.add(ambianceLight)

const pointLight=new THREE.PointLight(0xffffff,1,100)
// arguments are color intensity and available in distance in units 
pointLight.position.set(0,5,5)
scene.add(pointLight)

// to create a shape
const geometry=new THREE.BoxGeometry(1,1,1)
const material=new THREE.MeshStandardMaterial()
const mesh=new THREE.Mesh(geometry,material)
mesh.position.set(0,0,0)
scene.add(mesh)






const controls=new OrbitControls(camera,renderer.domElement)

const gridHelper=new THREE.GridHelper(100,10)
scene.add(gridHelper)
const clock=new THREE.Clock()
// const controls=new FirstPersonControls(camera,renderer.domElement)
// controls.movementSpeed=150;
// controls.lookSpeed=0.1

// const controls=new FlyControls(camera,renderer.domElement)
// controls.movementSpeed=1000;
// controls.rollSpeed=Math.PI /24;
 const transformControl=new TransformControls(camera,renderer.domElement)
transformControl.addEventListener('change',animate)
transformControl.addEventListener('dragging-changed',function(event){
    controls.enabled=!event.value
})

transformControl.attach(mesh)
scene.add(transformControl)





let flag=true;



animate()
function animate()
{
    // controls.update();
    controls.update(clock.getDelta())
    

    
    renderer.render(scene,camera)
    requestAnimationFrame(animate);
}