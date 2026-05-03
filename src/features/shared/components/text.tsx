import styled from "styled-components";
import type { ThemeMode } from "../models";

type TextProps = {
  children: React.ReactNode;
  variant?: "body" | "small" | "caption" | "title";
  align?: "left" | "center" | "right";
  theme?: ThemeMode;
};

export function Text({
  children,
  variant = "body",
  align = "left",
  theme,
}: TextProps) {
  return (
    <StyledText $variant={variant} $align={align} $theme={theme}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.p<{
  $variant: TextProps["variant"];
  $align: TextProps["align"];
  $theme?: ThemeMode;
}>`
  margin: 0;
  text-align: ${({ $align }) => $align};

  color: ${({ $theme }) =>
    $theme === "DARK" ? "#ddd" : "#444"};

  ${({ $variant }) => {
    switch ($variant) {
      case "title":
        return `
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
        `;
      case "body":
        return `
          font-size: 14px;
          line-height: 1.6;
        `;
      case "small":
        return `
          font-size: 12px;
          line-height: 1.4;
        `;
      case "caption":
        return `
          font-size: 11px;
          color: #888;
        `;
    }
  }}
`;