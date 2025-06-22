/* takes base url of website, appending the asset path onto it */ 
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};