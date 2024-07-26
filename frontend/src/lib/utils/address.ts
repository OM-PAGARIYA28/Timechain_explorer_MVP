export async function callByAddress(search: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3000/api/search/address/${search}`);
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