<script>
  import * as importedBios from '$lib/data';
  const bios = Object.values(importedBios);
</script>

<h1>Nominations</h1>

<p>
  This page will contain all of the nominees. Clicking on one will take you to a nominee bio.
</p>

<div class="nominee-list">
  {#each bios as bio (bio.name)}
    <a href="/nominees/{bio.path}">
      <img src="/photos/{bio.path}.jpg" alt={bio.name} />
      {bio.name}
    </a>
  {/each}
</div>

<style>
  .nominee-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
  }

  a {
    display: block;
    width: 150px;
    text-align: center;
    color: black;
    text-decoration: none;
  }

  a img {
    width: 100%;
    border-radius: 50%;
  }
</style>
