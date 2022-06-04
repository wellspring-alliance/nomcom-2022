<script context="module">
  import bios from '$lib/data';

  export async function load({ params }) {
    const bio = bios.find((b) => b.path === params.id);
    if (bio) return { props: { bio } };

    return {
      status: 404,
      error: `Nominee bio /${params.id} not found`
    };
  }
</script>

<script>
  export let bio;

  $: term = bio.one_year ? '1 year' : '2 years';
</script>

<a href="/nominees">« back to Nominees</a>

<img src="/photos/{bio.path}.jpg" alt={bio.name} />
<h2>{bio.name}</h2>
<div><b>Nominated for:</b> {bio.role}</div>
<div><b>Term length:</b> {term}</div>

<h3>How long have you attended Wellspring?</h3>
<p>{@html bio.questions[0]}</p>

<h3>What are your spiritual gifts and how have you served in churches in the past?</h3>
<p>{@html bio.questions[1]}</p>

<h3>How do you hope to serve in this season?</h3>
<p>{@html bio.questions[2]}</p>

{#if bio.questions[3]}
  <h3>What else would you like your Wellspring family to know about you?</h3>
  <p>{@html bio.questions[3]}</p>
{/if}

<style>
  h3 {
    margin-top: 2em;
    margin-bottom: 0;
  }

  p {
    margin-top: 0.5em;
  }

  img {
    float: right;
    width: 150px;
    border-radius: 50%;
  }
</style>
