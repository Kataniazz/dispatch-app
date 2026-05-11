import styled from "styled-components";

type TextProps = {
    children: React.ReactNode;
    variant?: "body" | "small" | "caption" | "title" | "subtitle" | "bulletList";
    align?: "left" | "center" | "right";
    theme?: string;
};

export function Text({
    children,
    variant = "body",
    align = "left",
    theme = "DARK"
}: TextProps) {
    // Handle bullet points if children is a string array or string with \n
    if (variant === "bulletList") {
        const points = Array.isArray(children) 
            ? children 
            : typeof children === 'string' 
                ? children.split('\n').filter(Boolean)
                : [];

        return (
            <StyledList $align={align} $theme={theme}>
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </StyledList>
        );
    }

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
            default:
                return ``;
        }
    }}
`;

const StyledList = styled.ul<{
    $align: TextProps["align"];
    $theme: TextProps["theme"];
}>`
    margin: 0;
    padding-left: 20px;
    text-align: ${({ $align }) => $align};
    color: ${({ $theme }) => ($theme === "LIGHT" ? "#ddd" : "black")};
    font-size: 16px;
    line-height: 1.6;
    list-style-type: disc;
    
    li {
        padding: 4px 0;
        
        &::marker {
            color: ${({ $theme }) => ($theme === "LIGHT" ? "#ddd" : "black")};
        }
    }
`;