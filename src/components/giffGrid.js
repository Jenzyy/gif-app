 import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGritItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs(category);
    return (
        <>
            <h2 className="title-category">Categoria: <span>{category}</span>  </h2>
           <h3>{loading ? 'Cargando...' : null}</h3> 
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
