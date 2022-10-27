import React from "react";
import { ITrips } from "./trips.types";
import { Card } from "@components/card";

import * as S from "./trip.styles";

export const Trips: React.FC<ITrips> = ({ trips }) => {
    if (!trips) {
        return null;
    }

    return (
        <S.Trips>
            {trips.map((trip: Trips) => (
                <Card key={trip.id} {...trip} />
            ))}
        </S.Trips>
    );
};
