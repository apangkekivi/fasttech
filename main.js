const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slideWidth = slides[0].clientWidth;
const dotsContainer = document.querySelector('.dots');


let curSlide = 0;
const maxSlide = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.2) translateX(-1200px)';
// slider.style.overflow = 'visible';



const createDots = function(){
    slides.forEach(function(_, i){
        dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    });
};

createDots();

const activateDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};

activateDot(0)

const goToSlide = function(slide){
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
}

goToSlide(0);

const nextSlide = function(){
    if (curSlide === maxSlide - 1){
        curSlide = 0;
    }else{
        curSlide++;
    }
   

   goToSlide(curSlide);
   activateDot(curSlide);
}

const prevSlide = function(){
    if(curSlide === 0){
        curSlide = maxSlide -1;
    }else{
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e){
    if(e.key === "ArrowLeft") prevSlide();
    e.key === 'ArrowRight' && nextSlide();
});

dotsContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
        const {slide} = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
})

AOS.init({
    duration: 1000, // Animation duration (in milliseconds)
     // Animation easing // Offset (in pixels) from the top of the viewport
    once: true // Whether to only animate elements once
});


document.querySelectorAll('.menu a').forEach(function(el){
    el.addEventListener('click', function(e){
        
        e.preventDefault();

        const id = this.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get all the buttons with class 'view-curriculum-btn'
const viewCurriculumButtons = document.querySelectorAll('.view-curriculum-btn');

// Add event listeners to each button
viewCurriculumButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the parent card element
        const parentCard = this.closest('.dca-card');

        // Get the course name from the parent card
        const courseName = parentCard.querySelector('h3').textContent;

        // Get the content element
        const content = document.querySelector('.content-hidden .content');

        // Clear previous content
        content.innerHTML = '';

        // Dynamically set content based on the course name
        switch (courseName) {
            case 'DCA':
                content.innerHTML = `
                <p class="course-heading-2">DIPLOMA IN COMPUTER APPLICATION (DCA)</p>
                    <h6>Duration 6 Months</h6>
                    <br>
                    <h6>Contents</h6>
                    <ul>
                        <li>Introduction</li>
                        <li>Fundamnetals of Computer</li>
                        <li>MS Office: MS Word, MS Excel, Power Point</li>
                        <li>Photoshop 7.0</li>
                        <li>Internet of Things</li>
                        <li>HTML</li>
                    </ul>
                    <h5>Total Course Fee <span>4500/Only</span></h5>
                    <button>ENROLL</button>
                `;
                break;
            // Add cases for other courses as needed
            case 'PGDCA':
                content.innerHTML = `
                    <p class="course-heading-2">POST GRADUATE IN DIPLOMA COMPUTER APPLICATION (PGDCA)</p>
                    <h6>Duration 12 Months</h6>
                    <br>
                    <h6>Contents</h6>
                    <ul>
                        <li>COMPUTER FUNDAMENTALS</li>
                        <li>OS:WINDOWS 7, WINDOWS 8, WINDOWS 11</li>
                        <li>MS Office: MS Word, MS Excel, Power Point</li>
                        <li>Photoshop 7.0</li>
                        <li>Internet of Things</li>
                        <li>HTML5</li>
                        <li>TALLY PRIME</li>
                        <li>PYTHON</li>
                    </ul>
                    <h5>Total Course Fee <span>9500/Only</span></h5>
                    <button>ENROLL</button>
                    
                `;
                break;
                case 'ADCA':
                    content.innerHTML = `
                        <p class="course-heading-2">ADVANCE DIPLOMA IN COMPUTER APPLICATION (ADCA)</p>
                        <h6>Duration 12 Months</h6>
                        <br>
                        <h6>Contents</h6>
                        <ul>
                            <li>COMPUTER FUNDAMENTALS</li>
                            <li>OS:WINDOWS 7, WINDOWS 8, WINDOWS 11</li>
                            <li>MS Office: MS Word, MS Excel, Power Point</li>
                            <li>Photoshop 7.0</li>
                            <li>Internet of Things</li>
                            <li>HTML5</li>
                            <li>TALLY PRIME</li>
                            <li>PYTHON</li>
                        </ul>
                        <h5>Total Course Fee <span>9500/Only</span></h5>
                        <button>ENROLL</button>
                        
                    `;
                break;
                case 'STENO':
                    content.innerHTML = `
                        <p class="course-heading-2">DIPLOMA IN STENOGRAPHY AND SHORTHAND</p>
                        <h6>Duration 12 Months</h6>
                        <br>
                        <h6>Over View</h6>
                        <ul>
                            <li>Shorthand system is the technique of writing the spoken sounds with the help of certain symbols. Shorthand is a subject whereas Stenography is the art or the process of writing in shorthand.</li>
                        </ul>
                        <h5>Total Course Fee <span>15000/Only</span></h5>
                        
                        <button>ENROLL</button>
                        
                    `;
                break;

                case 'TALLY':
                    content.innerHTML = `
                        <p class="course-heading-2">TALLY PRIME WITH GST</p>
                        <h6>Duration 3 Months</h6>
                        <br>
                        <h6>Over View</h6>
                        <ul>
                            <li>Covers latest Tally Version</li>
                            <li>Information of Manual Accounting</li>
                            <li>Illustrations, Tables, and Flow Chart</li>

                            <li>Types of Reports in Tally Prime</li>
                            <li>GST</li>
                        </ul>
                        <h5>Total Course Fee <span>8000/Only</span></h5>
                        
                        <button>ENROLL</button>
                        
                    `;
                break;

                case 'GRAPHIC DESIGNING':
                    content.innerHTML = `
                        <p class="course-heading-2">GRAPHIC DESIGNING</p>
                        <h6>Duration 3 Months</h6>
                        <br>
                        <h6>Software to Learn</h6>
                        <ul>
                            <li>Adobe Photoshop PS</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Indesign</li>
                        </ul>
                        <h5>Total Course Fee <span>10000/Only</span></h5>
                        
                        <button>ENROLL</button>
                        
                    `;
                break;
        }

        // Make the content-hidden element visible
        document.querySelector('.content-hidden').style.display = 'block';
    });
});

// Add event listener to the remove-tab button
document.getElementById('remove-tab').addEventListener('click', function() {
    document.querySelector('.content-hidden').style.display = 'none';
});

const hamburger = document.querySelector(".hamburger-button");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("openDrawer");
});
