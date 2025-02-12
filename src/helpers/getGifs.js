export const getGifs = async( category ) => {
    const apiKEy = 'VLgfZlMz2TRWuR7xIpr49L7nSsyLxKtE'
    const limite = 5
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEy}&q=${ category }&limit=${limite}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}