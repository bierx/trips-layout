import React from "react";
import { IStar } from "./star.types";
import { StarSvg } from "./assets/star.svg";

export const Star: React.FC<IStar> = ({ rating, value }) => {
    const isFill = rating >= value;
    const rest = !isFill && value - rating;

    if (rest && rest < 1) {
        console.log("result", rest);
        return <StarSvg fillTo={rest} />;
    }

    return <StarSvg isFill={isFill} />;
};
