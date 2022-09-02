<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<style>

  nav {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 20px;

  }

  a {
    position: relative;
    text-decoration: none;
    color: rgb(47, 47, 47);
  }


  a:hover {
    color: orange;
  }

  a::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    top: -40px;
    left: -4px;
    background-color: rgb(47, 47, 47);
    transition: 100ms;
    opacity: 0;
  }

  a:hover::before {
    opacity: 1;
    top: -25px;
  }
</style>

<slot></slot>