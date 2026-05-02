import { Link } from "react-router-dom";
import styled from "styled-components";
import logoAsset from '../../../assets/logo.png';
import { Logo } from "../../shared/components/logo";

export function Footer() {
    return (
        <Wrapper>
            <TopRow>
                <Logo size="MEDIUM" asset={logoAsset}/>
            </TopRow>

            <LinksRow>
                <FooterLink as={Link} to="/">Home</FooterLink>
                <FooterLink as={Link} to="/about">About</FooterLink>
                <FooterLink as={Link} to="/services">Services</FooterLink>
                <FooterLink as={Link} to="/contact">Contact</FooterLink>
                <FooterLink 
                   href="/legal.html" 
                   target="_blank" 
                   rel="noopener noreferrer"
                >
                        Legality
                    </FooterLink>
            </LinksRow>

            {/* Add socials here */}
            {/* <TextRow>
                <Column>
                    The information provided on this website is for general
                    informational purposes only and does not constitute
                    professional advice.
                </Column>

                <Column>
                    We are not liable for any losses or damages arising from
                    reliance on the information presented on this site.
                </Column>

                <Column>
                    External links are provided for convenience. We do not
                    control or endorse third-party content.
                </Column>
            </TextRow> */}

            <BottomBar>
                © {new Date().getFullYear()} MyApp. All rights reserved.
            </BottomBar>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    background: #0f172a;
    color: #e2e8f0;
    padding: 8px;
`;

const TopRow = styled.div`
    max-width: 1100px;
    margin: 0 auto 24px;
    display: flex;
    justify-content: center; /* change to space-between if you add more */
`;

// const Logo = styled.h2`
//     margin: 0;
//     font-size: 22px;
// `;

const LinksRow = styled.div`
    max-width: 1100px;
    margin: 0 auto 32px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
`;

const FooterLink = styled.a`
    color: #cbd5f5;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        text-decoration: underline;
    }
`;

const TextRow = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

const Column = styled.p`
    margin: 0;
    font-size: 13px;
    line-height: 1.6;
    opacity: 0.7;
`;

const BottomBar = styled.div`
    margin-top: 32px;
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,0.1);
    text-align: center;
    font-size: 12px;
    opacity: 0.6;
`;