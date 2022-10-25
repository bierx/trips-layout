import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const EmissionDesc = styled(Box)``;

export const Emission = styled(Box)`
    background: #1e253b;
    color: #fff;
    border-radius: 10px;
    padding: 15px;
    width: 100%;
    font-weight: 600;
    font-size: 14px;

    ${EmissionDesc} {
        margin-left: auto;
    }
`;
