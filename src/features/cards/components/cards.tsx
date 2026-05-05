import styled from "styled-components";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { media } from "../../shared/domain_logic/media";

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
    return (
        <Grid>
            <Card
                icon={<FaCode />}
                title="Freight Dispatch"
                description="
                    We source and secure loads that match your equipment, 
                    lane, and schedule. Using multiple load boards and established 
                    broker relationships, we keep your truck moving and your downtime minimal.
                "
            />

            <Card
                icon={<FaMobileAlt />}
                title="Rate Negotiation"
                description="
                    Brokers post low — we push back. Every load we book is negotiated 
                    to get you the best available rate for your lane, not just the first offer on the board.
                "
            />

            <Card
                icon={<FaRocket />}
                title="Broker Communication"
                description="
                    We handle all broker contact on your behalf — load inquiries, rate confirmations, 
                    check calls, and delivery updates. You drive, we talk.
                "
            />

            <Card
                icon={<FaRocket />}
                title="Documentation & Paperwork"
                description="
                    Rate confirmations, bills of lading, proof of delivery — organised, filed, 
                    and handled. No chasing paperwork at the end of a long haul.
                "
            />

            <Card
                icon={<FaRocket />}
                title="Carrier Onboarding"
                description="
                    Getting started with Tegar is straightforward. We walk you through the setup 
                    process, handle the paperwork, and have you running loads quickly.
                "
            />

            <Card
                icon={<FaRocket />}
                title="Bilingual Support"
                description="
                    Our team operates in English and Spanish. Every service we offer is available 
                    in both languages, with no gaps in communication regardless of which you prefer.
                "
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