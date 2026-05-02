import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  items: { label: string; path: string }[];
}

export default function BurgerMenu({ items }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerButton
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <Line open={open} />
                <Line open={open} />
                <Line open={open} />
            </BurgerButton>

            <Overlay open={open} onClick={() => setOpen(false)} />

            <Menu open={open}>
                {items.map((item) => (
                <StyledLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                >
                    {item.label}
                </StyledLink>
                ))}
            </Menu>
        </>
    );
}

const BurgerButton = styled.button`
    position: relative;
    z-index: 1001;
    width: 32px;
    height: 24px;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Line = styled.span<{ open: boolean }>`
    display: block;
    height: 3px;
    width: 100%;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s ease;

    &:nth-child(1) {
        transform: ${({ open }) =>
        open ? "rotate(45deg) translate(5px, 5px)" : "none"};
    }

    &:nth-child(2) {
        opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
        transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(6px, -6px)" : "none"};
    }
`;

const Menu = styled.nav<{ open: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 260px;
    background: #fff;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    transform: ${({ open }) =>
        open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
    z-index: 1000;
`;

const Overlay = styled.div<{ open: boolean }>`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "all" : "none")};
    transition: opacity 0.3s ease;
    z-index: 999;
`;

const StyledLink = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &.active {
        color: #4f46e5;
    }
`;