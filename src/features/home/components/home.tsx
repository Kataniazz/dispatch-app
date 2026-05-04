import styled from 'styled-components';
import bgImage from '../../../assets/truck-home.jpg'
import { Cards } from '../../cards/components/cards';
import { Contact } from '../../contact/components/contact';
import { Template } from '../../shared/components/form_template';
import { Text } from '../../shared/components/text';
import { useTranslation } from 'react-i18next'

export function Home() {
    const { t } = useTranslation()

    return (
        <Template
            headerBackgroundImage={bgImage}
            title={t('title')}
            subtitle={t('subtitle')}
        >
            <HomeContainer>
                <Text variant="title" align="center">About Us</Text>

                <Text variant="body" align="center">
                    Tegar Logistics is a bilingual freight dispatch company 
                    serving owner operators and brokers across the United States.
                </Text>

                <Text variant="body" align="center">
                    We handle load finding, rate negotiation, broker communication, and documentation 
                    — giving drivers the back office support they need to stay on the road and run a profitable 
                    operation. Our team works across time zones and communicates in both English and Spanish, 
                    ensuring nothing gets missed and no one is left waiting.We built Tegar on straightforward 
                    principles — transparency, reliability, and results. No long term contracts, no hidden fees, 
                    and no excuses.
                </Text>


                {/* <Text variant="title" align="center">
                    We don't just dispatch - we optimize your weekly revenue.
                </Text>

                <Text variant="title" align="center">
                    Freight Dispatch
                </Text>

                <Text variant="body" align="center">
                    We source and secure loads that match your equipment, lane, 
                    and schedule. Using multiple load boards and established broker 
                    relationships, we keep your truck moving and your downtime minimal.
                </Text> */}
                
                <Cards theme='LIGHT' />

                <Text variant="title" align="left">Contact Us</Text>
                <Contact />
            </HomeContainer>
        </Template>
    )
}

const HomeContainer = styled.div`
    padding: 0 16px 90px;
`