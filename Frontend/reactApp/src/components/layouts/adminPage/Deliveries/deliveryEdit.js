import React from 'react';
import {Edit, SimpleForm, TextInput, DateInput, TextField, Datagrid, EditButton} from 'react-admin';

const DeliveryNumber = ({ record }) => {
    return <span>Edit the number {record ? `${record.id}` : ''} delivery</span>;
};

export const deliveryEdit = props => (
    <Edit title ={<DeliveryNumber/>} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" label="Delivery man"/>
            <DateInput source="deliveredAt" />
            <TextInput source="user.firstName" label="First name"/>
            <TextInput source="user.lastName" label="Last name"/>
            <TextInput source="user.postalCode" label="Postal code"/>
            <TextInput source="user.city" label="City"/>
            <TextInput source="user.address" label="Address "/>
            <TextInput source="user.phoneNumber" label="Phone Number "/>
            <TextInput source="user.comments" label="Comments "/>
        </SimpleForm>
    </Edit>
);


