import React from 'react'

interface SearchItProps {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchIt = ({ search, setSearch }: SearchItProps) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchIt
