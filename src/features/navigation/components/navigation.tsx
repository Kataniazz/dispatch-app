import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../domain_logic'
import logoAsset from '../../../assets/logo.png'
import { Logo } from '../../shared/components/logo';
import type { ThemeMode } from '../../shared/models';

interface NavigationProps {
    theme?: ThemeMode
}

export const lightTheme = {
    background: "#ffffff",
    text: "#111111",
    muted: "#777777",
    hover: "#222222",
    border: "#e0e0e0",
};

export const darkTheme = {
    background: "#0f0f0f",
    text: "#ffffff",
    muted: "#aaaaaa",
    hover: "#ffffff",
    border: "#2a2a2a",
};

export function Navigation({ theme: fontColour = "LIGHT" }: NavigationProps) {
  return (
    <NavBar>
        <LogoWrapper>
            <Logo size="LARGE" asset={logoAsset} />
        </LogoWrapper>

        {/* <Nav theme={fontColour}>
            {NAV_ITEMS.map((item) => (
                <StyledLink key={item.path} to={item.path}>
                    {item.label}
                </StyledLink>
            ))}
        </Nav> */}
    </NavBar>
  );
}

const NavBar = styled.header`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 0 20px;
`;

const LogoWrapper = styled.div`
    justify-self: start;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 16px 0;
    background: ${({ theme }) => theme.background};
`

export const NavItem = styled(NavLink)`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;

    color: ${({ theme }) => theme.muted};

    position: relative;
    padding: 6px 4px;

    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.hover};
    }

    &.active {
        color: ${({ theme }) => theme.text};
        font-weight: 500;
    }

    &.active::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;

        height: 2px;
        background-color: ${({ theme }) => theme.text};
        border-radius: 2px;
    }
`;