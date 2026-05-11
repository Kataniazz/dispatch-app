import styled from "styled-components";
import { media } from "../../shared/domain_logic/media";
import { useTranslation } from "react-i18next";

import { FaTruck, FaBalanceScaleLeft   } from "react-icons/fa";
import { LuSpeech } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { FaTruckFront } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";


interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function Card({ icon, title, description }: CardProps) {
    return (
        <CardContainer>
            <IconWrapper>{icon}</IconWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </CardContainer>
    );
}

export function Cards() {
    const { t } = useTranslation();

    return (
        <Grid>
            <Card
                icon={<FaTruckFront />}
                title={t('freightDispatchTitle')}
                description={t('freightDispatchDescription')}
            />

            <Card
                icon={<FaBalanceScaleLeft  />}
                title={t('rateNegotiationTitle')}
                description={t('rateNegotiationDescription')}
            />

            <Card
                icon={<LuSpeech />}
                title={t('brokerCommunicationTitle')}
                description={t('brokerCommunicationDescription')}
            />

            <Card
                icon={<IoDocumentText />}
                title={t('documentationTitle')}
                description={t('documentationDescription')}
            />

            <Card
                icon={<FaTruck />}
                title={t('carrierOnboardingTitle')}
                description={t('carrierOnboardingDescription')}
            />

            <Card
                icon={<MdOutlineSupportAgent />}
                title={t('bilingualSupportTitle')}
                description={t('bilingualSupportDescription')}
            />
        </Grid>
    );
}

const CardContainer = styled.div`
    background: #555664;
    border: 1px solid #e5e5e5;
    border-radius: 12px;

    padding: 24px;
    transition: all 0.25s ease;
    cursor: default;

    &:hover {
        transform: translateY(-4px);
        border-color: #5a0000;
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }

    ${media.tablet} {
        min-width: 260px;
        flex: 0 0 auto;
        scroll-snap-align: start;
    }
`;

const IconWrapper = styled.div`
    font-size: 28px;
    margin-bottom: 16px;
    color: #ffffff;
`;

const Title = styled.h3`
    font-size: 18px;
    margin-bottom: 8px;
    color: #ffffff;
`;

const Description = styled.p`
    font-size: 14px;
    color: #c7c7c7;
    line-height: 1.5;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 8px;

    ${media.tablet} {
        grid-template-columns: 1fr;
    }
`;