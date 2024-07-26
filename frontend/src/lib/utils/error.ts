export function Error(search: string){

        return {
            status: false,
            type: "error",
            body: {
                message: 'Invalid Input ',
            }
        };
}