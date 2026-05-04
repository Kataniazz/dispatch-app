import { styled } from 'styled-components'

type ToggleOption = {
    value: string
    label?: string
    icon?: React.ReactNode
}

type ToggleProps = {
    value: string
    onChange: (value: string) => void
    options: [ToggleOption, ToggleOption]
    disabled?: boolean
}

export function Toggle({
    value,
    onChange,
    options,
    disabled = false
}: ToggleProps) {
  const activeIndex = options.findIndex(opt => opt.value === value)

  return (
        <Wrapper $disabled={disabled}>
            <Slider $index={activeIndex} />

            {options.map((opt) => {
                const isActive = opt.value === value

                return (
                    <Option
                        key={opt.value}
                        onClick={() => !disabled && onChange(opt.value)}
                        $active={isActive}
                    >
                        {opt.icon && <Icon>{opt.icon}</Icon>}
                        {opt.label && <Label>{opt.label}</Label>}
                    </Option>
                )
            })}
        </Wrapper>
  )
}

const Wrapper = styled.div<{ $disabled: boolean }>`
    position: relative;
    display: inline-flex;
    background: #1a1a1a;
    border-radius: 999px;
    padding: 4px;
    gap: 4px;

    opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
    pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

    font-family: 'Rubik', sans-serif;
`

const Slider = styled.div<{ $index: number }>`
    position: absolute;
    top: 4px;
    left: ${({ $index }) => ($index === 0 ? '4px' : 'calc(50% + 2px)')};
    width: calc(50% - 6px);
    height: calc(100% - 8px);

    background: white;
    border-radius: 999px;
    transition: all 0.25s ease;
`

const Option = styled.button<{ $active: boolean }>`
    position: relative;
    z-index: 1;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    padding: 6px 10px;
    border: none;
    background: transparent;
    border-radius: 999px;
    cursor: pointer;

    font-size: 13px;
    font-weight: 500;

    color: ${({ $active }) => ($active ? '#000' : '#aaa')};
    transition: color 0.25s ease;
`

const Icon = styled.span`
    display: flex;
    align-items: center;
    font-size: 14px;
`

const Label = styled.span`
    white-space: nowrap;
`