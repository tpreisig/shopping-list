import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import type { SubmitEventHandler } from "react";

type AddProps = {
    newItem: string;
    setNewItem: (value: string) => void;
    onSubmit: SubmitEventHandler<HTMLFormElement>;
};

const Add = ({ newItem, setNewItem, onSubmit }: AddProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        onSubmit(event);
        inputRef.current?.focus();
    };

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id="addItem"
                name="item"
                type="text"
                placeholder="Add Item"
                required
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
            />
            <button type="submit" aria-label="Add Item">
                <FaPlus aria-hidden="true" />
            </button>
        </form>
    );
};

export default Add;
