import ItemList from './ItemList';

type Item = {
    id: number;
    item: string;
    checked: boolean;
};

type ContentProps = {
    items: Item[];
    handleCheck: (id: number) => void;
    handleDelete: (id: number) => void;
};

const Content = ({ items, handleCheck, handleDelete }: ContentProps) => {

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (<p style={{ fontSize: "1.2rem" }}>Your list is empty</p>)
            }
        </main >
    )
}

export default Content
