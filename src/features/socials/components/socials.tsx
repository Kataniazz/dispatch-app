import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { styled } from "styled-components";

export function SocialIcons() {
  return (
    <Container>
      <IconLink href="https://github.com/yourname" target="_blank">
        <FaGithub />
      </IconLink>

      <IconLink href="https://linkedin.com/in/yourname" target="_blank">
        <FaLinkedin />
      </IconLink>

      <IconLink href="https://twitter.com/yourname" target="_blank">
        <FaTwitter />
      </IconLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const IconLink = styled.a`
  color: #777;
  font-size: 20px;

  transition: all 0.2s ease;

  &:hover {
    color: #111;
    transform: translateY(-2px);
  }
`;