import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import Star from "./Star";

interface IStar {
    _id: string;
    title: string;
    content: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    scale: number;
    color: string;
}

export default function SpaceScene() {
    const [stars, setStars] = useState<IStar[]>([]);

    useEffect(() => {
        // Fetch stars from API
        fetch("http://localhost:3000/api/stars")
            .then((res) => res.json())
            .then((data) => setStars(data))
            .catch((error) => console.error("Error fetching stars:", error));
    }, []);

    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 75 }}
            style={{ width: "100vw", height: "100vh" }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            
            {/* Stars */}
            {stars.map((star) => (
                <Star key={star._id} {...star} />
            ))}

            {/* Controls */}
            <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
            />
        </Canvas>
    );
} 