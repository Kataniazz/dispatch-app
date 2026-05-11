import styled from 'styled-components';
import bgImage from '../../../assets/truck-home.jpg'
import { Cards } from '../../cards/components/cards';
import { Contact } from '../../contact/components/contact';
import { Template } from '../../shared/components/form_template';
import { Text } from '../../shared/components/text';
import { useTranslation } from 'react-i18next';

interface SectionProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    align?: "left" | "center";
}

export function Section({
    title,
    subtitle,
    children,
    align = "center",
}: SectionProps) {
    return (
        <Wrapper $align={align}>
            <Header>
                <Text variant='title' align='center' theme='LIGHT'>{title}</Text>
                {subtitle && <Text variant='subtitle' align='center' theme='LIGHT'>{subtitle}</Text>}
            </Header>

            <Content>{children}</Content>
        </Wrapper>
    );
}

const Wrapper = styled.section<{ $align: "left" | "center" }>`
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 16px;

    text-align: ${({ $align }) => $align};
`;

const Header = styled.div`
     margin-bottom: 32px;
`;

const Content = styled.div`
    font-size: 16px;
    line-height: 1.7;
    color: #444;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export function Home() {
    const { t } = useTranslation();

    return (
        <Template
            headerBackgroundImage={bgImage}
            title={t('logisticsAndFreight')}
            subtitle={t('weMoveYourCargo')}
        >
            <HomeContainer>
                <Section title={t('aboutUsTitle')} subtitle={t('aboutUsSubtitle')}>
                    <Text variant="body" align="center" theme="LIGHT">{t('bilingualFreight')}</Text>
                    <Text variant="body" align="center" theme="LIGHT">{t('weHandle')} </Text>
                </Section>

                <Section title={t('servicesTitle')} subtitle={t('servicesSubtitle')}>
                    <Cards />
                </Section>

                <Section title={t('ourTermsTitle')}>
                    {/* <Text variant="body" align="center" theme="LIGHT">{text.ourTermsBulletPoints}</Text> */}
                    <Text variant="bulletList" align="center" theme="LIGHT">
                        {t('ourTermsBulletPoints', {
                            returnObjects: true,
                        }) as string[]}
                    </Text>
                </Section>

                <Section title={t('readyToStartTitle')} subtitle={t('readyToStartSubtitle')}>
                    <Contact />
                </Section>
            </HomeContainer>
        </Template>
    )
}

const HomeContainer = styled.div`
    padding: 0 16px 90px;
`