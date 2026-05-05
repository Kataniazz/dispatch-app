import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../domain_logic'
import logoAsset from '../../../assets/logo.png'
import { Logo } from '../../shared/components/logo';
import BurgerMenu from './burger';
import { HideOnMobile, media, ShowOnMobile } from '../../shared/domain_logic/media';

export function Navigation() {

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
                        <NavItem key={item.path} to={item.path}>
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

export const NavItem = styled(NavLink)`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;

    color: "#aaaaaa";

    position: relative;
    padding: 6px 4px;

    transition: color 0.2s ease;

    &:hover {
        color: "#ffffff";
    }

    &.active {
        color: "#ffffff";
        font-weight: 500;
    }

    &.active::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;

        height: 2px;
        background-color: "#ffffff";
        border-radius: 2px;
    }
`;