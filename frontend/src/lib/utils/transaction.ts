import { BACKEND_URL } from "$env/static/private";
export async function callByTransaction(search: string): Promise<any> {
    try {
        const url = `${BACKEND_URL}/api/search/transaction/${search}`;
        const response = await fetch(url);
        const result = await response.json();

        let er=true;

        if(result.statusCode== 400){
            er=false;
         }
        // Return the result or a meaningful message
        return {
            status: er,
            type: "transaction",
            body: {
                message: 'Transaction fetched successfully',
                data: result
            }
        };
    } catch (error) {
        console.error('Error fetching Transaction data:', error);

        return {
            status: false,
            type: "transaction",
            body: {
                message: 'Failed to fetch Transaction data'
            }
        };
    }
}