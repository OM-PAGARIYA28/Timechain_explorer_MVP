<script>
    export let form;
</script>

<div class="p-6 bg-gray-800 rounded-lg shadow-lg text-left">
    <p class="pt-2 text-green-600 mb-5 text-3xl font-bold">Transaction fetched successfully!</p>
    
    <div class="mb-4">
        <table class="table-auto w-full bg-gray-900 rounded-lg shadow">
            <thead>
                <tr class="text-left text-yellow-600">
                    <th class="px-4 py-2">Field</th>
                    <th class="px-4 py-2">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-white">
                    <td class="border-t border-gray-700 px-4 py-2">Transaction Id</td>
                    <td class="border-t border-gray-700 px-4 py-2">{form?.resultis.body.data.txid}</td>
                </tr>
                <tr class="text-white">
                    <td class="border-t border-gray-700 px-4 py-2">Amount</td>
                    <td class="border-t border-gray-700 px-4 py-2">{form?.resultis.body.data.amount}</td>
                </tr>
                <tr class="text-white">
                    <td class="border-t border-gray-700 px-4 py-2">BlockHash</td>
                    <td class="border-t border-gray-700 px-4 py-2">{form?.resultis.body.data.blockHash}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="mb-4">
        <p class="text-white mb-2 text-left"><strong class="text-yellow-600">Inputs:</strong></p>
        {#if form?.resultis.body.data.inputs.length > 0}
            {#each form?.resultis.body.data.inputs as input, index}
                <div class="mb-4 bg-gray-900 rounded-lg shadow p-4">
                    <p class="text-yellow-600 font-bold mb-2">Input {index + 1}</p>
                    <table class="table-auto w-full bg-gray-800 rounded-lg shadow">
                        <tbody>
                            <tr class="text-white">
                                <td class=" px-4 py-2 font-bold">Coinbase</td>
                                <td class=" px-4 py-2 whitespace-pre-wrap break-all">{input.coinbase}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">Txid</td>
                                <td class="border-t border-gray-700 px-4 py-2 whitespace-pre-wrap break-all">{input.txid}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">Vout</td>
                                <td class="border-t border-gray-700 px-4 py-2">{input.vout}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">ScriptSig Asm</td>
                                <td class="border-t border-gray-700 px-4 py-2 whitespace-pre-wrap break-all">{input.scriptSig.asm}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">ScriptSig Hex</td>
                                <td class="border-t border-gray-700 px-4 py-2 whitespace-pre-wrap break-all">{input.scriptSig.hex}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">Sequence</td>
                                <td class="border-t border-gray-700 px-4 py-2">{input.sequence}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            {/each}
        {:else}
            <p class="text-white">No inputs available.</p>
        {/if}
    </div>

    <div>
        <p class="text-white mb-2 text-left"><strong class="text-yellow-600">Outputs:</strong></p>
        {#if form?.resultis.body.data.outputs.length > 0}
            {#each form?.resultis.body.data.outputs as output, index}
                <div class="mb-4 bg-gray-900 rounded-lg shadow p-4">
                    <p class="text-yellow-600 font-bold mb-2">Output {index + 1}</p>
                    <table class="table-auto w-full bg-gray-800 rounded-lg shadow">
                        <tbody>
                            <tr class="text-white">
                                <td class=" px-4 py-2 font-bold">Value</td>
                                <td class=" px-4 py-2">{output.value}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">N</td>
                                <td class="border-t border-gray-700 px-4 py-2">{output.n}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">ScriptPubKey Asm</td>
                                <td class="border-t border-gray-700 px-4 py-2 whitespace-pre-wrap break-all">{output.scriptPubKey.asm}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">ScriptPubKey Hex</td>
                                <td class="border-t border-gray-700 px-4 py-2 whitespace-pre-wrap break-all">{output.scriptPubKey.hex}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">Required Signatures</td>
                                <td class="border-t border-gray-700 px-4 py-2">{output.scriptPubKey.reqSigs}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">Type</td>
                                <td class="border-t border-gray-700 px-4 py-2">{output.scriptPubKey.type}</td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">Addresses</td>
                                <td class="border-t border-gray-700 px-4 py-2">
                                    {#each output.scriptPubKey.addresses as address}
                                        <p>{address}</p>
                                    {/each}
                                </td>
                            </tr>
                            <tr class="text-white">
                                <td class="border-t border-gray-700 px-4 py-2 font-bold">Is Truncated</td>
                                <td class="border-t border-gray-700 px-4 py-2">{output.scriptPubKey.isTruncated ? 'True' : 'False'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            {/each}
        {:else}
            <p class="text-white">No outputs available.</p>
        {/if}
    </div>
</div>