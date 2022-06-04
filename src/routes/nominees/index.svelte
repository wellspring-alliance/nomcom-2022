<script>
  import bios from '$lib/data';
  import NomineeList from './_NomineeList.svelte';

  const elders = bios.filter((bio) => bio.role === 'Elder');

  const govBoard = bios.filter((bio) => {
    return ['Member at Large', 'Treasurer', 'Financial Secretary'].includes(bio.role);
  });

  const deacons = bios.filter((bio) => /Deacon/.test(bio.role));

</script>

<h1>Nominees</h1>

<p>
  Click on a nominee below to view their bio. We also welcome you to read the
  <a href="/vision">vision, context and commitments</a> that have guided us in our work,
  as well as the <a href="faq">FAQ</a> that answers some questions we received or anticipated.
</p>

<h2>Elder Nominees</h2>
<p class="alongside">
  If elected, the nominees below would serve alongside <b>Pastor Mitch</b> and our other
  current elders whose term continues through June 2023: <b>Kevin Hector</b>, <b>John Jackson</b>,
  <b>Brian Maruyama</b>, <b>Brian Stoffer</b>.
</p>
<NomineeList bios={elders} />

<h2>Governing Board Nominees</h2>
<p class="alongside">
  If elected, the nominees below would serve alongside our other current Governing Board members
  whose term continues through June 2023: <b>Linda Oury</b> (Member at Large), <b>Esther Kang</b>
  (Secretary).
</p>
<NomineeList bios={govBoard} />

<h2>Deacon Nominees</h2>
<p class="alongside">
  If elected, the nominees below would serve alongside our other current Deacon Board members
  whose term continues through June 2023: <b>Keren Lee</b>, <b>Roberta Lee</b>,
  <b>Jennifer McClure</b>, <b>Greg Schrad</b>, <b>Kathy Williams</b>, <b>Jerry Woehr</b>.
</p>
<NomineeList bios={deacons} />

<br /><br /><br />

<style>
  h2 {
    margin-bottom: 0.25em;
  }

  .alongside {
    margin: 0 0 1.5em 0;
    font-size: 0.875rem;
    color: #222;
  }
</style>