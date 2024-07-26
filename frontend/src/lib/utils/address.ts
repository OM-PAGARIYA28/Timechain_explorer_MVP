import { BACKEND_URL } from "$env/static/private";
export async function callByAddress(search: string): Promise<any> {
    try {
        const url = `${BACKEND_URL}/api/search/address/${search}`;
        const response = await fetch(url);
        const result = await response.json();

        let er=true;

        if(result.statusCode== 400){
            er=false;
         }
        // Return the result or a meaningful message
        return {
            status: er,
            type: "address",
            body: {
                message: 'Address data fetched successfully',
                data: result
            }
        };
    } catch (error) {
        console.error('Error fetching Address data:', error);

        return {
            status: false,
            type: "address",
            body: {
                message: 'Failed to fetch Address data'
            }
        };
    }
}