var typed = new Typed(".role",{
    strings:["Frontend Developer !", "Web Developer !", "Fullstack Developer !"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})



  document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.single-project');
    const images = document.querySelectorAll('.project-image');
    const prevBtn = document.querySelector('.prevProject');
    const nextBtn = document.querySelector('.nextProject');

    let currentIndex = 0;

    function showProject(index) {
      projects.forEach((proj, i) => {
        proj.style.display = i === index ? 'block' : 'none';
        images[i].style.display = i === index ? 'block' : 'none';
      });
    }

    // Initial display
    showProject(currentIndex);

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % projects.length;
      showProject(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length;
      showProject(currentIndex);
    });
  });

