import { Create, useAutocomplete } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
export const UserCreate = () => {
    const {
        saveButtonProps,
        refineCore: { formLoading },
        register,
        formState: { errors },
    } = useForm();

    const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
        resource: "users",
    });

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("name", {
                        required: "Esse campo é obrigatório",
                    })}
                    error={!!(errors as any)?.name}
                    helperText={(errors as any)?.name?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Name"
                    name="name"
                />
                <TextField
                    {...register("mail", {
                        required: "O campo é obrigatório",
                    })}
                    error={!!(errors as any)?.mail}
                    helperText={(errors as any)?.mail?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    multiline
                    label="Mail"
                    name="mail"
                />
                 <TextField
                    {...register("birthday", {
                        required: "O campo é obrigatóri",
                    })}
                    error={!!(errors as any)?.birthday}
                    helperText={(errors as any)?.birthday?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Birthday"
                    name="birthday"
                />
                <TextField
                    {...register("password", {
                        required: "O campo é obrigatóri",
                    })}
                    error={!!(errors as any)?.password}
                    helperText={(errors as any)?.password?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Password"
                    name="password"
                />
            </Box>
        </Create>
    );
};