import styled from 'styled-components';
import { InputField } from '../../shared/components/Input_Field';
import { Button } from "../../shared/components/button";
import { media } from "../../shared/domain_logic/media";
import { useContactForm } from '../../../hooks/useContactFrom';
import { useTranslation } from 'react-i18next';

export function Contact() {
    const {
        form,
        errors,
        status,
        handleChange,
        handleSubmit,
    } = useContactForm();

    const { t } = useTranslation();

    return (
        <Content>
            <InputFieldContainer>
                <InputValidationContainer>
                    <InputField 
                        name='firstName' 
                        size='SMALL' 
                        value={form.firstName}
                        onChange={handleChange}
                        label={t('firstName')}
                        isError={!!errors.firstName}
                        isThickFocus={false}
                    />
                    {errors.firstName && <p>{t(errors.firstName)}</p>}
                </InputValidationContainer>
                
                <InputValidationContainer>
                    <InputField 
                        name='lastName' 
                        size='SMALL' 
                        value={form.lastName}
                        onChange={handleChange}
                        label={t('lastName')}
                        isError={!!errors.lastName}
                        isThickFocus={false}
                    />
                    {errors.lastName && <p>{t(errors.lastName)}</p>}
                </InputValidationContainer>
            </InputFieldContainer>

            <InputFieldContainer>
                <InputValidationContainer>
                    <InputField 
                        name='email' 
                        size='SMALL' 
                        value={form.email}
                        onChange={handleChange}
                        label={t('email')}
                        isError={!!errors.email}
                        isThickFocus={false}
                    />
                    {errors.email && <p>{t(errors.email)}</p>}
                </InputValidationContainer>

                <InputValidationContainer>
                    <InputField 
                        name='phone' 
                        size='SMALL' 
                        value={form.phone}
                        onChange={handleChange}
                        label={t('phone')}
                        isError={!!errors.phone}
                        isThickFocus={false}
                    />
                    {errors.phone && <p>{t(errors.phone)}</p>}
                </InputValidationContainer>
            </InputFieldContainer>

            <InputFieldContainer>
                <InputField 
                    name='message' 
                    size='LARGE' 
                    value={form.message}
                    onChange={handleChange}
                    label={t('leaveUsAMessage')}
                    isError={!!errors.message}
                    isThickFocus={false}
                    required={false}
                />
                {errors.message && <p>{t(errors.message)}</p>}
            </InputFieldContainer>

            {/* honeypot */}
           <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                style={{
                    position: "absolute",
                    left: "-9999px",
                }}
                onChange={handleChange}
            />

            <ButtonContainer>
                <Button variant="primary" onClick={handleSubmit}>{t('submit')}</Button>
            </ButtonContainer>

            {status === "success" && <p>{t('messageSent')}</p>}
            {status === "error" && <p>{t('somethingWentWrong')}</p>}
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 0 80px;
    align-items: center;

`

const InputFieldContainer = styled.div`
    display: flex;
    width: 50%;

    ${media.tablet} {
        width: 50%;
        flex-direction: column;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    margin: 4px 16px 0;
    width: 25%;
`

const InputValidationContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 16px
`
