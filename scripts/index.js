function setVideoSize(video){
  video.width = window
    .getComputedStyle(video)
    .getPropertyValue("width");
  let height = +(/[\d\.]+/.exec(video.width)[0]) * 0.55;
  video.style.height = height + "px";
  video.height = height;
}
document
  .querySelectorAll(".video")
  .forEach(el => {
    setVideoSize(el.firstElementChild);
  });
window.addEventListener("resize", (e) => {
  document
    .querySelectorAll(".video")
    .forEach(el => {
      setVideoSize(el.firstElementChild);
    })
})
