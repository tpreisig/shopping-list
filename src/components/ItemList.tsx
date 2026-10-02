import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }: { items: any[]; handleCheck: any; handleDelete: any }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />

            ))}
        </ul>
    )
}

export default ItemList