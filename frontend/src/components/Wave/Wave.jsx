import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BlueWave = () => {
  const pathsRef = useRef([]);

  useEffect(() => {
    pathsRef.current.forEach((path, index) => {
      gsap.to(path, {
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        attr: {
          d: [
            "M0,40 Q50,80 100,40 T200,40 T300,40 T400,40",
            "M0,40 Q50,20 100,40 T200,60 T300,40 T400,20",
          ],
        },
      });
    });
  }, []);

  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
      <svg width="100%" height="60" viewBox="0 0 400 60">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f2eff" />
            <stop offset="100%" stopColor="#745eff" />
          </linearGradient>
        </defs>

        {[...Array(3)].map((_, i) => (
          <path
            key={i}
            ref={(el) => (pathsRef.current[i] = el)}
            d="M0,40 Q50,60 100,40 T200,40 T300,40 T400,40"
            stroke="url(#waveGradient)"
            strokeWidth={2 + i}
            fill="transparent"
            opacity={0.6 - i * 0.2}
          />
        ))}
      </svg>
    </div>
  );
};

export default BlueWave;
