
/*################ Toggle Icon Navbar ####################### */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*##################### Scroll section active link ######################*/
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*################ Sticky Navbar ####################### */
    let header = document.querySelector('header');

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

ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });



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
let btn = document.getElementById('button');
btn.addEventListener('click', function(e) {
    e.preventDefault();

    //console.log("Hi");

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobNumber = document.getElementById('mobNumber').value;
    let emailSubject = document.getElementById('emailSubject').value;
    let message = document.getElementById('message').value;

    //Validate that all fields are filled out or not
    
    if(name == "" || name == null) {
        //document.getElementById('error-name').innerHTML = " Please Enter Your Name *";
        alert("*Please Enter Your Name");
        return false;
    } else if(email == "" || email == null) {
        //document.getElementById('error-email').innerHTML = " Please Enter Your Valid Email address *";
        alert("*Please Enter Your Valid Email address");
        return false;
    } else if(mobNumber == "" || mobNumber == null) {
        //document.getElementById('error-mobnumber').innerHTML = " Please Enter Your Correct Contact Phone number *";
        alert("*Please Enter Your Contact Phone number");
        return false;
    } else if(emailSubject == "" || emailSubject == null) {
        //document.getElementById('error-emailsubject').innerHTML = " Email subject can't be empty *";
        alert("*Give suitable email subject");
        return false;
    } else if(message == "" || message == null) {
        //document.getElementById('error-messagearea').innerHTML = " Write your message here. Message text area can not be empty *";
        alert("*Message text area can't be empty");
        return false;
    }

    let body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Contact Number: ' + mobNumber + 
    '<br/> Subject: ' + emailSubject + '<br/> Message: ' + message;

    //console.log(body);

    const alertMessage = "😎Well done! Message Sent Successfully. We will contact you soon...!";
    
    Email.send({
        SecureToken : "7d73cd8d-8da7-4de8-ba07-73c186b63610",
        To : 'prakash1999saw@gmail.com',
        From : "prakash8873saw@gmail.com",
        Subject : emailSubject,
        Body : body
    }).then(
      message => alert(alertMessage)
    );

    //Clear Input fields after Submit and then alert message
    const inputs = document.querySelectorAll('#name, #email, #mobNumber, #emailSubject, #message');

    inputs.forEach(input => {
        input.value = '';
    });

});

