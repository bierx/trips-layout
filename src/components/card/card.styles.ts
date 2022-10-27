import styled from "styled-components";
import {
    Box,
    Heading as ChakraHeading,
    Text as ChakraText,
} from "@chakra-ui/react";

import { RatingWrapper } from "../rating/rating.styles";
import { Emission } from "../emission/emission.styles";
import { media } from "@lib/media";

export const ContentWrapper = styled(Box)`
    z-index: 1;
    position: relative;
`;

export const Card = styled(Box)`
    --color: #fff;
    --radius: 10px;
    border-radius: var(--radius);
    border: 10px solid var(--color);
    background-size: cover;
    text-align: center;
    width: 100%;
    padding: 75px 20px 0;
    box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 0.22);
    position: relative;

    ${RatingWrapper} {
        z-index: 1;
        position: relative;
    }

    ${media.xs} {
        width: 400px;
        padding: 75px 40px 0;
    }

    ${RatingWrapper} {
        margin-top: 25px;
        z-index: 1;
        position: relative;
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
