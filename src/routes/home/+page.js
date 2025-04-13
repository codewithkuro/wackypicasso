export const load = async ({ fetch, setHeaders }) => {
    const response = await fetch(`https://api.pexels.com/v1/curated?per_page=20`, { 
        headers: {'Authorization': 'SHRfG4oYgV7Qq2k8pzPTeMMS4jnXRfLPXtLcy4hSWdUPWLNktIxHo5Qu'}
    });

    setHeaders({
        Authorization: 'SHRfG4oYgV7Qq2k8pzPTeMMS4jnXRfLPXtLcy4hSWdUPWLNktIxHo5Qu'
    });
    const result  = await response.json();

    let photos = [];
    result.photos.forEach(p => photos.push(p.src.original));
    return { photos }
}