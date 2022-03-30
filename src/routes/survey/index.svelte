<script>
  import participantInfo from '$lib/participantInfo';
</script>

<h1>2022 Leaders Survey</h1>

<h2>Participant Info</h2>

<p>
  Please share your information so we know who this nomination is from.
</p>

<label class="label-block" for="name">
  Your Name
</label>
<input
  bind:value={$participantInfo.name}
  id="name"
  type="text"
  autocomplete="name"
  required
/>

<label class="label-block" for="email">
  Your Email
</label>
<input
  bind:value={$participantInfo.email}
  id="email"
  type="email"
  autocomplete="email"
  required
/>

<div class="contact">
  Are you open to being contacted by the Nominating Committee about your recommendations?
  <label>
    <input bind:checked={$participantInfo.contact} type="checkbox" /> Yes
  </label>
</div>

<p>
  <a class="btn" href="/">Back</a>
  <a class="btn btn-primary" href="/survey/step2">Continue</a>
</p>

<style>
  .contact {
    margin-top: 2em;
  }

  .contact label {
    display: block;
  }
</style>