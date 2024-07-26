import { BACKEND_URL } from "$env/static/private";
export async function callByBlock(search: string) : Promise<any> {
    try {
        const url = `${BACKEND_URL}/api/search/block/${search}`;
        const response = await fetch(url);
        const result = await response.json();

        let er=true;

        // Return the result or a meaningful message
        if(result.statusCode== 400){
           er=false;
        }
        return {
            status: er,
            type: "block",
            body: {
                message: 'Block data fetched successfully',
                data: result
            }
        };
    } catch (error) {
        console.error('Error fetching block data:', error);

        return {
            status: false,
            type: "block",
            body: {
                message: 'Failed to fetch block data'
            }
        };
    }
}