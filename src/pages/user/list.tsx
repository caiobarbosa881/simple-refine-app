import React from "react";
import {
    useDataGrid,
    List,
    DateField,
    
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IResourceComponentsProps, useMany, useNavigation } from "@refinedev/core";
import TextField from "@mui/material/TextField/TextField";
import { useGo } from '@refinedev/core';
import Button from "@mui/material/Button";

export const UserList: React.FC<IResourceComponentsProps> = () => {
    const { dataGridProps } = useDataGrid();
    const { edit, show } = useNavigation();


    const { data: userData } = useMany({
        resource: "users",
        ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const columns = React.useMemo<GridColDef[]>(
        () => [
            {
                field: "id",
                headerName: "Id",
                type: "number",
                minWidth: 50,
            },
            {
                field: "name",
                flex: 1,
                headerName: "name",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <TextField value={value} />;
                },
            },
            {
                field: "birthday",
                flex: 1,
                headerName: "Birthday",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "createdAt",
                flex: 1,
                headerName: "Created At",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "actions", // Nome da coluna de ações
                headerName: "Actions",
                minWidth: 150,
                renderCell: function render({ row }) {
                    // Aqui você pode adicionar botões de "Edit" e "Show" para cada linha
                    return (
                        <div>
                            <Button onClick={() => edit("users", row.id)} >Edit</Button>
                            <Button onClick={() => show("users", row.id)}>Show</Button>
                        </div>
                    );
                },
            },
        ],
        [userData?.data],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
