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

<img src="/photos/{bio.path}.jpg" alt={bio.name} />
<h2>{bio.name}</h2>

<h3>How long have you attended Wellspring?</h3>
<p>{bio.questions[0]}</p>

<h3>What are your spiritual gifts and how have you served in churches in the past?</h3>
<p>{bio.questions[1]}</p>

<h3>How do you hope to serve in this season?</h3>
<p>{bio.questions[2]}</p>

<h3>What else would you like your Wellspring family to know about you?</h3>
<p>{bio.questions[3]}</p>

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
