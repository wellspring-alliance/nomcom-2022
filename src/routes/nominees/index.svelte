<script>
  import * as importedBios from '$lib/data';
  const bios = Object.values(importedBios);
</script>

<h1>Nominations</h1>

<p>
  This page will contain all of the nominees. Clicking on one will take you to a nominee bio.
</p>

<ul>
  {#each bios as bio (bio.name)}
    <li>
      <img src="/photos/{bio.photo}" alt={bio.name} />
      {bio.name}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 150px;
    text-align: center;
  }

  li img {
    width: 100%;
    border-radius: 50%;
  }
</style>
