import * as THREE from 'three'
const scene=new THREE.Scene();
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
const geometry=new THREE.BoxGeometry(5,5,5)
// capsule geometry
// const geometry=new THREE.CapsuleGeometry(1,1,50,8)
// const geometry=new THREE.CircleGeometry(2,32)
// const geometry=new THREE.ConeGeometry(2,2,50)
// const geometry=new THREE.CylinderGeometry(1.5,2,3,100);
// const material=new THREE.MeshBasicMaterial({color:'red'})
// if we want it to react on light the we have to use 
const material=new THREE.MeshStandardMaterial({color:'red'})
const cube=new THREE.Mesh(geometry,material);
// if using Line to see in skeleton form
// const cube=new THREE.Line(geometry,material);

const lightGeometry=new THREE.SphereGeometry(1,12,16)
const lightmaterial=new THREE.MeshBasicMaterial({color:'white'})
const lightSphare=new THREE.Mesh(lightGeometry,lightmaterial)


scene.add(cube,lightSphare);
// cube.position.x=4
// cube.rotation.x=1 // rn this is taking value in radian
// to use degree we have a formula
// cube.rotation.x=Math.PI * (45/180.0)
// renderer.render(scene,camera)
// now implementing animation using function


let flag=true;

// function animate()
// {

//     if(cube.position.x>5) flag=false;
//     else if(cube.position.x< -5) flag=true

//     if(flag)cube.position.x+=0.1
//     else cube.position.x-=0.1
//     // to give rotation to cube
//     cube.rotation.x+=0.05
//     cube.rotation.y+=0.05
//     cube.rotation.z+=0.05
//     // cube.position.y+=0.1
//     // cube.position.z+=0.1



//     renderer.render(scene,camera)
//     requestAnimationFrame(animate);
// }
// // for safety purpose  because sometimes any system is not capable for much smothness
 
// animate()
// // setInterval(animate,100)

// q represents theta here 
let q=0
animate()
function animate()
{
    q+=0.01
    let qsin=Math.sin(q);
    let qcos=Math.cos(q);
    cube.position.x=3*qsin

    let scaledCos=30 *qcos
    let scaledSin=30 *qsin
    pointLight.position.set(scaledCos,0,scaledSin)
     
    lightSphare.position.set(scaledCos,0,scaledSin)

    cube.rotation.x+=0.01
        cube.rotation.y+=0.01
        cube.rotation.z+=0.01
    renderer.render(scene,camera)
    requestAnimationFrame(animate);
}