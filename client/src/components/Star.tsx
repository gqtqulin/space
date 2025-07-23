import { useState } from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";

interface StarProps {
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

export default function Star({ title, content, position, scale, color }: StarProps) {
    const [hovered, setHovered] = useState(false);
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.group
            position={[position.x, position.y, position.z]}
            scale={scale}
            animate={{
                scale: hovered ? scale * 1.2 : scale,
            }}
        >
            {/* Star mesh */}
            <mesh
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => setExpanded(!expanded)}
            >
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>

            {/* Note content */}
            {expanded && (
                <Html distanceFactor={10}>
                    <div className="note-content" style={{ 
                        background: "rgba(0, 0, 0, 0.8)",
                        color: "white",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                        width: "200px"
                    }}>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </div>
                </Html>
            )}
        </motion.group>
    );
} 