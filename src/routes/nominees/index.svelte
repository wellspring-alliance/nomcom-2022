<script>
  import NomineeList from './_NomineeList.svelte';
  import * as importedBios from '$lib/data';

  const bios = Object.values(importedBios).sort((a, b) => a.name > b.name ? 1 : -1);
</script>

<h1>Nominees</h1>

<p>
  Click on a nominee below to view their bio.
</p>

<h2>Elder Nominees</h2>
<NomineeList bios={bios.filter((bio) => bio.role === 'Elder')} />

<h2>Member at Large Nominees</h2>
<NomineeList bios={bios.filter((bio) => bio.role === 'Member at Large')} />

<h2>Deacon Nominees</h2>
<NomineeList bios={bios.filter((bio) => bio.role === 'Deacon')} />
