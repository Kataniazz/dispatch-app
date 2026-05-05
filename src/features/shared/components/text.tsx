import styled from "styled-components";

type TextProps = {
    children: React.ReactNode;
    variant?: "body" | "small" | "caption" | "title" | "subtitle";
    align?: "left" | "center" | "right";
    theme?: string;
};

export function Text({
    children,
    variant = "body",
    align = "left",
    theme = "DARK"
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
    $theme: TextProps["theme"]
}>`
    margin: 0;
    text-align: ${({ $align }) => $align};

    color: "#ddd";

    padding: 0 0 8px;

    color: ${({ $theme }) => ($theme === "LIGHT" ? "#ddd" : "black")};

    ${({ $variant }) => {
        switch ($variant) {
        case "title":
            return `
                font-size: 36px;
                font-weight: 600;
                line-height: 1.2;
                letter-spacing: -0.5px;
            `;
        case "subtitle":
            return `
                font-size: 18px;
                color: #8d8d8d;
                max-width: 600px;
                margin: 0 auto;
            `;
        case "body":
            return `
                font-size: 16px;
                line-height: 1.6;
            `;
        case "small":
            return `
                font-size: 12px;
                line-height: 1.4;
                color: #cecece;
            `;
        case "caption":
            return `
                font-size: 11px;
                color: #cecece;
            `;
        }
    }}
`;