
/*################ Toggle Icon Navbar ####################### */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*##################### Scroll section active link ######################*/
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*################ Sticky Navbar ####################### */
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*################ remove toggle icon and navbar when click navbar link(scroll) ####################### */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*################ Scroll Reveal ####################### */
ScrollReveal ({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });

ScrollReveal().reveal('.home-content h2, .about-img', {origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', {origin: 'left' });



/*##################### Typed js used for multiple text show ######################*/
const typed = new Typed('.multiple-text', {
    strings: ['MERN stack Developer!', 'Frontend Developer!', 'Backend Developer!', 'JavaScript developer!', 'React.js Developer!', 'Programmer!'],
    typedSpeed: 50,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

const typed1 = new Typed('.multiple-text-1', {
    strings: ['MERN stack Developer!', 'Frontend Developer!', 'Backend Developer!', 'JavaScript developer!', 'React.js Developer!', 'Programmer!'],
    typedSpeed: 50,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});



/*################### Script for SMTP.js server for sending mail ###################*/

//function for e-mail validation
// function ValidateEmail(input) {
//     const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     if (input.value.match(validRegex)) {
//         return false;
//     } else {
//         return true;
//     }
// }

const btn = document.getElementById('button');
btn.addEventListener('click', function(e) {
    e.preventDefault();

    //console.log("Hi");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobNumber = document.getElementById('mobNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;

    //Validate that all fields are filled out or not
    const validationBox = document.getElementById('validation-box');

    if(name === "" || name === null) {
        validationBox.innerHTML = "*Please Enter Your Name!";
        validationBox.className = 'error';
        return false;
    } else if(email === "" || email === null ) {
        validationBox.innerHTML = "*Please Enter Your Valid Email address!";
        validationBox.className = 'error';
        return false;
    } else if(mobNumber === "" || mobNumber === null) {
        validationBox.innerHTML = "*Please Enter Your Contact Phone number!";
        validationBox.className = 'error';
        return false;
    } else if(emailSubject === "" || emailSubject === null) {
        validationBox.innerHTML = "*Give suitable email subject!";
        validationBox.className = 'error';
        return false;
    } else if(message === "" || message === null) {
        validationBox.innerHTML = "*Message text area can't be empty!";
        validationBox.className = 'error';
        return false;
    }

    const body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Contact Number: ' + mobNumber + 
    '<br/> Subject: ' + emailSubject + '<br/> Message: ' + message;

    //console.log(body);

    const alertMessage = "*😎Well done! Message Sent Successfully. I will respond you soon...!";
    
    Email.send({
        SecureToken : "7d73cd8d-8da7-4de8-ba07-73c186b63610",
        To : 'prakash1999saw@gmail.com',
        From : "prakash8873saw@gmail.com",
        Subject : emailSubject,
        Body : body
    })
    .then((message) => {
        // validationBox.innerHTML = alertMessage;
        // validationBox.className = 'success';
        // alert(alertMessage);
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
        alert(error);
    });

    validationBox.innerHTML = alertMessage;
    validationBox.className = 'success';

    //Clear Input fields after Submit and then alert message
    const inputs = document.querySelectorAll('#name, #email, #mobNumber, #emailSubject, #message');

    inputs.forEach(input => {
        input.value = '';
    });

});


/*############### circle skill ###########################*/
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots*marked / 100);
    let points = "";
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');

    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
})
