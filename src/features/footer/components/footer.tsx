import styled from "styled-components";
import { SocialIcons } from "../../socials/components/socials";
import { Text } from "../../shared/components/text";
export function Footer() {

    return (
         <FooterContainer>
            <Content>
                <SocialIcons />
                <FooterLink 
                    href="/legal.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Privacy Policy
                </FooterLink>
            </Content>
            <Bottom>
                <Text variant="small" align="center">
                    © {new Date().getFullYear()} Tegar Logistics. All rights reserved.
                </Text>
            </Bottom>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background: "#0f0f0f";
    border-top: 1px solid "#2a2a2a";
    margin-top: 16px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 40px 8px;
    background-color: lightpink;
`;

const FooterLink = styled.a`
    color: #777;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    text-decoration: underline;

    &:hover {
        opacity: 1;
        color: #111;
    }
`;

const Bottom = styled.div`
    padding: 12px;
    border-top: 1px solid #777;
    background-color: lightpink;
`;