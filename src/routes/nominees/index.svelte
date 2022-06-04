<script>
  import NomineeList from './_NomineeList.svelte';
  import * as importedBios from '$lib/data';

  const bios = Object.values(importedBios).sort((a, b) => a.name > b.name ? 1 : -1);

  const elders = bios.filter((bio) => bio.role === 'Elder');

  const govBoard = bios.filter((bio) => {
    return ['Member at Large', 'Treasurer', 'Financial Secretary'].includes(bio.role);
  });

  const deacon_chair = bios.filter((bio) => /Deacon Chair/.test(bio.role));

  const deacons = bios.filter((bio) => /Deacon/.test(bio.role));

</script>

<h1>Nominees</h1>

<p>
  Click on a nominee below to view their bio.
</p>

<h2>Elder Nominees</h2>
<NomineeList bios={elders} />

<h2>Governing Board Nominees</h2>
<NomineeList bios={govBoard} />

<h2>Deacon Chair Nominee</h2>
<NomineeList bios={deacon_chair} />

<h2>Deacon Nominees</h2>
<NomineeList bios={deacons} />
