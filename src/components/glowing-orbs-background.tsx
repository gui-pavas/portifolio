import { useEffect, useState } from "react";

type Blob = {
    id: number;
    width: number;
    height: number;
    color: string;
    opacity: number;
    x: number;
    y: number;
};

export default function GlowBlobBackground() {
    const [blobs, setBlobs] = useState<Blob[]>([]);

    const colors = [
        "bg-cyan-500",
        "bg-cyan-400",
        "bg-cyan-600",
        "bg-sky-400",
        "bg-blue-500",
    ];

    const createBlob = (id: number): Blob => {
        const size = Math.random() * 500 + 400;

        return {
            id,
            width: size,
            height: size,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.25 + 0.12,
            x: Math.random() * window.innerWidth - 200,
            y: Math.random() * window.innerHeight - 200,
        };
    };

    useEffect(() => {
        const initial = Array.from({ length: 6 }, (_, i) => createBlob(i));
        setBlobs(initial);

        const interval = setInterval(() => {
            setBlobs((current) =>
                current.map((blob) => ({
                    ...blob,
                    x: Math.random() * window.innerWidth - 200,
                    y: Math.random() * window.innerHeight - 200,
                    opacity: Math.random() * 0.25 + 0.12,
                }))
            );
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-mauve-950">
            {blobs.map((blob) => (
                <div
                    key={blob.id}
                    className={`absolute rounded-full blur-[160px] mix-blend-screen ${blob.color}`}
                    style={{
                        width: blob.width,
                        height: blob.height,
                        transform: `translate(${blob.x}px, ${blob.y}px)`,
                        opacity: blob.opacity,
                        transition:
                            "transform 8s ease-in-out, opacity 8s ease-in-out",
                    }}
                />
            ))}
        </div>
    );
}