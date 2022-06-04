<script>
  export let bios;
</script>

<div class="nominee-list">
  {#each bios as bio (bio.name)}
    <a href="/nominees/{bio.path}">
      <img src="/photos/{bio.path}.jpg" alt={bio.name} />
      <div class="name">{bio.name}</div>
      <div class="role">{bio.role}</div>
    </a>
  {/each}
</div>

<style>
  .nominee-list {
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
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

  .name {
    color: #222;
    font-weight: bold;
  }

  .role {
    color: #555;
  }

</style>
