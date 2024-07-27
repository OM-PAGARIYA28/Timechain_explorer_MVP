<script>
    export let form;
</script>

<div class="p-6 bg-gray-800 rounded-lg shadow-lg">
    <p class="pt-2 text-green-600 mb-5 text-3xl font-bold md:text-4xl">Block details fetched successfully!</p>
    
    <!-- Desktop View -->
    <div class="hidden md:block mb-4 overflow-x-auto">
        <table class="table-auto w-full bg-gray-900 rounded-lg shadow text-sm md:text-base">
            <thead>
                <tr class="text-left">
                    <th class="border-t border-gray-700 px-4 py-2 text-yellow-600">Block Hash</th>
                    <td class="border-t border-gray-700 px-4 py-2 text-white truncate">{form?.resultis.body.data.blockHash}</td>
                </tr>
            </thead>
            <tbody>
                <tr class="text-left">
                    <th class="border-t border-gray-700 px-4 py-2 text-yellow-600">Block Height</th>
                    <td class="border-t border-gray-700 px-4 py-2 text-white truncate">{form?.resultis.body.data.blockHeight}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <!-- Mobile View for Block Details -->
    <div class="block md:hidden mb-4">
        <div class="bg-gray-900 rounded-lg shadow ">
            <div class="border-t border-gray-700 px-4 py-2 text-yellow-600">Block Hash</div>
            <div class="border-t border-gray-700 px-4 py-2 text-white break-words">{form?.resultis.body.data.blockHash}</div>
            
            <div class="border-t border-gray-700 px-4 py-2 text-yellow-600">Block Height</div>
            <div class="border-t border-gray-700 px-4 py-2 text-white break-words">{form?.resultis.body.data.blockHeight}</div>
        </div>
    </div>

    <!-- Timestamp, Number of Transactions, Size -->
    <div class="mb-4 overflow-x-auto">
        <div class="hidden md:block">
            <table class="table-auto w-full bg-gray-900 rounded-lg shadow text-sm md:text-base">
                <thead>
                    <tr class="text-center text-yellow-600">
                        <th class="px-4 py-2">Timestamp</th>
                        <th class="px-4 py-2">Number of Transactions</th>
                        <th class="px-4 py-2">Size</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-white text-center">
                        <td class="border-t border-gray-700 px-4 py-2 truncate">{form?.resultis.body.data.timestamp}</td>
                        <td class="border-t border-gray-700 px-4 py-2 truncate">{form?.resultis.body.data.numberOfTransactions}</td>
                        <td class="border-t border-gray-700 px-4 py-2 truncate">{form?.resultis.body.data.size}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="block md:hidden bg-gray-900 rounded-lg shadow">
            <div class="border-t border-gray-700 px-4 py-2 text-yellow-600">Timestamp</div>
            <div class="border-t border-gray-700 px-4 py-2 text-white break-words">{form?.resultis.body.data.timestamp}</div>
            
            <div class="border-t border-gray-700 px-4 py-2 text-yellow-600">Number of Transactions</div>
            <div class="border-t border-gray-700 px-4 py-2 text-white break-words">{form?.resultis.body.data.numberOfTransactions}</div>
            
            <div class="border-t border-gray-700 px-4 py-2 text-yellow-600">Size</div>
            <div class="border-t border-gray-700 px-4 py-2 text-white break-words">{form?.resultis.body.data.size}</div>
        </div>
    </div>

    <!-- Transaction Ids -->
    <div>
        <p class="text-white mb-2 text-lg md:text-base text-left"><strong class="text-yellow-600">Transaction Ids:</strong></p>
        
        <!-- Desktop View -->
        <div class="hidden md:block overflow-x-auto">
            <table class="table-auto w-full bg-gray-900 rounded-lg shadow text-sm md:text-base">
                
                <tbody>
                    {#each form?.resultis.body.data.txs as txid}
                        <tr class="text-white">
                            <td class="border-t border-gray-700 px-4 py-2 break-words">{txid}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <!-- Mobile View -->
        <div class="block md:hidden">
            <div class="bg-gray-900 rounded-lg shadow mb-10">
                {#each form?.resultis.body.data.txs as txid}
                    <div class="border-t border-gray-700 px-4 py-2 text-white break-words">
                        {txid}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
<div class=" lg:hidden h-[15vh]"></div>
