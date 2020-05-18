import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, ArrayInput, SimpleFormIterator } from 'react-admin';

const PizzaTitle = ({ record }) => {
        return <span>Edit the {record ? `${record.pizzaName}` : ''} pizza</span>;
    };

export const pizzaEdit = props => (
    <Edit title={<PizzaTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="pizzaName" />
            <NumberInput source="pizzaPrice" />
            <ArrayInput source="ingredients"><SimpleFormIterator><TextInput source="name" label="Ingredient name"/>
                <TextInput source="id" label="Ingredient ID"/></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Edit>
);