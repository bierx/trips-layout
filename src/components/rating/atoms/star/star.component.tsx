import React from "react";
import { IStar } from "./star.types";
import { StarSvg } from "./assets/star.svg";

export const Star: React.FC<IStar> = ({ rating, value, id }) => {
    const isFill = rating >= value;
    const rest = !isFill && value - rating;

    if (rest && rest < 1) {
        return <StarSvg id={id} fillTo={rest} />;
    }

    return <StarSvg id={id} isFill={isFill} />;
};
