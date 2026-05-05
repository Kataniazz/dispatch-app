import styled from "styled-components";
import { SocialIcons } from "../../socials/components/socials";
import { Text } from "../../shared/components/text";
export function Footer() {

    return (
         <FooterContainer>
            <Content>
                <SocialIcons />
                <div>
                    <FooterLink 
                        href="/legal.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </FooterLink>
                    <FooterLink 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Terms & Conditions
                    </FooterLink>
                </div>
            </Content>
            <Bottom>
                <Text variant="small" align="center" theme="LIGHT">
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
    border-top: 1px solid #555664b2;
    background-color: #040020de;
`;

const FooterLink = styled.a`
    color: #cecece;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    text-decoration: underline;
    padding-left: 8px;

    &:hover {
        opacity: 1;
        color: #ffffff;
    }
`;

const Bottom = styled.div`
    padding: 12px;
    // border-top: 1px solid #777;
    background-color: #040020de;
`;