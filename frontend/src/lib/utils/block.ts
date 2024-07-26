export async function callByBlock(search: string) : Promise<any> {
    try {
        const response = await fetch(`http://localhost:3000/api/search/block/${search}`);
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