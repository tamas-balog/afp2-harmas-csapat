import React from 'react';
import {SimpleForm, TextInput, Create, NumberInput, ArrayInput, SimpleFormIterator} from 'react-admin';

export const pizzaCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="pizzaName" />
            <NumberInput source="pizzaPrice" />
            <ArrayInput source="ingredients"><SimpleFormIterator><TextInput source="name" label="Ingredient name"/>
                <TextInput source="id" label="Ingredient ID"/></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Create>
);