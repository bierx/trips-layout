import styled from "styled-components";
import {
    Box,
    Heading as ChakraHeading,
    Text as ChakraText,
} from "@chakra-ui/react";

import { RatingWrapper } from "../rating/rating.styles";
import { Emission } from "../emission/emission.styles";

export const Card = styled(Box)`
    --color: #fff;
    --radius: 10px;
    border-radius: var(--radius);
    border: 10px solid var(--color);
    background-size: cover;
    text-align: center;
    max-width: 400px;
    padding: 0 40px;
    padding-top: 75px;
    box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 0.22);

    ${RatingWrapper} {
        margin-top: 25px;
    }

    ${Emission} {
        margin: 15px 0;
    }
`;

export const Heading = styled(ChakraHeading)`
    color: var(--color);
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
`;

export const Text = styled(ChakraText)`
    color: var(--color);
    font-size: 12px;
    font-weight: 600;
`;
