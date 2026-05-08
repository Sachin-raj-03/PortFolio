import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const points = useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.02;
    ref.current.rotation.y = time * 0.01;
    
    // Mouse follow effect
    const targetX = state.mouse.x * 0.5;
    const targetY = state.mouse.y * 0.5;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
  });

  return (
    <group>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0088ff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.NormalBlending}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

function GlowingOrbs() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[-5, 3, -8]}>
          <MeshDistortMaterial
            color="#e0e7ff"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[1.2, 64, 64]} position={[6, -3, -10]}>
          <MeshDistortMaterial
            color="#f0f9ff"
            speed={2}
            distort={0.3}
            radius={1}
            emissive="#0088ff"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>
    </>
  );
}

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-white">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#0088ff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#8b5cf6" />
        <spotLight position={[0, 10, 0]} intensity={1} color="#ffffff" angle={0.15} penumbra={1} />
        <ParticleField />
        <GlowingOrbs />
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
