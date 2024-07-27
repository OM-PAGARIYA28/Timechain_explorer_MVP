<script>
    export let form;
</script>
{#if form?.called}
<section class="bg-white dark:bg-gray-900 mb-4">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {#if form?.resultis.type === 'transaction'}
            <div class="text-left">
                <p class="pt-2 text-green-600 mb-5 text-3xl font-bold">Transaction fetched successfully!</p>
                <p class="text-white mb-2"><strong class="text-yellow-600">Transaction Id:</strong> {form?.resultis.body.data.txid}</p>
                <p class="text-white mb-2"><strong class="text-yellow-600">Amount:</strong> {form?.resultis.body.data.amount}</p>
                <p class="text-white mb-2"><strong class="text-yellow-600">BlockHash:</strong> {form?.resultis.body.data.blockHash}</p>
                
                <p class="text-white mt-2"><strong class="text-yellow-600">Inputs:</strong></p>
                <div class= "p-2 rounded whitespace-pre-wrap overflow-auto">
                    {#each form?.resultis.body.data.inputs as input}
                        <p class="text-white">{JSON.stringify(input, null, 2)}</p>
                    {/each}
                </div>
    
                <p class="text-white mt-2"><strong class="text-yellow-600">Outputs:</strong></p>
                <div class="p-2 rounded whitespace-pre-wrap overflow-auto">
                    {#each form?.resultis.body.data.outputs as output}
                        <p class="text-white">{JSON.stringify(output, null, 2)}</p>
                    {/each}
                </div>
            </div>
        {/if}
    
    
    
    

    {#if form?.called && form?.resultis.type === 'block'}
    <div class="text-left">
        <p class="pt-2 text-green-600 mb-5 text-3xl font-bold">Block details fetched successfully!</p>
        <p class="text-white mb-2"><strong class="text-yellow-600">Block Hash:</strong> {form?.resultis.body.data.blockHash}</p>
        <p class="text-white mb-2"><strong class="text-yellow-600">Block Height:</strong> {form?.resultis.body.data.blockHeight}</p>
        <p class="text-white mb-2"><strong class="text-yellow-600">Timestamp:</strong> {form?.resultis.body.data.timestamp}</p>
        <p class="text-white mb-2"><strong class="text-yellow-600">Number of Transactions:</strong> {form?.resultis.body.data.numberOfTransactions}</p>
        <p class="text-white mb-2"><strong class="text-yellow-600">Size:</strong> {form?.resultis.body.data.size}</p>

        <p class="text-white mt-2"><strong class="text-yellow-600">Transaction Ids:</strong></p>
        <ul>
            {#each form?.resultis.body.data.txs as txid}
                <li class="text-white">{txid+", "}</li>
            {/each}
        </ul>
    </div>
{/if}

{#if form?.called && form?.resultis.type === 'address'}
    <div class="text-left">
        <p class="pt-2 text-green-600 mb-5 text-3xl font-bold">Address details fetched successfully!</p>
        <p class="text-white mb-2"><strong class="text-yellow-600">Address:</strong> {form?.resultis.body.data.Address}</p>
        <p class="text-white mb-2"><strong class="text-yellow-600">Balance:</strong> {JSON.stringify(form?.resultis.body.data.Balance)}</p>
        <p class="text-white mb-2"><strong class="text-yellow-600">History:</strong></p>
        <ul>
            {#each form?.resultis.body.data.History as historyItem}
                <li class="text-white">{JSON.stringify(historyItem)}</li>
            {/each}
        </ul>
    </div>
{/if}

{#if form?.called && form?.resultis.type === 'error'}
    <div class="text-left">
        <p class="pt-2 text-red-600 text-3xl font-bold">
            <strong class="text-white">Error:</strong> 'Invalid Input'
        </p>
    </div>
{/if}

    </div>
</section>
{/if}
