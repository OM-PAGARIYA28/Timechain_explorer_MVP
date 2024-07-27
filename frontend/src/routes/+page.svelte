<script>
    import Address from "$lib/components/Address.svelte";
    import Block from "$lib/components/Block.svelte";
  import Error from "$lib/components/Error.svelte";
    import Transaction from "$lib/components/Transaction.svelte";
  
    export let form;
  </script>
  {#if !form || form.called == false}
  <div class="flex flex-col items-center justify-center min-h-[84vh] bg-gray-800 p-6">
    <div class="max-w-2xl w-full bg-gray-900 rounded-2xl shadow-2xl p-12 text-center overflow-hidden transform transition-all duration-500 hover:scale-105">
      <h1 class="text-white text-4xl font-bold mb-4">Welcome to MVP of Timechain Explorer</h1>
      <p class="text-gray-300 text-lg mb-6">You can search for blocks, addresses, and transactions of WhatsOnChain and get all the details you need.</p>
      <p class="text-white text-md mb-6">Enter a block, address, or transaction hash in the search bar above to begin.</p>
    </div>
  </div>
{/if}

  {#if form?.called}
    <section class="bg-white dark:bg-gray-900 mb-4">
      <div
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {#if form?.resultis.type === "transaction"}
          <Transaction {form} />
        {/if}
  
        {#if form?.resultis.type === "block"}
          <Block {form} />
        {/if}
  
        {#if form?.resultis.type === "address"}
          <Address {form} />
        {/if}
  
        {#if form?.resultis.type === "error"}
          <Error />
        {/if}
      </div>
    </section>
  {/if}