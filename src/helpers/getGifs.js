
export const getGifs = async (category) => {
    const enpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${encodeURI(category)}&limit=8`;
    const response = await fetch(enpoint);
    const { data } = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    })
    return gifs;
}