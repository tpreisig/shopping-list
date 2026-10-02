const Footer = ({ length }: { length: number }) => {
    return (
        <footer>
            {length === 0 ? "" : `${length} List ${length === 1 ? "item" : "items"}`}
        </footer>
    )
}

export default Footer
