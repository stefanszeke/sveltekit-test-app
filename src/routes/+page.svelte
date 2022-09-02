<svelte:head>
    <title>SvelteKit test-app</title>
</svelte:head>

<script>
  import { plants } from "../store/myStore";
</script>



<!--   main   -->



<div class="wrapper">

  <h1>Welcome to SvelteKit Plants</h1>

  <div class="plants-container">

    {#each $plants as plant}
    <a href="/{plant.name}" class="plant-link">
        <div class='plant-box'>
  
            <div class="plant-box-outline">
            </div>
            <h2>{plant.name}</h2>
            <img src="/plantsThumbnails/{plant.name.toLowerCase()}.jpg" alt="">
  
        </div>
      </a>
    {/each}
  </div>

</div>



<!--   main   -->

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h1 {
  color:orange;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper {
  margin: 20px auto;
  max-width: 700px;

}

.plants-container {

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}

.plant-box {
  position: relative;
  height: 200px;


}

.plant-box-outline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 6px;
  box-shadow: 0 0 5px 2px gray;
  transition: 100ms;
}

.plant-link {
  text-decoration: none;
  color: rgb(57, 57, 57);
}

.plant-box img {
  position: absolute;
  width: 60%;

  top:30%;
  left: 50%;
  transform: translateX(-50%);


  border-radius: 50%;
  transition: 100ms;
}

.plant-box h2 {
  z-index: 2;
  position: absolute;
  top:10%;
  left: 50%;
  transform: translateX(-50%);
  transition: 80ms;
}

.plant-box:hover img {
  top:26%;
  transform: translateX(-50%) scale(1.6);
}

.plant-box:hover .plant-box-outline {
  transform: scale(0.8);
}

.plant-box:hover h2 {
  color: white;
  text-shadow: 0px 0px 5px rgb(42, 42, 42);
  top: 43%;
}


@media screen and (max-width: 700px) {
  .wrapper {
    margin: 20px 50px;
  }

  .plants-container {
    grid-template-columns: 1fr 1fr;
  }

  .plant-box img {
    width: 45%;
  }


}

@media screen and (max-width: 450px) {


  .plants-container {
    grid-template-columns: 1fr;
  }

  .plant-box img {
    width: 35%;
  }
}

</style>

