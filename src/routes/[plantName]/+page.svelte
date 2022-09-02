<script>
  export let data;
</script>

<!--   main   -->


<div class="wrapper">
  <div class="names">
    <h1>{data.name}</h1>
    <h2>{data.latinName}</h2>
    <a href="/" class='back'><p>◀</p></a>
  </div>
  <div class="image">
    <div class="outline"></div>
    <img src="/plantsThumbnails/{data.name.toLowerCase()}.jpg" alt="">
  </div>
  <div class="text">
    <p>{data.description}</p>
  </div>
</div>


<!--          -->


<style>
  .wrapper {
  margin: 100px auto;
  max-width: 600px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}

.names {
  position: relative;
  display: grid;
  justify-items: center;
}

.text {
  grid-column: 1/3;
  margin-top: 5rem;
  padding: 10px;

  color: white;
  border-radius: 4px;
  background-color: rgb(26, 26, 26);
}

h2 {
  color: gray;
  font-size: 0.9rem;
}

.image {
  position: relative;
  transition: 80ms;
}

.image:hover {
  filter: saturate(1.5);
  transform: scale(1.05);
}

img {
  border-radius: 4px;
}

.outline {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 4px;

  transform: scale(0.95);
  opacity: 0.8;
}

.back {
  position: absolute;

  top: 150%;


  font-size: 1.4rem;

  width: 30px;
  height: 30px;

  border-radius: 50%;

  color: white;
  background-color: rgb(26, 26, 26);
}

.back p {
  position: absolute;
  left: 45%;
  top: 45%;
  transform: translate(-50%, -50%);
}

.back:hover {
  cursor: pointer;
  filter:brightness(2);

}


@media screen and (max-width: 600px) {
  .wrapper {
    grid-template-columns: 1fr;
  }

  .text {
    max-width: 300px;
    grid-column: 1/2;
  }

  .names {
    margin-top: 10px;
    order: 1;
  }

  .text {
    order: 3;
  }

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>




