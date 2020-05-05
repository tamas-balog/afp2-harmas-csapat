import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, DateInput} from 'react-admin';

const PrepTitle = ({ record }) => {
    return <span>Edit the number {record ? `${record.sequentialNumber}` : ''} preparation </span>;
};

export const preppizzaEdit = props => (
    <Edit title={<PrepTitle />}{...props}>
        <SimpleForm>
            <NumberInput source="sequentialNumber" />
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="preparedAt" />
        </SimpleForm>
    </Edit>
);