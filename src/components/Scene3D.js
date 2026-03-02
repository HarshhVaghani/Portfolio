"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Box } from "@react-three/drei";

function FloatingShapes() {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Torus args={[1.5, 0.4, 16, 64]} position={[-3, 1, -2]}>
                    <meshStandardMaterial color="#6A4D3D" wireframe />
                </Torus>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                <Sphere args={[1, 64, 64]} position={[3, -1, -5]}>
                    <meshStandardMaterial color="#D8C8B4" roughness={0.3} metalness={0.8} />
                </Sphere>
            </Float>

            <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5}>
                <Box args={[1.5, 1.5, 1.5]} position={[-1, -2, -3]}>
                    <meshStandardMaterial color="#C2AB8E" roughness={0.2} metalness={0.5} />
                </Box>
            </Float>

            <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
                <Sphere args={[0.5, 32, 32]} position={[2, 2, -1]}>
                    <meshStandardMaterial color="#332117" envMapIntensity={1} roughness={0.1} metalness={0.9} />
                </Sphere>
            </Float>
        </group>
    );
}

export default function Scene3D() {
    return (
        <div className="fixed inset-0 z-0 bg-transparent w-full h-screen">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#EBE1D5" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4E3629" />
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
