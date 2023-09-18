import {
    useShow,
    IResourceComponentsProps,
    useOne,
} from "@refinedev/core";
import {
    Show,
    TextFieldComponent as TextField,
    DateField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const UserShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: userData } = useOne({
        resource: "users",
        id: record?.category?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    Id
                </Typography>
                <TextField value={record?.id ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    Name
                </Typography>
                <TextField value={record?.name} />
                <Typography variant="body1" fontWeight="bold">
                    Birthday
                </Typography>
                <TextField value={record?.birthday} />
                <Typography variant="body1" fontWeight="bold">
                    Created At
                </Typography>
                <DateField value={record?.createdAt} />
            </Stack>
        </Show>
    );
};
