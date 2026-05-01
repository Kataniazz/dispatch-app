import styled from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

type ButtonProps = {
    variant?: ButtonVariant;
    disabled?: boolean;
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

export function Button({
    children,
    variant = 'primary',
    ...props
}: Props) {
    return (
        <StyledButton variant={variant} {...props}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button<ButtonProps>`
    width: 100%;
    padding: 10px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 14px;

    background: ${({ variant }) => {
        switch (variant) {
        case 'secondary':
            return '#e0e0e0';
        case 'danger':
            return '#e53935';
        default:
            return '#af5705';
        }
    }};

    color: ${({ variant }) =>
        variant === 'secondary' ? '#333' : '#fff'};

    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    transition: 0.2s ease;

    &:hover {
        transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.02)')};
    }
`;