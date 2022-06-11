import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        console.log("peticion...")
        getGifs(category)
            .then(img => {
                setState({
                    data: img,
                    loading: false
                })
            })
    }, [category])




    return state;
}