
var drawRainbow = function(rainbow) {
    noFill();
    strokeWeight(5);
    stroke(255, 0, 0);
    arc(rainbow.x, rainbow.y, rainbow.radius, rainbow.radius, 180, 360);
    stroke(250, 200, 0);
    arc(rainbow.x, rainbow.y, rainbow.radius-10, rainbow.radius-10, 180, 360);
    stroke(240, 255, 102);
    arc(rainbow.x, rainbow.y, rainbow.radius-20, rainbow.radius-20, 180, 360);
    stroke(29, 255, 13);
    arc(rainbow.x, rainbow.y, rainbow.radius-30, rainbow.radius-30, 180, 360);
    stroke(122, 155, 255);
    arc(rainbow.x, rainbow.y, rainbow.radius-40, rainbow.radius-40, 180, 360);
};
var Rainbow = function(x,y,radius){
    this.x=x;
    this.y=y;
    this.radius=radius;
};
var Winston = function(Winx,Winy){
    var img=getImage("https://static.wikia.nocookie.net/khanacademy/images/5/55/Winston2.png/revision/latest/zoom-crop/width/360/height/360?cb=20200516210551");
    image(img,Winston.x,Winston.y);
};
background(0, 204, 255);
var First = new Rainbow(200,200,300);
drawRainbow(First);
var Second = new Rainbow(198,300,390);
drawRainbow(Second);
var Third = new Rainbow(200,366,334);
drawRainbow(Third);
var F = new Rainbow(200,401,247);
drawRainbow(F);
var Five = new Rainbow(200,51,137);
drawRainbow(Five);
Winston(107,-87);
text("Image from Khan Academy Wiki", 200, 175);
