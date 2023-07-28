import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
const scene=new THREE.Scene();
scene.background=new THREE.Color(0.5,0.5,0.5)
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=50;
// renderer using canvas
const renderer=new THREE.WebGLRenderer();
// size for the canvas
renderer.setSize(window.innerWidth,window.innerHeight)
// add canvas to body
document.getElementById('app').appendChild(renderer.domElement)

// lights
const ambianceLight=new THREE.AmbientLight(0xffffff,0.3)
// arguments are color and intensity
scene.add(ambianceLight)

const pointLight=new THREE.PointLight(0xffffff,1,100)
// arguments are color intensity and available in distance in units 
// pointLight.position.set(5,0,1)
scene.add(pointLight)

// to create a shape
// const geometry=new THREE.BoxGeometry(5,5,5)
// const geometry=new THREE.SphereGeometry(5,32,32)
// capsule geometry
// const geometry=new THREE.CapsuleGeometry(1,1,50,8)
// const geometry=new THREE.CircleGeometry(2,32)
// const geometry=new THREE.ConeGeometry(2,2,50)
const geometry=new THREE.CylinderGeometry(5,5,32,16);
// const material=new THREE.MeshBasicMaterial({color:'red'})
// if we want it to react on light the we have to use 
// const material=new THREE.MeshStandardMaterial({color:'red'})
// const cube=new THREE.Mesh(geometry,material);
const material=new THREE.PointsMaterial({color:'red',size:0.5})
const cube=new THREE.Points(geometry,material);

// if using Line to see in skeleton form
// const cube=new THREE.Line(geometry,material);

const lightGeometry=new THREE.SphereGeometry(1,12,16)
const lightmaterial=new THREE.MeshBasicMaterial({color:'white'})
const lightSphare=new THREE.Mesh(lightGeometry,lightmaterial)


scene.add(cube,lightSphare);

pointLight.position.set(0,0,20)
     
    lightSphare.position.set(0,0,20)
const controls=new OrbitControls(camera,renderer.domElement)


let flag=true;


let q=0
animate()
function animate()
{
    controls.update();
    q+=0.01
    let qsin=Math.sin(q);
    let qcos=Math.cos(q);
    // cube.position.x=3*qsin

    let scaledCos=30 *qcos
    let scaledSin=30 *qsin
    // pointLight.position.set(scaledCos,0,scaledSin)
     
    // lightSphare.position.set(scaledCos,0,scaledSin)

    // cube.rotation.x+=0.01
    //     cube.rotation.y+=0.01
    //     cube.rotation.z+=0.01
    renderer.render(scene,camera)
    requestAnimationFrame(animate);
}