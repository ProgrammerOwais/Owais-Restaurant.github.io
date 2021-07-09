var booking_button  = document.querySelector('.booking-btn');
var booking_form    = document.querySelector('.section5-form');
var online_submit   = document.querySelector('.submit');
var online_input    = document.querySelectorAll('.online-form-input');
var submit1_btn     = document.querySelector('.submit1');
var booking_input   = document.querySelectorAll('.inputs');
var online_form     = document.querySelector('.online-form');
var intro_container = document.querySelector('.intro-container');
var container       = document.querySelector('.container'); 
var body            = document.querySelector('.body');

/* intro area ***/
var word = document.querySelectorAll('[data-spa]');
var incrmt = 0;
body.style.backgroundColor='rgb(248, 248, 98)';
setTimeout(() => {
   var interval = setInterval(() => {
        word[incrmt].style.opacity='1';
        incrmt = incrmt + 1 ;
        if(incrmt >= 15) {
            clearInterval(interval)
        }
    }, 100);
    
}, 2200);

setTimeout(() => {
    
    body.style.backgroundColor='rgba(162, 190, 179, 0.561)';
    intro_container.style.display='none';
    container.style.display='block';
    
}, 5000);


/* coding for booking **/

function booking_display(params) {
    booking_form.classList.toggle('section5-form2');
    
}

function booking_submition(params) {

    if (booking_input[0].value !== '' && booking_input[1].value !=='') {
        alert('Your message is sent to us we will be waiting for you thank you.')
        booking_form.style.display='none';
    }

    else {
        alert('Please sir fill all the boxes.')
    }
    
}


/* cooding for adding list items in ul ***/

var input_data    = document.querySelectorAll('.form-input');
var submit_btn2    = document.querySelector('.input7');
var list1          = document.querySelector('.list');
var l1 = [];
var t  =  [];
var k  = 0;

submit_btn2.addEventListener('click' , function() {
    var localmemory = window.localStorage;

    for ( let i = 0 + k ; i < 7+k ; i++) {
        if (i === 6+k) {

            l1[i] = document.createElement('button'); 
            t[i]  = document.createTextNode('delete');
            l1[i].appendChild(t[i]);
            l1[i].classList.add('delete-btn');
            list1.appendChild(l1[i]);
            l1[i].addEventListener('click' , function() {
                localmemory.removeItem(`li${i-6}`);
                localmemory.removeItem(`li${i-5}`);
                localmemory.removeItem(`li${i-4}`);
                localmemory.removeItem(`li${i-3}`);
                localmemory.removeItem(`li${i-2}`);
                localmemory.removeItem(`li${i-1}`);
                localmemory.removeItem(`li${i}`);
                l1[i].remove();
                l1[i-1].remove();
                l1[i-2].remove();
                l1[i-3].remove();
                l1[i-4].remove();
                l1[i-5].remove();
                l1[i-6].remove();
            })   
            
            break;
        }

      if(input_data[0].value !== '' && input_data[1].value !== '' && input_data[2].value !== ''
        && input_data[3].value !== '' && input_data[4].value !== '' && input_data[5].value !== '') {
            localmemory.setItem("li" + i,input_data[i-k].value);

            l1[i]= document.createElement('li');

            t[i] = document.createTextNode(localmemory.getItem('li' + i));

            l1[i].appendChild(t[i]);
            list1.appendChild(l1[i]);
        }

        else {
            alert('please sir first fill all the boxes and then sumbit it. ');
            break;
        }

    }

    k = k + 7 ;

    list1.style.display = 'flex';
    for(let p = 0; p < 6 ; p++) {
        input_data[p].value='';
    }
    
})

function online(params) {
    online_form.style.display = 'flex';
    setTimeout(()=>{
        online_form.style.opacity = '1';
    },100)    
}

function closeOnlineFomr(){
    online_form.style.display = 'none';
    setTimeout(()=>{
        online_form.style.opacity = '0';
    },100)   
    
}

function online_submition(params) {

    if(online_input[0].value !== '' &&  online_input[1].value !== '' && online_input[2].value !== '') {
        alert('Your delivery in on the way ...')
        online_form.style.display = 'none';
        for(let i = 0; i < 3; i++) {
            online_input[i].value = '';

           }
        }

    else {

        alert('PLease sir fill all the boxes.');
        
        }


    
}


