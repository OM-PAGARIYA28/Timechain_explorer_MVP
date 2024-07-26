export async function callByTransaction(search: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3000/api/search/transaction/${search}`);
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