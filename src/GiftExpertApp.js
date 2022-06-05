import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/giffGrid";
const GitExpertApp = () => {
    const [categories, setCategories] = useState(['one Punch']);/* 
    const handleAdd = (e) => {
        setCategories([...categories, 'Uno mas'])
    } */
    return (
        <>
            <h2>
                hola mundo
            </h2>
            <AddCategory
                categories={categories}
                setCategories={setCategories}
            />
            <hr />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />

                ))
            }
        </>
    )
}
export default GitExpertApp;