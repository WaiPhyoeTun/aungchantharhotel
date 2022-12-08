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


// End Header

// Start Testimonials
    const getcpmpanyname = document.querySelector('.companyname')
    const getrole = document.querySelector('.role')
    const gettestimonial = document.querySelector('.testimonial')

    const testimonialdatas=[
        {
            name:"Rich Star Restaurant",
            position:"Our Outlet",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name:"48 Sky Bar Cafe",
            position:"Our Partner",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name: "52 Beach Hotel" ,
            position: "Our Branch" ,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name: "Cool Land Swimming Pool" ,
            position: "Our Client" ,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name:"Chaung Thar SPA",
            position: "Our Business",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

let idx = 0;

// console.log(testimonialdatas[idx]);
// console.log(testimonialdatas[idx].name);
// console.log(testimonialdatas[idx].position);
// console.log(testimonialdatas[idx].text);

function updatetestimonial(){

    // getcpmpanyname.textContent = testimonialdatas[idx].name;
    // getrole.textContent = testimonialdatas[idx].position;
    // gettestimonial.textContent = testimonialdatas[idx].text;


    var {name,position,text} = testimonialdatas[idx];

    // console.log(name);
    // console.log(position);
    // console.log(text);
    
    getcpmpanyname.textContent = name;
    getrole.textContent = position;
    gettestimonial.textContent = text;


    idx ++;

    if(idx > testimonialdatas.length - 1){
        idx = 0 ;
    }
}

updatetestimonial();

setInterval(updatetestimonial,10000);
    

// End Testimonials
// Start Properties Section

filterby('all');

function filterby(keyword){
    // console.log(keyword);

    var getfilters = document.getElementsByClassName('filters');

    // console.log(getfilters);

    if(keyword === 'all'){
        keyword = ''
    }

    for(var x = 0 ; x < getfilters.length;x++){
        // console.log(getfilters[x]);

        // console.log(getfilters[x].className.indexOf(keyword) > -1);

        removeshowclass(getfilters[x],'show');

        if(getfilters[x].className.indexOf(keyword) > -1){
            addshowclass(getfilters[x],'show');
        }
        
    }
}

function addshowclass(ele,opt){
    // console.log(ele);
    var getfilters = ele.className.split(" ");
    // console.log(getfilters);

    var getopt = opt.split(" ");
    // console.log(getopt);
    // console.log(getopt.length);
    // console.log(opt.length);

    for(var y = 0 ; y < getopt.length ; y++){
        // console.log(getopt[y]);

        // console.log(getfilters.indexOf(getopt[y]) === -1 );
        if(getfilters.indexOf (getopt[y]) === -1){
            // ele.classList.addshowclass(getopt[y]);
            
            ele.className += " "+getopt[y];
        }
    }
}

function removeshowclass(ele,opt){
    // console.log(ele);
    var getfilters = ele.className.split(' ');
    // console.log(getfilters);

    var getopt = opt.split(' ');
    // console.log(getopt);
    // console.log(getopt.length);

    for(var k = 0 ; k < getfilters.length ; k++){
        
        // console.log(getfilters[k]);
        // console.log(getfilters[0]);
        // console.log(getfilters[1]);

        // console.log(getfilters[k]);

        while(getfilters.indexOf(getopt[k]) > -1 ){
            getfilters.splice(getfilters.indexOf(getopt[k]),1);
        }
    }

    // console.log(getfilters);
    // console.log(getfilters.join(' '));

    ele.className = getfilters.join(' ');
    // console.log(ele.className);

}

var getftcontrol = document.getElementById('filtercontrol');
var getlis = getftcontrol.getElementsByClassName('list-inline-item');

for(var i = 0 ; i < getlis.length;i++){
    getlis[i].addEventListener('click',function(){
        var curractives = document.querySelector('.activeitems');
        curractives.className = curractives.className.replace('activeitems','');

        this.className += ' activeitems';
        // console.log(curractives);
    });
}

// End Properties Section

// 3TM

// 1RM


