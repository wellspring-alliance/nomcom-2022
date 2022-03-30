<script>
  import participantInfo from '$lib/participantInfo';
  import { goto } from '$app/navigation';

  let name = $participantInfo.name;
  let email = $participantInfo.email;

  function handleSubmit() {
    participantInfo.set({ name, email });
    goto('/survey/step2');
  }
</script>

<h1>2022 Leaders Survey</h1>

<h2>Participant Info</h2>

<p>
  Please share your information so we know who this nomination is from.
</p>

<form on:submit|preventDefault={handleSubmit}>
  <label class="label-block" for="name">
    Your Name
  </label>
  <input
    bind:value={name}
    id="name"
    type="text"
    autocomplete="name"
    required
  />

  <label class="label-block" for="email">
    Your Email
  </label>
  <input
    bind:value={email}
    id="email"
    type="email"
    autocomplete="email"
    required
  />

  <p>
    <a class="btn" href="/">Back</a>
    <button type="submit" class="btn btn-primary">Continue to Candidate Info</button>
  </p>
</form>
