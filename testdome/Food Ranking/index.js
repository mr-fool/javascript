function setup() {
  $.fn.moveUp = function() {
    before = $(this).prev();
    $(this).insertBefore(before)
  }

  $.fn.moveDown = function() {
    after = $(this).next();
    $(this).insertAfter(after)
  }

  $("button:contains('Up!')").click(function() {
    console.log('up', $(this))
    $(this).parent().moveUp()
  })

  $("button:contains('Down!')").click(function() {
    $(this).parent().moveDown()
  })
}


document.body.innerHTML = `<ol>
  <li><button>Up!</button>Taco<button>Down!</button></li>
  <li><button>Up!</button>Pizza<button>Down!</button></li>
  <li><button>Up!</button>Eggs<button>Down!</button></li>
</ol>`;

setup();
$("button").get(2).click();

console.log(document.body.innerHTML);
