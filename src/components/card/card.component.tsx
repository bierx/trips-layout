import React from "react";
import { ICard } from "./card.types";
import { Box } from "@chakra-ui/react";
import { Rating } from "@components/rating";
import { Emission } from "@components/emission";
import Image from "next/image";

import * as S from "./card.styles";

export const Card: React.FC<ICard> = ({
    title,
    image,
    rating,
    emission,
    description,
}) => {
    return (
        <S.Card>
            <Image src={image} layout="fill" objectFit="cover" />
            <S.ContentWrapper>
                <S.Heading data-test-id="heading" as="h4">
                    {title}
                </S.Heading>
                <S.Text data-test-id="description">{description}</S.Text>
                <Emission emission={emission} />
            </S.ContentWrapper>
            <Rating rating={rating} />
        </S.Card>
    );
};
