import styled from 'styled-components';
import { useNavigate, useLocation  } from "react-router-dom";

type LogoSize = "SMALL" | "MEDIUM" | "LARGE"

interface LogoProps {
    size: LogoSize,
    asset: string
}

const sizeMap = {
    SMALL: 40,
    MEDIUM: 60,
    LARGE: 100,
}

export function Logo({size = 'MEDIUM', asset }: LogoProps) {
    const logoSize = sizeMap[size];

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname !== "/") {
            navigate("/");
        }
    };

    return (
        <Wrapper>
            <img
                src={asset}
                alt="Logo"
                width={logoSize}
                height={logoSize}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex: 0 0 auto;
`