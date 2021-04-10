window.addEventListener("DOMContentLoaded", function(e) {
    var highlight = new Hilitor("text");
    highlight.setMatchType("left");
    document.getElementById("keywords").addEventListener("keyup", function(e) {
      highlight.apply(this.value);
    }, false);
  }, false);
