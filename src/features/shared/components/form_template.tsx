import styled from 'styled-components';
import { Navigation } from '../../navigation/components/navigation';
import { Footer } from '../../footer/components/footer';
import type { ThemeMode } from '../models';

type TemplateProps = {
    title?: string;
    subtitle?: string;
    paragraphs?: string[];
    showDivider?: boolean;
    children?: React.ReactNode;
    headerBackgroundImage?: string;
    theme?: ThemeMode
};

export function Template({
    title,
    subtitle,
    paragraphs = [],
    showDivider = false,
    children,
    headerBackgroundImage,
    theme
}: TemplateProps) {
    const hasHero = !!headerBackgroundImage;

    return (
        <Section>
            {hasHero && (
                <BackgroundImage
                    style={{ backgroundImage: `url(${headerBackgroundImage})` }}
                />
            )}

            <NavWrapper $inHero={hasHero}>
                <Navigation  theme={theme} />
                <Divider />
            </NavWrapper>


            {/* HERO MODE */}
            {hasHero && (
                <HeroContent>
                    {title && <Title $theme={theme} $inHero={hasHero}>{title}</Title>}
                    {subtitle && <Subtitle $theme={theme} $inHero={hasHero}>{subtitle}</Subtitle>}
                </HeroContent>
            )}

            {/* NORMAL PAGE HEADER (no hero image) */}
            {!hasHero && (title || subtitle) && (
                <StandardHeader>
                    {title && <Title $theme={theme} $inHero={hasHero}>{title}</Title>}
                    {subtitle && <Subtitle $theme={theme} $inHero={hasHero}>{subtitle}</Subtitle>}
                </StandardHeader>
            )}

            <Content $hasHero={hasHero}>
                {children ? (
                    children
                ) : (
                    paragraphs.map((text, idx) => (
                        <Paragraph key={idx}>{text}</Paragraph>
                    ))
                )}

                {showDivider && <Divider />}
                
                <Footer />
            </Content>
        </Section>
  );
}

const Section = styled.section`
    position: relative;
    width: 100%;
    background-color: #ffffff;
`;

const Content = styled.div<{ $hasHero: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: ${({ $hasHero }) => ($hasHero ? "420px 0 0" : "0")};
`;

const HeroContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    height: 420px;
    width: 100%;

    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 24px;

    color: white;
`;

const StandardHeader = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const NavWrapper = styled.div<{ $inHero: boolean }>`
    position: ${({ $inHero }) => ($inHero ? "absolute" : "relative")};
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 700px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    z-index: 0;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
    }
`;

const Divider = styled.hr`
    border: none;
    height: 2px;  
    background-color: #e0e0e0;
    width: 97%;
`;

const Title = styled.h2<{ $theme?: ThemeMode, $inHero: boolean }>`
    text-align: ${({ $inHero }) => ($inHero ? "left" : "center")};

    font-size: 40px;
    font-weight: 700;
    margin: 0;

    color: ${({ $theme }) =>
        $theme === "DARK" ? "#ffffff" : "#111111"};
`;

const Subtitle = styled.h4<{ $theme?: ThemeMode, $inHero: boolean }>`
    text-align: ${({ $inHero }) => ($inHero ? "left" : "center")};

    font-size: 24px;
    font-weight: 500;
    margin: 0;

    color: ${({ $theme }) =>
        $theme === "DARK" ? "#cccccc" : "#666666"};
`;

const Paragraph = styled.p`
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
    color: #444;
`;