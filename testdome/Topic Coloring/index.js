function newMessage(topicName) {
   $('p[data-topic-name='+topicName+']').css('background-color' , 'red')
}


document.body.innerHTML = `<div>
  <p data-topic-name="discussion">General discussion</p>
  <p data-topic-name="bugs">Bugs</p>
  <p data-topic-name="animals">Animals</p>
</div>`;
newMessage("discussion");
console.log(document.body.innerHTML);
