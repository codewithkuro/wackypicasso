<script>
  let { data, children } = $props();
</script>

<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-start">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-left">upload a photo</h1>
        <p class="py-6 text-left">
          Let a drunk incompetent contemporary (AI) artist edit your photo
        </p>
<form method="post">
  <!-- carousel -->
      <div class="carousel w-full">
        {#each data.photos as photo }
        <div id="slide1" class="carousel-item relative w-full">
          <img src="{ photo }" class="w-full" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        {/each}
      </div>
<!-- //carousel -->

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Pick a file</legend>
          <input name="filein" type="file" class="file-input" id="filein" />
          <label class="fieldset-label" for="filein">Max size 2MB</label>
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">How should I edit your photo?</legend>
          <input name="promptText" type="text" class="input" placeholder="Make this photo into a cartoon" />          
        </fieldset>

        <button class="btn btn-primary my-4" type="submit">Ruin my photo!</button>
      </form>
      </div>
      
    </div>
  </div>