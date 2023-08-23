
var to = 'Chỵ Ngưn Fenn';
var gift_url = '';
var gift_image_url = 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/348984380_770403171216179_4982747369923419749_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=h6aJiuaLwGAAX8ZhL5L&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAZtGPwIceKmzDU-3U7y8fIsIU8pn6z8Th8n1QeOA-etQ&oe=64E9B1F0';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show')
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

