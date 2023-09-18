import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
    MarkdownField,
    TagField,
    DateField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IResourceComponentsProps, useMany } from "@refinedev/core";

export const SampleList: React.FC<IResourceComponentsProps> = () => {
    const { dataGridProps } = useDataGrid();

    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "categories",
        ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const { data: tagsData, isLoading: tagsIsLoading } = useMany({
        resource: "tags",
        ids: [].concat(
            ...(dataGridProps?.rows?.map((item: any) => item?.tags) ?? []),
        ),
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
                field: "title",
                flex: 1,
                headerName: "Title",
                minWidth: 200,
            },
            {
                field: "content",
                flex: 1,
                headerName: "Content",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return (
                        <MarkdownField
                            value={(value ?? "").slice(0, 80) + "..."}
                        />
                    );
                },
            },
            {
                field: "category",
                flex: 1,
                headerName: "Category",
                valueGetter: ({ row }) => {
                    const value = row?.category?.id;

                    return value;
                },
                minWidth: 300,
                renderCell: function render({ value }) {
                    return categoryIsLoading ? (
                        <>Loading...</>
                    ) : (
                        categoryData?.data?.find((item) => item.id === value)
                            ?.title
                    );
                },
            },
            {
                field: "tags",
                flex: 1,
                headerName: "Tags",
                minWidth: 300,
                renderCell: function render({ value }) {
                    return tagsIsLoading ? (
                        <>Loading...</>
                    ) : (
                        <>
                            {value?.map((item: any, index: number) => (
                                <TagField
                                    key={index}
                                    value={
                                        tagsData?.data?.find(
                                            (resourceItems) =>
                                                resourceItems.id === item,
                                        )?.title
                                    }
                                />
                            ))}
                        </>
                    );
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
        ],
        [categoryData?.data, tagsData?.data],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
