import styled from "styled-components";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    theme: any;
}

function Card({ icon, title, description, theme }: CardProps) {
    return (
        <CardContainer $theme={theme}>
            <IconWrapper>{icon}</IconWrapper>
                <Title>{title}</Title>
            <Description>{description}</Description>
        </CardContainer>
    );
}

/**
 * Make the below responsive
 */
export function Cards({ theme }: { theme: string}) {
    return (
        <Grid>
            <Card
                icon={<FaCode />}
                title="Clean Code"
                description="Well-structured and maintainable code practices."
                theme={theme}
            />

            <Card
                icon={<FaMobileAlt />}
                title="Responsive Design"
                description="Looks great on all screen sizes."
                theme={theme}
            />

            <Card
                icon={<FaRocket />}
                title="Fast Performance"
                description="Optimized for speed and efficiency."
                theme={theme}
            />
        </Grid>
    )
}

const CardContainer = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.background};
  border: 1px solid ${({ $theme }) => $theme.border};
  border-radius: 12px;

  padding: 24px;
  transition: all 0.25s ease;

  cursor: default;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $theme }) => $theme.text};
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
`;

const IconWrapper = styled.div`
  font-size: 28px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #777;
  line-height: 1.5;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 8px;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
`;