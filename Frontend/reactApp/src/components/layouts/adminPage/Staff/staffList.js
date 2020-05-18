import React from 'react';
import { List, Datagrid, TextField} from 'react-admin';
import { NumberField, EditButton, Filter, TextInput, EmailField} from 'react-admin';

const StaffFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search for a staff member" source="q" alwaysOn />
    </Filter>
);

export const staffList = props => (
    <List filters={<StaffFilter /> }{...props}>
        <Datagrid rowClick = "open">
            <TextField source="id" />
            <NumberField source="positionCode" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" linkType={false}/>
            <TextField source="phoneNumber" />
            <EditButton />
        </Datagrid>
    </List>
);