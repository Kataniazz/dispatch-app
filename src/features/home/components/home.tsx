// import styled from 'styled-components';
import bgImage from '../../../assets/truck-home.jpg'
import { Cards } from '../../cards/components/cards';
import { Template } from '../../shared/components/form_template';
import { Text } from '../../shared/components/text';



export function Home() {
    return (
        <Template
            headerBackgroundImage={bgImage}
            title="Logistics & Freight"
            subtitle="We move your cargo with precision"
            theme='DARK'
        >
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


            <Text variant="title" align="center">
                We don't just dispatch - we optimize your weekly revenue.
            </Text>
            
            <Cards theme='LIGHT' />
        </Template>
    )
}