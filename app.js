// Start Header
// start navbar
function dropbtn(){
    document.getElementById('mydropdown').classList.toggle('show');
}
function dropfilter(){
    var getsearch,filter,getdropdiv,getlinks,linkvalue;
    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    getdropdiv = document.getElementById('mydropdown');
    getlinks = getdropdiv.getElementsByTagName('a');
    // console.log(getlinks);

    for(var x = 0; x < getlinks.length ; x++){
        // linkvalue = getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        console.log(linkvalue);

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = 'block';
        }else{
            getlinks[x].style.display = 'none';
        }

    }

}
// end navbar
// start auto background

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

var idx = 8
var getheader = document.querySelector('header');
getheader.style.backgroundImage = `url('assets/img/banner/banner${getgen.next().value}.jpg')`;

function autoload(){
    console.log(getgen.next().value);
getheader.style.backgroundImage = `url('assets/img/banner/banner${getgen.next().value}.jpg')`;

}

setInterval(autoload,2500);

// end auto background



// End Header 


// 20AB