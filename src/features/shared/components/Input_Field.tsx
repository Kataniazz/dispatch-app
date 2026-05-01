import styled from 'styled-components';

function getGapBasedOnSize(size: InputSize): string {
    switch (size) {
        case 'MEDIUM':
            return '40px';

        case 'LARGE':
            return '60px';
    
        default:
            return '20px';
    }
}

type InputType = "text" | "email" | "number" | "password"

type InputSize = "SMALL" | "MEDIUM" | "LARGE"

interface InputFieldProps {
    name: string
    size: InputSize
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: InputType
    label?: string
    isError?: boolean
    isThickFocus?: boolean
}

export function InputField({ 
    name,
    size, 
    value,
    onChange,
    type: inputType = "text", 
    label,
    isError, 
    isThickFocus
}: InputFieldProps) {
    return (
        <InputContainer $size={size}>
            <InputLabel htmlFor={inputType} $required>{label}</InputLabel>
            <Input
                id={name}
                name={name}
                type={inputType}
                onChange={onChange}
                value={value}
                $isError={isError}
                $isThickFocus={isThickFocus}
            />
        </InputContainer>
    )
}

const InputContainer = styled.div<{$size: InputSize}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    padding: 8px;
    margin: 8px;

    gap: ${({ $size }) => ( getGapBasedOnSize($size) )}
`

const InputLabel = styled.label<{$required?: boolean}>`
    font-size: 14px;
    color: #555;
    margin-bottom: 6px;
    display: block;

    &::after {
        content: ${({ $required }) => ($required ? '" *"' : '""')};
        color: #e53935;
        font-weight: bold;
    }
`

const Input = styled.input<{
    $isError?: boolean;
    $isThickFocus?: boolean;
}>`
    border: none;
    border-bottom: 2px solid ${({ $isError }) =>
        $isError ? 'red' : '#ccc'};
    
    font-size: 16px;
    outline: none;
    width: 100%;
    background: transparent;
    transition: all 0.2s ease;

    &:focus {
        border-bottom-color: ${({ $isError }) =>
        $isError ? 'red' : '#0077ff'};
        border-bottom-width: ${({ $isThickFocus }) =>
        $isThickFocus ? '3px' : '2px'};
    }

    &:disabled {
        border-bottom-color: #eee;
        cursor: not-allowed;
        opacity: 0.6;
    }
`;