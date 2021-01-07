import React, { useRef, useState } from "react";
//R3F
import { Canvas, useFrame } from "react-three-fiber";
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
import { RingObj } from "./assets/RingObj";
import { GlobeObj } from "./assets/GlobeObj";
import { ShapeObj } from "./assets/ShapeObj";
// Styles
import "./App.scss";
// React Spring
import { useSpring, a } from "react-spring/three";
import { playSound } from "./components/playSound";

// soft Shadows
softShadows();

const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [0.2, 0.2, 0.2] : [1, 1, 1],
  });

  const hybrid = () => {
    setExpand(!expand);
    playSound();
  };
  return (
    <>
      <a.mesh
        position={position}
        ref={mesh}
        onClick={hybrid}
        scale={props.scale}
        castShadow
      >
        <icosahedronBufferGeometry attach="geometry" args={args} />
        <MeshWobbleMaterial
          color={color}
          speed={speed}
          attach="material"
          factor={10}
        />
      </a.mesh>
    </>
  );
};

const SpinningShape = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [0.2, 0.2, 0.2] : [1, 1, 1],
  });

  const hybrid = () => {
    setExpand(!expand);
    playSound();
  };
  return (
    <>
      <a.mesh
        position={position}
        ref={mesh}
        onClick={hybrid}
        scale={props.scale}
        castShadow
      >
        <tetrahedronBufferGeometry attach="geometry" args={args} />
        <MeshWobbleMaterial
          color={color}
          speed={speed}
          attach="material"
          factor={10}
        />
      </a.mesh>
    </>
  );
};

const SpinningCircle = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [0.2, 0.2, 0.2] : [1, 1, 1],
  });

  const hybrid = () => {
    setExpand(!expand);
    playSound();
  };
  return (
    <>
      <a.mesh
        position={position}
        ref={mesh}
        onClick={hybrid}
        scale={props.scale}
        castShadow
      >
        <torusBufferGeometry attach="geometry" args={args} />
        <MeshWobbleMaterial
          color={color}
          speed={speed}
          attach="material"
          factor={6}
        />
      </a.mesh>
    </>
  );
};

const App = () => {
  return (
    <>
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        {/* This light makes things look pretty */}
        <ambientLight intensity={0.3} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          {RingObj.map((shape) => (
            <SpinningMesh
              position={shape.position}
              color={shape.color}
              args={shape.args}
              speed={shape.speed}
            />
          ))}
          {GlobeObj.map((shape) => (
            <SpinningCircle
              position={shape.position}
              color={shape.color}
              args={shape.args}
              speed={shape.speed}
            />
          ))}
          {ShapeObj.map((shape) => (
            <SpinningShape
              position={shape.position}
              color={shape.color}
              args={shape.args}
              speed={shape.speed}
            />
          ))}
        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls autoRotate />
      </Canvas>
    </>
  );
};

export default App;
