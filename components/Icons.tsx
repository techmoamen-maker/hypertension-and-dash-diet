
import React from 'react';

const iconProps = {
    className: "w-8 h-8 inline-block text-cyan-400 drop-shadow-[0_0_4px_currentColor]",
    strokeWidth: 1.5,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

export const BrainIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22h-3A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h3Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15A2.5 2.5 0 0 0 14.5 22h3A2.5 2.5 0 0 0 20 19.5v-15A2.5 2.5 0 0 0 17.5 2h-3Z" />
        <path d="M5 14h14" /><path d="M5 10h14" /><path d="M5 6h14" /><path d="M5 18h14" />
    </svg>
);

export const EyeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const HeartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

export const BloodIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
    </svg>
);

export const KidneyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 2a10 10 0 0 0-6.18 17.26a3.5 3.5 0 0 0 4.1 4.16a10 10 0 0 0 9.2-3.14a3.5 3.5 0 0 0-3.6-4.63a3.5 3.5 0 0 0-3.4 3.36" />
        <path d="M16 11.25a3.5 3.5 0 0 0-3.9-3.9" />
    </svg>
);
