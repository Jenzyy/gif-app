import { useState } from "react"
import PropTypes from 'prop-types';
const AddCategory = ({ categories, setCategories }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategories([ inputValue,...categories])
        setInputValue('');

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
