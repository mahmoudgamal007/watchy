var myimg=document.getElementById("slidingimage");
var i=2;
myimg.src="assets/slider_images/"+1+".jpg"
var myinterval=setInterval(changepic,3000);
function changepic()
{
    myimg.src="assets/slider_images/"+i+".jpg";
    if(i<5)
    { 
        i++;
    }
    else{
        i=1;
    }   
}
function stop()
{
    clearInterval(myinterval);
}
function goon()
{
    myinterval=setInterval(changepic,3000);
}
function showone()
{
    myimg.src="assets/slider_images/"+1+".jpg"
}
function showtwo()
{
    myimg.src="assets/slider_images/"+2+".jpg"
}
function showthree()
{
    myimg.src="assets/slider_images/"+3+".jpg"
}
function showfour()
{
    myimg.src="assets/slider_images/"+4+".jpg"
}
function showfive()
{
    myimg.src="assets/slider_images/"+5+".jpg"
}
var channels=document.getElementById("channelslist");
    var movielist=document.getElementById("movielist");
function showchannels()
{
     
    // console.log(channels);
    if( channels.style.opacity==1)
    {
    channels.style.opacity=0;
    }
    else{
        channels.style.opacity=1;
        movielist.style.opacity=0
        channels.style.zIndex=99;
        movielist.style.zIndex=-99;
        channels.style.transition="2s";
        }
}
function showmovies()
{
     
    // console.log(movielist);
    if( movielist.style.opacity==1)
    {
    channels.style.opacity=0;
    }
    else{
        movielist.style.opacity=1;
        channels.style.opacity=0
        channels.style.zIndex=-99;
        movielist.style.zIndex=99;
        movielist.style.transition="2s";
        }
}
var mycounter=0;
var mycartext=document.getElementById("carttext");
 
//  console.log(mycartext.textContent)
 mycartext.innerHTML=  mycartext.innerHTML+mycounter+ " items";
function addtocart()
{
    mycounter++;
    // console.log(mycartext.textContent)
 mycartext.innerHTML=mycounter+ " items";

}
var btn1=document.getElementById("cartbtn1");
var btn2=document.getElementById("cartbtn2");
var btn3=document.getElementById("cartbtn3");
var btn4=document.getElementById("cartbtn4");
var btn5=document.getElementById("cartbtn5");
var btn6=document.getElementById("cartbtn6");
var btn7=document.getElementById("cartbtn7");
var btn8=document.getElementById("cartbtn8");
var btn9=document.getElementById("cartbtn9");

btn6.addEventListener('click',function wtf()
{ 
    btn6.style.backgroundColor="green";
    btn6.innerHTML="Added to cart";
})
{
}
btn1.addEventListener('click',function wtf()
{ 
    btn1.style.backgroundColor="green";
    btn1.innerHTML="Added to cart";
})
{
}
btn3.addEventListener('click',function wtf()
{ 
    console.log("why the fuck");
    btn3.style.backgroundColor="green";
    btn3.innerHTML="Added to cart";
})
{
}
btn2.addEventListener('click',function wtf()
{ 
    btn2.style.backgroundColor="green";
    btn2.innerHTML="Added to cart";
})
{
    
}
{
}
btn4.addEventListener('click',function wtf()
{ 
    btn4.style.backgroundColor="green";
    btn4.innerHTML="Added to cart";
})
{
}
btn5.addEventListener('click',function wtf()
{ 
    btn5.style.backgroundColor="green";
    btn5.innerHTML="Added to cart";
})
{
}
btn7.addEventListener('click',function wtf()
{ 
    btn7.style.backgroundColor="green";
    btn7.innerHTML="Added to cart";
})
{
}
btn8.addEventListener('click',function wtf()
{ 
    btn8.style.backgroundColor="green";
    btn8.innerHTML="Added to cart";
})
{
}
btn9.addEventListener('click',function wtf()
{ 
    btn9.style.backgroundColor="green";
    btn9.innerHTML="Added to cart";
})
{
}
var x=document.getElementById("cartbtn2");
function change()
{
  
     console.log("pfft");
     x.style.background="green";
     x.style.backgroundColor="green";
     x.setAttribute("style", "background-color:green;");
    
}
// x.setAttribute("style", "background-color:green;");



   




