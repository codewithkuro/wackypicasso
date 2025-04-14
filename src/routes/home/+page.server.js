import { Readable } from 'stream';

export const actions = {
    default: async ({cookies, request, fetch}) => {
        let formData = await request.formData();
        const fileIn = formData.get('filein');
        const selectedPhoto = formData.get('selectedPhoto');
        const promptText = formData.get('promptText');
        const filename = selectedPhoto.slice(selectedPhoto.lastIndexOf('/')+1, selectedPhoto.length);
        console.log('filename: ', filename);
        console.log('promptText =', promptText);
        console.log('fileIn =', fileIn);
        console.log('selectedPhoto = ', selectedPhoto );

        fetch(selectedPhoto).then(async r => {
            console.log('dumping file info: ', r);
            const form = new FormData();
            form.append('file', await r.blob(), filename);      

            return fetch('http://codegarage.cloud:8000/buckets/aiblueprints/files', {
    //            headers: form.getHeaders(),
                method: 'post',
                body: form
            });      
        }).then(r => {
            console.log('Response: ', r);
        });

    }
}