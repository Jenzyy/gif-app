import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGritItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs(category).then(setImages)
    }, [category])

    return (
        <>
            <h2>{category}</h2>
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGritItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
export default GifGrid
