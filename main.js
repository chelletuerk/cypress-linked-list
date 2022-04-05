var $userTitleInput = $('.title-input');
var $userURLInput = $('.url-input');

$('.enter').on('click', function() {
  var title = $userTitleInput.val();
  var url = $userURLInput.val();
  var isValid = validateURL(url);
  if(!isValid) {
    alert("Your URL isn't valid. Try something like \n http://www.farmersonly.com/");
    return;
  }
  $userTitleInput.val("");
  $userURLInput.val("");

  checkEnter();

  $('.bookmarks').append(" \
    <div class='card'> \
    <h2 class='bookmark-title'>"+title+"</h2></br> \
    <a href="+url+" class='bookmark-url'>"+url+"</a></br> \
    <button class='bookmark-read'>Read</button> \
    <button class='bookmark-remove'>Delete</button> \
    </div>");

  updateCardCounter();
});

$('.bookmarks').on('click', '.bookmark-read', function() {
  $(this).closest('div').toggleClass('read');
  updateCardCounter();
});

$('.bookmarks').on('click', '.bookmark-remove', function() {
  $(this).closest('div').remove();
  updateCardCounter();
});

$('.clear-read').on('click', function() {
  $('.read').remove();
  updateCardCounter();
});

$('input').on('keyup', function() {
  checkEnter();
});

function checkEnter() {
  if ($userTitleInput.val() === "" || $userURLInput.val() === "" ) {
    $('.enter').prop('disabled', true);
  } else {
    $('.enter').prop('disabled', false);
  }
}

function updateCardCounter() {

  var cardNum = $('.card').length;
  var readNum = $('.read').length;
  var unreadCards = cardNum - readNum;
  $('.card-counter').text(cardNum);
  $('.read-counter').text(readNum);
  $('.unread-counter').text(unreadCards);
}


function validateURL(url) {
  var urlRegex = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/
  return urlRegex.test(url);
}

checkEnter();
updateCardCounter();
