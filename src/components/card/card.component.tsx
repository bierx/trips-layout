import React from "react";
import { ICard } from "./card.types";
import { Box } from "@chakra-ui/react";
import { Rating } from "@components/rating";
import { Emission } from "@components/emission";

import * as S from "./card.styles";

export const Card: React.FC<ICard> = ({
    title,
    image,
    rating,
    emission,
    description,
}) => {
    return (
        <S.Card backgroundImage={image}>
            <Box>
                <S.Heading data-test-id="heading" as="h4">
                    {title}
                </S.Heading>
                <S.Text data-test-id="description">{description}</S.Text>
                <Emission emission={emission} />
            </Box>
            <Rating rating={rating} />
        </S.Card>
    );
};
