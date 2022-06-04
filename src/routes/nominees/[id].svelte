<script context="module">
  import * as bios from '$lib/data';

  export async function load({ params }) {
    const bio = bios[params.id];
    if (bio) return { props: { bio } };

    return {
      status: 404,
      error: `Nominee bio /${params.id} not found`
    };
  }
</script>

<script>
  export let bio;
</script>

<a href="/nominees">« back to Nominees</a>

<h2>{bio.name}</h2>
