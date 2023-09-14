import { useList, HttpError } from "@refinedev/core";

interface IProduct {
    id: number;
    name: string;
    material: string;
}

function UserList() {
    const { data, isLoading, isError } = useList<IProduct, HttpError>({
        resource: "products",
    });

    const products = data?.data ?? [];

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <h4>
                        {product.id} - ({product.name})
                    </h4>
                </li>
            ))}
        </ul>
    );
}

export default UserList
