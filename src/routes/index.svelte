<script context="module">
  export const prerender = false;
</script>

<script>
  export let subjects = [];
</script>

<section>
    <h1>Working ok</h1>
    <div>
        {#each subjects as id}
            <h4>{id}</h4>
        {/each}
    </div>
</section>
