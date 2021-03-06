import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/giffGrid";
const GitExpertApp = () => {
    const [categories, setCategories] = useState(['gato']);
/*     const handleAdd = (e) => {
        setCategories(e.target.value)
    } */
    return (
        <>
            <h1 className="title">
                giff App 
            </h1>
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