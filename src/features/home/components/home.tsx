// import styled from 'styled-components';
import bgImage from '../../../assets/truck-home.jpg'
import { Template } from '../../shared/components/form_template';



export function Home() {
    return (
        <Template
            headerBackgroundImage={bgImage}
            title="Logistics & Freight"
            subtitle="We move your cargo with precision"
            theme='DARK'
        >
            <div style={{ height: '600px' }}></div>
        </Template>
    )
}