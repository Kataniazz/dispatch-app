import { Template } from '../../shared/components/form_template';
import { Text } from '../../shared/components/text';

export function Services() {
    return (
        <Template
            title="Logistics Services"
            subtitle="Fast, reliable delivery solutions"
            theme='LIGHT'
        >
            <Text variant="title" align="center">
                Freight Dispatch
            </Text>

            <Text variant="body" align="center">
                We source and secure loads that match your equipment, lane, 
                and schedule. Using multiple load boards and established broker 
                relationships, we keep your truck moving and your downtime minimal.
            </Text>
        </Template>
    )
}
