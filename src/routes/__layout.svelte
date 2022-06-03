<script>
  import { page } from '$app/stores';
  import '../app.css';

  $: current = $page.url.pathname;
</script>

<div class="container">
  <header>
    <div>
      <a href="/"><img src="/wellspring-logo.png" alt="Wellspring Logo"></a>
      <h1>Nominating Committee</h1>
    </div>
    <nav>
      <a href="/" class:current={current === '/'}>Home</a>
      <a href="/vision" class:current={current === '/vision'}>Vision</a>
      <a href="/nominations" class:current={current === '/nominations'}>Nominations</a>
      <a href="/faq" class:current={current === '/faq'}>FAQ</a>
    </nav>
  </header>

  <main>
    <slot />
  </main>
</div>


<style>
  .container {
    box-sizing: border-box;
    max-width: 768px;
    margin: 0 auto;
    background-color: white;
    min-height: 100vh;
  }

  header {
    margin-top: 1rem;
    background-color: #e2e2e2;
  }

  header > div {
    display: flex;
  }

  header img {
    width: 240px;
    height: auto;
    aspect-ratio: 4.286;
  }

  header h1 {
    font-size: 2rem;
    margin: 0.5em 1em;
  }

  nav {
    display: flex;
  }

  nav a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #555;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  nav a:hover {
    color: var(--wellspring-green);
  }
  
  nav a.current {
    color: var(--wellspring-green);
    font-weight: bold;
    cursor: default;
  }

  main {
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    .container {
      margin: 0 1rem;
    }

    header img {
      width: 200px;
    }

    header h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 576px) {
    .container {
      margin: 0;
    }

    header img {
      width: 180px;
      margin-left: 1em;
    }

    header h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 500px) {
    header img {
      width: 120px;
    }

    header h1 {
      font-size: 1.2rem;
      margin: 0.25em 0.5em;
    }
  }
</style>
