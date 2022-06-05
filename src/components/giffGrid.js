 import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGritItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category);
    return (
        <>
            <h2>{category}</h2>
            {loading ? 'Cargando...' : null}
            <div className="card-grid">
                {
                    data.map(img => (
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
