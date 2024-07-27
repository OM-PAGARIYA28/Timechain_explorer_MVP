<script>
    export let form;
</script>

<div class="p-6 bg-gray-800 rounded-lg shadow-lg">
    <p class="pt-2 text-green-600 mb-5 text-3xl font-bold md:text-4xl">Address details fetched successfully!</p>
    
    <div class="mb-4">
        <p class="text-white mb-2 text-lg md:text-base"><strong class="text-yellow-600">Address:</strong></p>
        <p class="bg-gray-900 text-white p-2 rounded text-sm md:text-base">{form?.resultis.body.data.Address}</p>
    </div>
    
    <div class="mb-4">
        <p class="text-white mb-2 text-lg md:text-base"><strong class="text-yellow-600">Balance:</strong></p>
        <div class="overflow-x-auto">
            <table class="table-auto w-full bg-gray-900 rounded-lg shadow text-sm md:text-base">
                <thead>
                    <tr class="text-left">
                        <th class="border-t border-gray-700 px-4 py-2 text-yellow-600">Confirmed</th>
                        <td class="border-t border-gray-700 px-4 py-2 text-white">{form?.resultis.body.data.Balance.confirmed}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-left">
                        <th class="border-t border-gray-700 px-4 py-2 text-yellow-600">Unconfirmed</th>
                        <td class="border-t border-gray-700 px-4 py-2 text-white">{form?.resultis.body.data.Balance.unconfirmed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div>
        <p class="text-white mb-2 text-lg md:text-base"><strong class="text-yellow-600">History:</strong></p>
        <div class="overflow-x-auto">
            <table class="table-auto w-full bg-gray-900 rounded-lg shadow text-sm md:text-base">
                <thead>
                    <tr class="text-left text-yellow-600">
                        <th class="px-4 py-2">Transaction Hash</th>
                        <th class="px-4 py-2">Height</th>
                    </tr>
                </thead>
                <tbody>
                    {#each form?.resultis.body.data.History as historyItem}
                        <tr class="text-white whitespace-pre-wrap break-all">
                            <td class="border-t border-gray-700 px-4 py-2 text-left">{historyItem.tx_hash}</td>
                            <td class="border-t border-gray-700 px-4 py-2 text-left">{historyItem.height}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class=" lg:hidden h-[15vh]"></div>

