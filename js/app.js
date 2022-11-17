// Start Jquery Area
$(document).ready(function(){
    //Start Room Section 
    $('.roompopup').magnificPopup({type:'image'});
    //En Room Section 

});
// End Jquery Area

// Star Header
// Start nab bar
function dropbtn(e){
    //   document.getElementById('mydropdown').classList.toggle('show');
    //   console.log('hi');

    // underfined
    // console.log(e.target);
    // console.log(e.target.nextElementSibling);

    e.target.nextElementSibling.classList.toggle('show');


}

function dropfilter(){
    var getsearch,filter,getdropdiv,getlinks,linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById("mydropdown");
    // getlinks = getdropdiv.getElementsByTagName("a");

    getlinks = document.querySelectorAll(".mydropdowns a")

    // console.log(getlinks);

    for(var x = 0 ; x < getlinks.length ; x++){
        // linkvalue = getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);


        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = "block"
        }else{{
            getlinks[x].style.display = "none"
        }}

    }


}
// End nab bar


// Start Auto Background

function* genfun(){
    var index = 8;

    while(true){
        yield index++;

        if(index > 13){
            index = 8;
        }
    }
}

var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);


var getheader = document.querySelector('header');
getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
    // console.log(getgen.next().value);

    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}

setInterval(autoload,2500);

// End Auto Background


// Start Testimonial Seciton 
const getcompanyname = document.querySelector('.companyname');
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');


const testimonialdatas = [
    {
        name:'Rich Star Restaurant',
        position:'Our Partner',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name:'48 Sky Bar Cafe',
        position:'Our Partner',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name:'52 Beach Hotel',
        position:'Our Partner',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name:'Cool And Swimming Pool',
        position:'Our Partner',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name:'Chaung Thar SPA',
        position:'Our Partner',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }

];

let idx = 0;
// console.log(testimonialdatas[idx]);
// console.log(testimonialdatas[idx].name);
// console.log(testimonialdatas[idx].position);
// console.log(testimonialdatas[idx].text);

function updatetestimonial(){
    // getcompanyname.textContent = testimonialdatas[idx].name;
    // getrole.text = testimonialdatas[idx].position;
    // gettestimonial.textContent = testimonialdatas[idx].text;

    const {name,position,text} = testimonialdatas[idx];
    // console.log(name);
    // console.log(position);
    // console.log(text);

    getcompanyname.textContent = name;
    getrole.textContent = position;
    gettestimonial.textContent = text;

    idx++;

    if(idx > testimonialdatas.length -1){
        idx = 0;
    }
}
updatetestimonial();
setInterval(updatetestimonial,10000);






// End Testimonial Seciton 

// End Header