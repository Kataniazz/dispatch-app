import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logoAsset from '../../../assets/logo.png';
import { Logo } from "../../shared/components/logo";
import { SocialIcons } from "../../socials/components/socials";
import { darkTheme, lightTheme } from "../../navigation/components/navigation";
import { NAV_ITEMS } from "../../navigation/domain_logic";

export function Footer({ theme: mode = "LIGHT" }) {
    const theme = mode === "DARK" ? darkTheme : lightTheme;

    return (
         <FooterContainer $theme={theme}>
            <Content>
                <Top>
                    <Description>
                        Get connected with us on socials!
                    </Description>
                    <SocialIcons />
                </Top>

                <Center>
                    <FooterLink 
                        href="/legal.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </FooterLink>
                </Center>
            </Content>

            <Bottom $theme={theme}>
                © {new Date().getFullYear()} Tegar Logistics. All rights reserved.
            </Bottom>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer<{ $theme: any }>`
    background: ${({ $theme }) => $theme.background};
    border-top: 1px solid ${({ $theme }) => $theme.border};
    margin-top: 16px;
`;

const Content = styled.div``;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 40px 8px;
    background-color: lightpink
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 8px;
`;

const FooterLink = styled.a`
    color: #cbd5f5;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    text-decoration: underline;

    &:hover {
        opacity: 1;
    }
`;

const Description = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: #777;
  max-width: 240px;
`;

const Bottom = styled.div<{ $theme: any }>`
    text-align: center;
    padding: 16px;
    font-size: 12px;
    color: ${({ $theme }) => $theme.muted};
    border-top: 1px solid ${({ $theme }) => $theme.border};
`;