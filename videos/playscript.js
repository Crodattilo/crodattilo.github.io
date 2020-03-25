console.clear();

var videoEl = document.querySelector('video');
document.querySelector('.video-button').addEventListener('click', 
                                                            function(){
  if(this.dataset.aperture === 'open') {
    this.dataset.aperture = 'closed';
    videoEl.pause();
    videoEl.progress = 0;
  } else {
    this.dataset.aperture = 'open';
    videoEl.play();
  }
});
