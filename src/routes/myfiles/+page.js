export const load = async ({ fetch, setHeaders }) => {
    const response = await fetch(`http://codegarage.cloud:8000/buckets/aiblueprints/files`);
    const result  = await response.json();
    return { files: result.data };
}