import { AuthPage, ThemedTitleV2 } from "@refinedev/mui";
import { AppIcon } from "../../components/app-icon";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={
        <ThemedTitleV2
          collapsed={false}
          text="Simple Refine App"
          icon={<AppIcon />}
        />
      }
      formProps={{
        defaultValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
    />
  );
};
