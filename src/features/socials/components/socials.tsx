import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { styled } from "styled-components";

export function SocialIcons() {
  return (
    <Container>
        <IconLink href="https://www.facebook.com/tegarlogistics" target="_blank">
            <FaFacebook />
        </IconLink>

        <IconLink href="https://www.instagram.com/tegar.logistics" target="_blank">
            <FaInstagram />
        </IconLink>

        <IconLink href="https://www.tiktok.com/@tegarlogistics" target="_blank">
            <FaTiktok />
        </IconLink>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    gap: 16px;
    align-self: center;
`;

const IconLink = styled.a`
    color: #cecece;
    font-size: 20px;

    transition: all 0.2s ease;

    &:hover {
        color: #ffffff;
        transform: translateY(-2px);
    }
`;