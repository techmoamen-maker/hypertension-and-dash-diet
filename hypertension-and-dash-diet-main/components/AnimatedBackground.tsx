
import React from 'react';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-[#030712]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:2rem_2rem] opacity-50"></div>
            <div 
                className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(255,255,255,0))] opacity-40"
                style={{ animation: 'pulse 10s infinite ease-in-out' }}
            ></div>
             <style>
                {`
                    @keyframes pulse {
                        0% { transform: scale(1); opacity: 0.3; }
                        50% { transform: scale(1.2); opacity: 0.5; }
                        100% { transform: scale(1); opacity: 0.3; }
                    }
                `}
            </style>
        </div>
    );
};

export default AnimatedBackground;
