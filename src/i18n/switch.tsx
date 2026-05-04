import { useState } from "react"
import i18n from "i18next"
import { Toggle } from "../features/shared/components/toggle"

export function LanguageSwitcher() {
    const [toggleValue, setToggleValue] = useState("en")

    const onToggle = (): void => {
        if(toggleValue === "en") {
            setToggleValue("es")
            i18n.changeLanguage('es')
        } else {
            setToggleValue("en")
            i18n.changeLanguage('en')
        }
    }
    
    return (
        <>
            <Toggle
                value={toggleValue}
                onChange={onToggle}
                options={[
                    { value: 'en', label: 'EN', icon: '🇺🇸' },
                    { value: 'es', label: 'ES', icon: '🇪🇸' }
                ]}
            />
        </>
    )
}