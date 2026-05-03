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
            <NavWrapper><Navigation theme={theme} /></NavWrapper>

            {hasHero && (
                <Hero $bg={headerBackgroundImage}>
                    {title && <Title $theme={theme} $inHero>{title}</Title>}
                    {subtitle && <Subtitle $theme={theme} $inHero>{subtitle}</Subtitle>}
                </Hero>
            )}

            {!hasHero && (title || subtitle) && (
                <StandardHeader>
                    {title && <Title $theme={theme}  $inHero>{title}</Title>}
                    {subtitle && <Subtitle $theme={theme}  $inHero>{subtitle}</Subtitle>}
                </StandardHeader>
            )}

            <Content>
                {children ? children : paragraphs.map((p, i) => (
                    <Paragraph key={i}>{p}</Paragraph>
                ))}

                {showDivider && <Divider />}

                <Footer />
            </Content>
        </Section>
    );
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 32px 0;
//   max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

const Hero = styled.div<{ $bg?: string }>`
  position: relative;
  width: 100%;
  height: 420px;

  display: flex;
  flex-direction: column;
  justify-content: center;

//   padding: 0 24px;

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
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
`;

const NavWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: lightgray;
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