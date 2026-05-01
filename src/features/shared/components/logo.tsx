import styled from 'styled-components';

type LogoSize = "SMALL" | "MEDIUM" | "LARGE"

interface LogoProps {
    size: LogoSize,
    asset: string
}

const sizeMap = {
    SMALL: 20,
    MEDIUM: 60,
    LARGE: 100,
}

export function Logo({size = 'MEDIUM', asset }: LogoProps) {
    const logoSize = sizeMap[size];

    return (
        <Wrapper>
             <img
                src={asset}
                alt="Logo"
                width={logoSize}
                height={logoSize}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex: 0 0 auto;
`