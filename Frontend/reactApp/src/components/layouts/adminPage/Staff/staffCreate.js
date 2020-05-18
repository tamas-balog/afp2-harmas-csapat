import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const staffCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput source="positionCode" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);