import React from 'react';
import {
    List,
    Datagrid,
    DateField,
    ArrayField,
    FunctionField,
    TextField
} from 'react-admin';

export const ordersList = props => (
    <List {...props}>
        <Datagrid>
            <FunctionField label="Name" render={record => `${record.user.firstName} ${record.user.lastName}`} />
            <TextField source="city" />
            <DateField source="deliveryAt" />
            <ArrayField source="pizzas" fieldKey="sequentialNumber">
                <Datagrid>
                    <TextField source="pizzaName"/>
                    <TextField source="preparedAt"/>
                </Datagrid>
            </ArrayField>
        </Datagrid>
    </List>
);

