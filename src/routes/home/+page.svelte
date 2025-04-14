<script>

  let currentImageIdx = 0;
  let idx = 1;
  let selectedPhoto = $state('');
  let { data, children } = $props();
  selectedPhoto = data.photos[currentImageIdx];

  function nextImage(evt) {
    console.log('next clicked >');
    currentImageIdx++;
    selectedPhoto = data.photos[currentImageIdx];
    console.log('Current image index: ', currentImageIdx);
  }

  function previousImage(evt) {
    console.log('previous clicked <');
    safeDecrement();
    selectedPhoto = data.photos[currentImageIdx];
    console.log('Current image index: ', currentImageIdx);
  }

  function safeDecrement() {
    if(currentImageIdx > 0) {
      currentImageIdx--;
    }
  }

  function keyDown(evt) {
    switch(evt.keyCode) {
      case 37:
      // left
      safeDecrement();
      selectedPhoto = data.photos[currentImageIdx];
      console.log('Current image index: ', currentImageIdx);
      break;
      
      case 39:
      // right
      currentImageIdx++;
      selectedPhoto = data.photos[currentImageIdx];
      console.log('Current image index: ', currentImageIdx);
      break;
    }
  }

</script>

<div class="hero bg-base-200 min-h-screen" aria-role="photo-selector" onkeydown={keyDown}>
    <div class="hero-content text-start">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-left">upload a photo</h1>
        <p class="py-6 text-left">
          Let a drunk incompetent contemporary (AI) artist edit your photo
        </p>
<form method="post" enctype="multipart/form-data">
  <!-- carousel -->
      <div class="carousel w-full">
        {#each data.photos as photo, i }
        <div id="slide{i+1}" class="carousel-item relative w-full">
          <img src="{ photo }" class="w-full" alt="photo" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide{i}" class="btn btn-circle" onclick={previousImage}>❮</a>
            <a href="#slide{i+2}" class="btn btn-circle" onclick={nextImage}>❯</a>
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

        <input type="hidden" name="selectedPhoto" bind:value={selectedPhoto} />
        <button class="btn btn-primary my-4" type="submit">Ruin my photo!</button>
      </form>
      </div>
      
    </div>
  </div>