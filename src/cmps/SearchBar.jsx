import { useState } from 'react'
import { HiSearch } from 'react-icons/hi'

export const SearchBar = ({ placeholder, data }) => {

    const [searchVal, setSearchVal] = useState('')

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    const options = data.filter(item => {
        const regExp = new RegExp(searchVal, 'i')
        return regExp.test(item.jobTitle)
    })

    return (
        <div className="search-bar">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder={placeholder} value={searchVal}
                    onChange={({ target }) => setSearchVal(target.value)} />
                <HiSearch />
            </form>
            <div className="seach-options">
                {options.slice(0, 10).map((item, idx) => (
                    <div key={idx} className="data-item">
                        {item.jobTitle}
                    </div>
                ))}
            </div>
        </div>
    )
}