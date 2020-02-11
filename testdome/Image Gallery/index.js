function setup() {
  var items = document.getElementsByClassName("remove");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function removeParentDiv() {
      this.parentNode.remove();
    });
  }
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
