
export const actions = {
    default: async ({cookies, request}) => {
        let formData = request.formData();
        console.log('promptText =', (await formData).get('promptText'));
        console.log('fileIn =', (await formData).get('filein'));
    }
}