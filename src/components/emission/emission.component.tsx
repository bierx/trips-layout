import React from "react";
import { Flex } from "@chakra-ui/react";
import { IEmission } from "./emission.types";
import useTranslation from "next-translate/useTranslation";

import * as S from "./emission.styles";

export const Emission: React.FC<IEmission> = ({ emission }) => {
    const { t } = useTranslation("common");
    return (
        <S.Emission>
            <Flex>
                {t("emission")}
                <S.EmissionDesc data-test-id="emission-description">
                    {emission}
                </S.EmissionDesc>
            </Flex>
        </S.Emission>
    );
};
