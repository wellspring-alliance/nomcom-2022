<script>
  import participantInfo from '$lib/participantInfo';

  const codaURL = import.meta.env.VITE_CODA_RESOURCE_URL;
  const codaApiKey = import.meta.env.VITE_CODA_API_TOKEN;

  let name = '';
  let selectedRoles = [];
  let reason = '';

  const roles = [
    'Elder', 'Member at Large', 'Treasurer', 'Financial Secretary', 'Deacon', 'Not sure / Any'
  ];

  async function handleSubmit() {
    const cells = [
        { "column": "c-y_qumJ4J1z", "value": "web" },
        { "column": "c-UZJv_f3hoh", "value": name },
        { "column": "c-6MP3FwbzvB", "value": selectedRoles.join(', ') },
        { "column": "c-0eTQB6DTlb", "value": reason },
        { "column": "c-SHqzNdYZXV", "value": $participantInfo.name },
        { "column": "c-p8iRn2wHCj", "value": $participantInfo.email }
    ];

    const payload = { rows: [ { cells: cells } ] };

    const response = await fetch(codaURL, {
      method: 'post',
      body:    JSON.stringify(payload),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + codaApiKey
      },
    });
    const json = await response.json();
    console.log(json);
  }
</script>

<h1>2022 Leaders Survey</h1>

<h2>Candidate Info</h2>

<p>
  Now tell us who you are recommending and why. You will be able to submit
  additional recommendations on the next page.
</p>

<form on:submit|preventDefault={handleSubmit}>
  <label class="label-block" for="name">
    Name
  </label>
  <input
    bind:value={name}
    id="name"
    type="text"
    autocomplete="off"
    required
  />

  <div class="label-block">
    What positions do you recommend this candidate for?
    <a on:click|preventDefault href="#modal">view descriptions</a>
  </div>
  <div class="checkbox-group">
    {#each roles as role}
      <label>
        <input bind:group={selectedRoles} type="checkbox" value={role}>
        {role}
      </label>
    {/each}
  </div>

  <label class="label-block" for="reason">
    Why do you recommend this candidate?
  </label>
  <textarea bind:value={reason} rows="8" id="reason" autocomplete="off" required />

  <p>
    <a class="btn" href="/survey">Back</a>
    <button type="submit" class="btn btn-primary">
      Submit
    </button>
  </p>
</form>

<style>
  .label-block a {
    font-weight: normal;
    display: inline-block;
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
  }

  .checkbox-group label {
    width: 200px;
    padding: 0.1ex 0;
    white-space: nowrap;
  }
</style>
