import React from 'react';
import { List, Datagrid, TextField} from 'react-admin';
import { ArrayField, SingleFieldList, ChipField, NumberField, EditButton, Filter, TextInput} from 'react-admin';

const PizzaFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search for a pizza" source="pizzaName" alwaysOn />
    </Filter>
);

export const pizzasList = props => (
    <List filters={<PizzaFilter /> }{...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="pizzaName" />
            <NumberField source="pizzaPrice" />
            <ArrayField source="ingredients">
                <SingleFieldList linkType={false}>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
);