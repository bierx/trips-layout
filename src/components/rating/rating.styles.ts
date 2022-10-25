import styled from "styled-components";
import { Flex, Box } from "@chakra-ui/react";

export const Rating = styled(Box)`
    margin-left: auto;
`;

export const RatingWrapper = styled(Flex)`
    --radius: 10px;
    background: #fff;
    color: #000;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    padding: 10px 20px;
    padding-right: 30px;
    width: 100%;
    font-weight: 600;
    font-size: 14px;
`;
