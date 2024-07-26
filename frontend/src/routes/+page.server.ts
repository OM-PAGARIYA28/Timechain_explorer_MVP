import { callByBlock, callByAddress, callByTransaction,Error } from '$lib/utils/index.ts';

/** @type {import('./$types').Actions} */
export const actions = {
    apiCall: async ({ request }) => {
        const data = await request.formData();
        const search = data.get('search');
        if(search === null) return { status: 400, body: { error: 'No search query' } };
        if (search instanceof File) {
            return { status: 400, body: { error: 'Invalid search parameter: expected a string, got a File' } };
        }
        const trimmedSearch = search.trim();
        let result;
        if (!isNaN(Number(trimmedSearch)) || (/^0{6}/.test(trimmedSearch) && search.length==64) ){
            result = await callByBlock(trimmedSearch);
        }
        else if(trimmedSearch.length > 20 && trimmedSearch.length < 40){
            result = await callByAddress(trimmedSearch);
        }
        else if(search.length==64){
            result = await callByTransaction(trimmedSearch);
        }
        else{
            result=  Error(trimmedSearch)
        }
        return {called:true ,resultis:result};
    },
};
