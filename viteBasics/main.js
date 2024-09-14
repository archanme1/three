import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const aspect = window.innerWidth / window.innerHeight;

const canvas = document.getElementById("canvas");

// createing a scene

const scene = new THREE.Scene();
scene.background = new THREE.Color("#1f1f1f");

// adding a camera
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.z = 5;

// creating and adding a mesh

const boxgeo = new THREE.BoxGeometry(1, 1, 1);
const boxMat = new THREE.MeshLambertMaterial({
  color: "#468585",
});
const meshBox = new THREE.Mesh(boxgeo, boxMat);
scene.add(meshBox);

const geometry = new THREE.CircleGeometry(2, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x006769 });
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);

// add the light

const light = new THREE.DirectionalLight(0xffff00, 100);
light.position.set(1, 1, 1);
scene.add(light);

// render the content
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// adding animation and controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.5;
controls.enablePan = true;
controls.enableZoom = true;

function animate() {
  meshBox.rotation.x += 0.005;
  meshBox.rotation.y += 0.005;
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
