import * as React from "react";
import styled from 'styled-components';
import { InputField } from '../../shared/components/input_field';
import { Button } from "../../shared/components/button";
import { Template } from "../../shared/components/form_template";

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export function Contact() {
    const [form, setForm] = React.useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target as HTMLInputElement;

        setForm((prev) => ({
            ...prev,
            [name as keyof FormState]: value,
        })) 

    }

    const handleOnButtonPress = () => {
        console.log("Button Pressed!")
    }

    return (
        <Template showDivider>
            <Content>
                <InputFieldWrapper>
                    <InputField 
                        name='firstName' 
                        size='SMALL' 
                        value={form.firstName}
                        onChange={handleChange}
                        label='First Name'
                        isError={false}
                        isThickFocus={false}
                    />
                     <InputField 
                        name='lastName' 
                        size='SMALL' 
                        value={form.lastName}
                        onChange={handleChange}
                        label='Last Name'
                        isError={false}
                        isThickFocus={false}
                    />
                </InputFieldWrapper>

                <InputFieldWrapper>
                     <InputField 
                        name='email' 
                        size='SMALL' 
                        value={form.email}
                        onChange={handleChange}
                        label='Email'
                        isError={false}
                        isThickFocus={false}
                    />
                     <InputField 
                        name='phone' 
                        size='SMALL' 
                        value={form.phone}
                        onChange={handleChange}
                        label='Phone'
                        isError={false}
                        isThickFocus={false}
                    />
                </InputFieldWrapper>

                 <InputFieldWrapper>
                     <InputField 
                        name='message' 
                        size='LARGE' 
                        value={form.message}
                        onChange={handleChange}
                        label='Leave us a message'
                        isError={false}
                        isThickFocus={false}
                    />
                </InputFieldWrapper>

                <ButtonWrapper>
                    <Button variant="primary" onClick={handleOnButtonPress}>Submit</Button>
                </ButtonWrapper>
            </Content>
        </Template>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 0 80px;
`

const InputFieldWrapper = styled.div`
    display: flex;
    width: 50%
`

const ButtonWrapper = styled.div`
    display: flex;
    margin: 4px 16px 0;
    width: 25%;
`
