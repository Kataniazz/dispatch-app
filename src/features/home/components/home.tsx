import styled from 'styled-components';
import bgImage from '../../../assets/truck-home.jpg'
import { Cards } from '../../cards/components/cards';
import { Contact } from '../../contact/components/contact';
import { Template } from '../../shared/components/form_template';
import { Text } from '../../shared/components/text';
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation()

    return (
        <Template
            headerBackgroundImage={bgImage}
            title={t('title')}
            subtitle={t('subtitle')}
        >
            <HomeContainer>
                <Section
                    title="About Us"
                    subtitle="
                        Tegar Logistics is a bilingual freight dispatch company 
                        serving owner operators and brokers across the United States.
                    "
                    >
                    <Text variant="body" align="center" theme="LIGHT">
                        Tegar Logistics is a bilingual freight dispatch company 
                        serving owner operators and brokers across the United States.
                    </Text>

                    <Text variant="body" align="center" theme="LIGHT">
                        We handle load finding, rate negotiation, broker communication, and documentation 
                        — giving drivers the back office support they need to stay on the road and run a profitable 
                        operation. Our team works across time zones and communicates in both English and Spanish, 
                        ensuring nothing gets missed and no one is left waiting.We built Tegar on straightforward 
                        principles — transparency, reliability, and results. No long term contracts, no hidden fees, 
                        and no excuses.
                    </Text>
                </Section>

                <Section
                    title="Services"
                    subtitle="We don't just book loads — we build a structured dispatch process designed to keep your operation stable and predictable."
                >
                    <Cards />
                </Section>

                <Section
                    title="Our Terms"
                    subtitle=""
                >
                    <Text variant="body" align="center" theme="LIGHT">
                       	•	8% of gross load revenue
                        •	No long term contracts
                        •	No setup fees
                        •	Cancel anytime
                    </Text>
                </Section>

                <Section
                    title="Ready to Start?"
                    subtitle="Contact us and receive professional advice for your transportation business. Personalized service."
                >
                    <Contact />
                </Section>
            </HomeContainer>
        </Template>
    )
}

const HomeContainer = styled.div`
    padding: 0 16px 90px;
`