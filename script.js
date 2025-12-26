let i=0, imgArr=new Array(); 
imgArr[0]= "https://www.ncyu.edu.tw/Uploads/Icon/8682d59e-1fb4-4588-b0a7-73cbfe4c3783.png";
imgArr[1]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvN5RfzsgMmPEWlQGWhm3ZzHHwdYoro4HmQ&s";
imgArr[2]= "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/1181px-National_Chiayi_University_seal.svg.png";

function showImg() {
  document.getElementById('ico').src = imgArr[i];
  i = (i+1) % 3;
}

function show() {
  setInterval(showImg, 2000);
}