import React from "react";
import {
    useDataGrid,
    List,
    EmailField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IResourceComponentsProps, useNavigation } from "@refinedev/core";
import Button from "@mui/material/Button";
import { IUser } from "../../interfaces";
import { TextField } from "@mui/material";

export const UserList: React.FC<IResourceComponentsProps> = () => {
    const { dataGridProps } = useDataGrid<IUser>();
    const { edit, show } = useNavigation();

    const columns = React.useMemo<GridColDef<IUser>[]>(
        () => [
            {
                field: "id",
                headerName: "Id",
                type: "number",
                minWidth: 50,
                sortable: true,
            },
            {
                field: "name",
                flex: 1,
                headerName: "Name",
                renderCell: function render({ row }) {
                    return <TextField value={row.name} />;
                },
                minWidth: 200,
                sortable: true,
            },
            {
                field: "mail",
                flex: 1,
                headerName: "Mail",
                renderCell: function render({ row }) {
                    return <EmailField value={row.mail} />;
                },
                minWidth: 200,
                sortable: true,
            },
            {
                field: "birthday",
                flex: 1,
                headerName: "Birthday",
                minWidth: 250,
                sortable: true,
            },
            {
                field: "createdAt",
                flex: 1,
                headerName: "Created At",
                minWidth: 250,
                sortable: true,
            },
            {
                field: "actions",
                headerName: "Actions",
                sortable: true,
                filterable: false,
                minWidth: 150,
                renderCell: function render({ row }) {
                    return (
                        <div>
                            <Button onClick={() => edit("users", row.id)} >Edit</Button>
                            <Button onClick={() => show("users", row.id)}>Show</Button>
                        </div>
                    );
                },
            },
        ],
        [],
    );

    return (
        <List>      
            <DataGrid 
            {...dataGridProps}
            columns={columns}
            autoHeight
            />
        </List>
    );
};
