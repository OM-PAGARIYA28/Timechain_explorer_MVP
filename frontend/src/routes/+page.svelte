<script>
    import Address from "$lib/components/Address.svelte";
    import Block from "$lib/components/Block.svelte";
  import Error from "$lib/components/Error.svelte";
    import Transaction from "$lib/components/Transaction.svelte";
  
    export let form;
  </script>
  
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