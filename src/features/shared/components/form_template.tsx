import styled from 'styled-components';
import logoAsset from '../../../assets/logo.png'
import { Footer } from '../../footer/components/footer';
import { Logo } from './logo';
import { LanguageSwitcher } from '../../../i18n/switch';

type TemplateProps = {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    headerBackgroundImage?: string;
};

export function Template({
    title,
    subtitle,
    children,
    headerBackgroundImage
}: TemplateProps) {
    const hasHero = !!headerBackgroundImage;

    return (
        <TemplateContainer>
            <HeaderContainer>
                <LogoContainer>
                    <Logo size="LARGE" asset={logoAsset} />
                </LogoContainer>
                <LanguageToggleContainer>
                    <LanguageSwitcher />
                </LanguageToggleContainer>
            </HeaderContainer>

            {hasHero && (
                <Hero $bg={headerBackgroundImage}>
                    {title && <Title $inHero>{title}</Title>}
                    {subtitle && <Subtitle $inHero>{subtitle}</Subtitle>}
                </Hero>
            )}

            {!hasHero && (title || subtitle) && (
                <StandardHeader>
                    {title && <Title $inHero>{title}</Title>}
                    {subtitle && <Subtitle $inHero>{subtitle}</Subtitle>}
                </StandardHeader>
            )}

            <Content> {children ? children : null}</Content>
            
            <Footer />
        </TemplateContainer>
    );
}

const TemplateContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: white;
`;

const HeaderContainer = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: lightpink;
`;

const LogoContainer = styled.div`
    flex: 1;
    text-align: left;
`;

const LanguageToggleContainer = styled.div`
    align-self: center;
    padding-right: 16px;
`;

const Hero = styled.div<{ $bg?: string }>`
    position: relative;
    width: 100%;
    height: 600px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: white;

    background-image: ${({ $bg }) => $bg ? `url(${$bg})` : "none"};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
    }

    > * {
        position: relative;
        z-index: 1;
    }
`;

const StandardHeader = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
`;

const Title = styled.h2<{ $inHero: boolean }>`
    text-align: ${({ $inHero }) => ($inHero ? "left" : "center")};
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    color: "#111111";
    padding-left: 16px;
`;

const Subtitle = styled.h4<{ $inHero: boolean }>`
    text-align: ${({ $inHero }) => ($inHero ? "left" : "center")};
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    color: "#666666";
    padding-left: 16px;
`;


const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px 0;
    margin: 0 auto;
    width: 100%;
`;