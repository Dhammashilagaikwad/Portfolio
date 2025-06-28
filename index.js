var typed = new Typed(".role",{
    strings:["Frontend Developer !", "Web Developer !", "Fullstack Developer !"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})



  // document.addEventListener('DOMContentLoaded', function () {
  //   const projects = document.querySelectorAll('.single-project');
  //   const images = document.querySelectorAll('.project-image');
  //   const prevBtn = document.querySelector('.prevProject');
  //   const nextBtn = document.querySelector('.nextProject');

  //   let currentIndex = 0;

  //   function showProject(index) {
  //     projects.forEach((proj, i) => {
  //       proj.style.display = i === index ? 'block' : 'none';
  //       images[i].style.display = i === index ? 'block' : 'none';
  //     });
  //   }

  //   // Initial display
  //   showProject(currentIndex);

  //   nextBtn.addEventListener('click', () => {
  //     currentIndex = (currentIndex + 1) % projects.length;
  //     showProject(currentIndex);
  //   });

  //   prevBtn.addEventListener('click', () => {
  //     currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  //     showProject(currentIndex);
  //   });
  // });


  const projects = [
    {
      numb: "01",
      title: "Wexim Website",
      description: "A responsive, animated portfolio site inspired by the Wexim Modern template, showcasing smooth scrolling, parallax effects.",
      tech: "HTML5, CSS3, Bootstrap",
      image: "./images/wexim.png", // Replace with your actual path
      liveLink: "https://delightful-meringue-322fc3.netlify.app/",
      githubLink: "https://github.com/Dhammashilagaikwad/wexim_website"
    },
    {
      numb: "02",
      title: "MovieDB",
      description:  "MovieDB is a responsive movie search app that fetches real-time data from the  API using HTML5, CSS3, Bootstrap and JavaScript. Featuring a live search bar.",
      tech: "HTML5, CSS3, Bootstrap, JavaScript",
      image: "./images/movieDB.png",
      liveLink: "https://moviedb-dhamm.netlify.app/#",
      githubLink: "https://github.com/Dhammashilagaikwad/MovieDB"
    },
    {
      numb: "03",
      title: "Parallax Website",
      description: "A smooth-scrolling parallax website showcasing layered animations.",
      tech: "HTML5, CSS3, Bootstrap",
      image: "./images/parallax.png",
      liveLink: "https://parallax-dhamm.netlify.app/",
      githubLink: "https://github.com/Dhammashilagaikwad/parallax"
    }
  ];

  let currentIndex = 0;

  function renderProject(index) {
    const project = projects[index];
    document.getElementById("project-image").src = project.image;

    document.getElementById("project-content").innerHTML = `
      <div class="single-project active">
        <p class="numb">${project.numb}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech">
          <p>${project.tech}</p>
        </div>
        <div class="live-github">
          <a href="${project.liveLink}" target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square"></i><span>Live Project</span>
          </a>
          <a href="${project.githubLink}" target="_blank">
            <i class="fa-brands fa-github"></i><span>GitHub</span>
          </a>
        </div>
      </div>
    `;
  }

  document.querySelector(".nextProject").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    renderProject(currentIndex);
  });

  document.querySelector(".prevProject").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderProject(currentIndex);
  });

  // Initialize with first project
  renderProject(currentIndex);




 
