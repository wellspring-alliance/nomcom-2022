<script>
  import NomineeList from './_NomineeList.svelte';
  import * as importedBios from '$lib/data';

  const bios = Object.values(importedBios).sort((a, b) => a.name > b.name ? 1 : -1);

  const elders = bios.filter((bio) => bio.role === 'Elder');

  const govBoard = bios.filter((bio) => {
    return ['Member at Large'].includes(bio.role);
  });

  const deacons = bios.filter((bio) => bio.role === 'Deacon');

</script>

<h1>Nominees</h1>

<p>
  Click on a nominee below to view their bio.
</p>

<h2>Elder Nominees</h2>
<NomineeList bios={elders} />

<h2>Governing Board Nominees</h2>
<NomineeList bios={govBoard} />

<h2>Deacon Nominees</h2>
<NomineeList bios={deacons} />
