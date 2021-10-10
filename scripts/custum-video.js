document.querySelector('#playPause').onclick = playPause
document.querySelector('#volume').oninput = videoVolume
const video = document.querySelector('#video-player')
const progress = document.querySelector('#progress')
video.ontimeupdate = progressUpdate
progress.onclick = videoRewind

function playPause() {
  video.paused ? video.play() : video.pause()
}

function videoVolume() {
  const v = this.value
  video.volume = v / 100
}

function progressUpdate() {
  const d = video.duration
  const c = video.currentTime
  progress.value = (100 * c) / d
}

function videoRewind(e) {
  this.value = (100 * e.offsetX) / this.offsetWidth
  video.pause()
  video.currentTime = video.duration * (e.offsetX / this.offsetWidth)
  video.play()
}

// function speedUp() {
//     video.play()
//     video.playbackRate = 1.5
// }
