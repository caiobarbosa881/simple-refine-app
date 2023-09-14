import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/nestjsx-crud";


const Teste = () => {
    return (
        <Refine
            dataProvider={{
                default: defaultDataProvider,
                example: exampleDataProvider,
            }}
            resources={[
                {
                    // **refine** will use the `default` data provider for this resource
                    name: "posts",
                },
                {
                    name: "products",
                    meta: {
                        // **refine** will use the `exampleDataProvider` data provider for this resource
                        dataProviderName: "exampleDataProvider",
                    },
                },
            ]}
        />
    );
};