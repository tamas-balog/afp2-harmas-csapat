import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const EmployeeName = ({ record }) => {
    return <span>Edit {record ? `${record.firstName}` : ''}'s datas</span>;
};

export const staffEdit = props => (
    <Edit title={<EmployeeName/>}{...props}>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput source="positionCode" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);