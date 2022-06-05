<script context="module">
  export const prerender = true;
</script>

<script>
  export let subjects = [];

  let materias = subjects;
</script>

<svelte:head>
    <title>Cardline</title>
</svelte:head>

<section>
    <div class="mx-3 text-center m-3">
        <h3>Elegí una materia de Medicina en la UBA:</h3>

        {#each materias as id}
            <div class="h4">
                <a class="badge badge-subject" href={`/${id}/modulos`}>
                    {id.toUpperCase()}
                </a>
            </div>
        {/each}
    </div>
</section>

<style>

</style>
