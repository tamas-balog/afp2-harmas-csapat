import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Filter,
    TextInput,
    DateField,
    FunctionField,
    EditButton,
    SimpleForm
} from 'react-admin';

const DeliveryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search for a delivery" source="q" alwaysOn />
    </Filter>
);

export const deliveryList = props => (
    <List filters={<DeliveryFilter /> } {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name" label="Delivery man"/>
            <DateField source="deliveredAt" />
            <FunctionField label="Name" render={record => `${record.user.firstName} ${record.user.lastName}`} />
            <TextField source="user.city" label="City"/>
            <TextField source="user.address" label="Address "/>
            <EditButton />
        </Datagrid>
    </List>
);



