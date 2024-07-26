import { callByBlock, callByAddress, callByTransaction } from '$lib/utils/index.ts';

/** @type {import('./$types').Actions} */
export const actions = {
    apiCall: async ({ request }) => {
        const data = await request.formData();
        const search = data.get('search');
        if(search === null) return { status: 400, body: { error: 'No search query' } };
        if (search instanceof File) {
            console.log('Invalid search parameter: expected a string, got a File');
            return { status: 400, body: { error: 'Invalid search parameter: expected a string, got a File' } };
        }
        const trimmedSearch = search.trim();
        let result;
        if (!isNaN(Number(trimmedSearch)) || /^0{6}/.test(trimmedSearch)){
            result = await callByBlock(trimmedSearch);
        }
        else if(trimmedSearch.length > 20 && trimmedSearch.length < 40){
            result = await callByAddress(trimmedSearch);
        }
        else{
            result = await callByTransaction(trimmedSearch);
        }
        console.log(result.body.data);
        return result;
    },
};
