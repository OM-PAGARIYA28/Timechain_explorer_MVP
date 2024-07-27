<script>
    export let form;
</script>

<div class="p-6 bg-gray-800 rounded-lg shadow-lg">
    <p class="pt-2 text-green-600 mb-5 text-3xl font-bold">Block details fetched successfully!</p>
    
    <div class="mb-4">
        <table class="table-auto w-full bg-gray-900 rounded-lg shadow">
            <thead>
                <tr class="text-left">
                    <th class="border-t border-gray-700 px-4 py-2  text-yellow-600">Block Hash</th>
                    <td class="border-t border-gray-700 px-4 py-2 text-white ">{form?.resultis.body.data.blockHash}</td>
                    
                </tr>
            </thead>
            <tbody>
                <tr class="text-left">
                    <th class="border-t border-gray-700 px-4 py-2  text-yellow-600">Block Height</th>
                    <td class="border-t border-gray-700 px-4 py-2 text-white ">{form?.resultis.body.data.blockHeight}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="mb-4">
        <table class="table-auto w-full bg-gray-900 rounded-lg shadow">
            <thead>
                <tr class="text-center text-yellow-600">
                    <th class="px-4 py-2">Timestamp</th>
                    <th class="px-4 py-2">Number of Transactions</th>
                    <th class="px-4 py-2">Size</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-white text-center">
                    <td class="border-t border-gray-700 px-4 py-2">{form?.resultis.body.data.timestamp}</td>
                    <td class="border-t border-gray-700 px-4 py-2">{form?.resultis.body.data.numberOfTransactions}</td>
                    <td class="border-t border-gray-700 px-4 py-2">{form?.resultis.body.data.size}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div>
        <p class="text-white mb-2"><strong class="text-yellow-600">Transaction Ids:</strong></p>
        <table class="table-auto w-full bg-gray-900 rounded-lg shadow">
            <thead>
                <tr class="text-left text-yellow-600">
                    <th class="px-4 py-2">Transaction Id</th>
                </tr>
            </thead>
            <tbody>
                {#each form?.resultis.body.data.txs as txid}
                    <tr class="text-white">
                        <td class="border-t border-gray-700 px-4 py-2">{txid}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
