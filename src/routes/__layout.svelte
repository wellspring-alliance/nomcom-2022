<script>
  import { page } from '$app/stores';
  import '../app.css';

  function isPage(path) {
    return path === $page.url.pathname;
  }
</script>

<div class="container">
  <header>
    <div>
      <a href="/"><img src="/wellspring-logo.png" alt="Wellspring Logo"></a>
      <h1>Nominating Committee 2022</h1>
    </div>
    <nav>
      <a href="/" class:current={isPage('/')}>Home</a>
      <a href="/vision" class:current={isPage('/vision')}>Vision</a>
      <a href="/positions" class:current={isPage('/positions')}>Positions</a>
      <a href="/survey" class:current={isPage('/survey')}>Survey</a>
    </nav>
  </header>

  <main>
    <slot />
  </main>
</div>


<style>
  .container {
    max-width: 960px;
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
    font-weight: 300;
    font-size: 2rem;
    margin: 1rem 2rem;
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
    color: #00a668;
  }

  nav a.current {
    color: #00a668;
    font-weight: bold;
    cursor: default;
  }

  main {
    padding: 1rem 2rem;
  }
</style>