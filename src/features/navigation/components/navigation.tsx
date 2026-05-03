import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../domain_logic'
import logoAsset from '../../../assets/logo.png'
import { Logo } from '../../shared/components/logo';
import type { ThemeMode } from '../../shared/models';
import BurgerMenu from './burger';
import { HideOnMobile, media, ShowOnMobile } from '../../shared/domain_logic/media';

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

export function Navigation({ theme: mode = "LIGHT" }: NavigationProps) {
  const currentTheme = mode === "DARK" ? darkTheme : lightTheme;

  return (
    <NavBar>
        <ShowOnMobile>
            <BurgerMenu items={NAV_ITEMS} />
        </ShowOnMobile>

        <HideOnMobile>
            <DesktopViewContainer>
                <LogoWrapper>
                    <Logo size="MEDIUM" asset={logoAsset} />
                </LogoWrapper>

                <Nav>
                    {NAV_ITEMS.map((item) => (
                        <NavItem key={item.path} to={item.path} $theme={currentTheme}>
                            {item.label}
                        </NavItem>
                    ))}
                </Nav>

                <div style={{ flex: 1 }}/>
            </DesktopViewContainer>
        </HideOnMobile>
    </NavBar>
  );
}



const DesktopViewContainer = styled.div`
    display: flex;
    align-items: center;
`

const NavBar = styled.header``;

const LogoWrapper = styled.div`
    flex: 1;
    text-align: left;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 16px 0;
    flex: 1;

    ${media.tablet} {
        display: none;
    }
`;

export const NavItem = styled(NavLink)<{ $theme: typeof lightTheme }>`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;

    color: ${({ $theme }) => $theme.muted};

    position: relative;
    padding: 6px 4px;

    transition: color 0.2s ease;

    &:hover {
        color: ${({ $theme }) => $theme.hover};
    }

    &.active {
        color: ${({ $theme }) => $theme.text};
        font-weight: 500;
    }

    &.active::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;

        height: 2px;
        background-color: ${({ $theme }) => $theme.text};
        border-radius: 2px;
    }
`;