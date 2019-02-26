function setVideoSize(i, video){
  try{
    $(video).attr("width", $(video).width() + "px");
    let height = $(video).width() * 0.55;
    //debugger;
    $(video)
      .css("height", height + "px")
      .attr("height", height);
    //debugger;
    //$(video).attr("src", $(video).attr("src"))
  } catch(err){
    console.error(err);
  }
}
$(".video").find("iframe").each(setVideoSize);
$(window).on("resize", (e) => {
  $(".video").find("iframe").each(setVideoSize);
});
