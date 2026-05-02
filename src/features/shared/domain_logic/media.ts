import styled from "styled-components";
import { theme } from "./theme";

export const media = {
    mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
    tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
    laptop: `@media (max-width: ${theme.breakpoints.laptop})`,
};

export const HideOnMobile = styled.div`
    ${media.tablet} {
        display: none;
    }
`;

export const ShowOnMobile = styled.div`
    display: none;

    ${media.tablet} {
        display: block;
    }
`;