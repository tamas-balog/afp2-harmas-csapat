import React from 'react';
import {List, Datagrid, TextField, Filter, TextInput, DateField, NumberField, EditButton} from 'react-admin';

const PreparationFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search for a delivery" source="q" alwaysOn />
    </Filter>
);

export const preppizzaList = props => (
    <List filters={<PreparationFilter /> } {...props}>
        <Datagrid>
            <NumberField source="sequentialNumber" />
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="preparedAt" />
            <EditButton />
        </Datagrid>
    </List>
);





