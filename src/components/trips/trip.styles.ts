import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { media } from "@lib/media";

export const Trips = styled(Flex)`
    padding: 25px 15px;
    background: #eee;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;

    ${media.xs} {
        padding: 25px 50px;
    }
`;
