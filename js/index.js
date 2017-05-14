console.log('Pull photos from Flickr');

$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=kitten,cute&size=b&lang=en-us&format=json&jsoncallback=?", function(data) {

  var count = 1;
  var div = document.getElementById("images");
  div.innerHTML = div.innerHTML + "<div class='row'>";
  
  $.each(data.items, function(i, item) {

    var image = (item.media.m); 
    div.innerHTML = div.innerHTML + "<div class='col-md-3' style='background-image: url(" + image + ")'/>";
    console.log('Count: ' + count + ' count%4=' + count%4);
    if (count % 4 === 0) {
      div.innerHTML = div.innerHTML + "</div><div class='row'>"
    }
    count++;
  });
  div.innerHTML = div.innerHTML + "</div>";

}).error(function(data) {
  console.log("Error!");
});

console.log('finished');