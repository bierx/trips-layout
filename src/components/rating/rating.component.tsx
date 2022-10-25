import React, { useMemo } from "react";
import { Flex } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { IRating } from "./rating.types";
import { Star } from "./atoms/star/star.component";

import * as S from "./rating.styles";

export const Rating: React.FC<IRating> = ({ rating }) => {
    const { t } = useTranslation("common");
    const stars = useMemo(() => {
        return Array.from(Array(6).keys())
            .slice(1)
            .map((value) => <Star rating={rating} value={value} key={value} />);
    }, [rating]);

    return (
        <S.RatingWrapper>
            {t("rating")}
            <S.Rating>
                <Flex data-test-id="rating" gap={"5px"}>
                    {stars}
                    {rating}
                </Flex>
            </S.Rating>
        </S.RatingWrapper>
    );
};
