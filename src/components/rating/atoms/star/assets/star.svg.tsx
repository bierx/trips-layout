import React, { useMemo } from "react";

interface IStarSvg {
    isFill?: boolean;
    fillTo?: number;
    id: number;
}

export const StarSvg: React.FC<IStarSvg> = ({ isFill, fillTo, id }) => {
    const gradientId = `gradient-${id}`;
    const svgFill = useMemo(() => {
        if (isFill) {
            return "#F8D64E";
        }

        if (fillTo) {
            return `url(#${gradientId})`;
        }

        return "#1e253b";
    }, [isFill, fillTo]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
        >
            {fillTo && (
                <defs>
                    <linearGradient id={gradientId}>
                        <stop stopColor="#F8D64E" stopOpacity="1" offset="0%" />
                        <stop
                            stopColor="#F8D64E"
                            stopOpacity="1"
                            offset={`${(1 - fillTo) * 100}%`}
                        />
                        <stop
                            stopColor="#1E253b"
                            stopOpacity="1"
                            offset={`${fillTo * 100}%`}
                        />
                        <stop
                            stopColor="#1E253b"
                            stopOpacity="1"
                            offset="100%"
                        />
                    </linearGradient>
                </defs>
            )}
            <g id="surface1">
                <path
                    fill={svgFill}
                    d="M 4 19.5 L 10.082031 0.667969 L 16.167969 19.5 L 0.167969 7.832031 L 20 7.832031 Z M 4 19.5 "
                />
            </g>
        </svg>
    );
};
