var typed = new Typed(".role",{
    strings:["Frontend Developer !", "Web Developer !", "Fullstack Developer !"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


document.addEventListener("DOMContentLoaded", () => {
  const MAX_VISIBLE = 6;
  const showBtn     = document.getElementById("showMoreBtn");

  // ‑‑ Hide cards beyond index 5 in each tab on first load
  initTabs();

  // ========== Event: Show/Hide more ==========
  showBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const activeTab = document.querySelector(".tab-pane.active");
    const hidden    = activeTab.querySelectorAll(".project.d-none");

    // ---- If hidden cards exist, reveal them ----
    if (hidden.length) {
      hidden.forEach((el) => el.classList.remove("d-none"));
      showBtn.textContent = "Show Less";
    } 
    // ---- Otherwise collapse back to first six ----
    else {
      collapseTab(activeTab);
      showBtn.textContent = "See More";
      activeTab.scrollIntoView({ behavior: "smooth" });
    }
  });

  // ========== Event: Bootstrap tab change ==========
  document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tabLink) => {
    tabLink.addEventListener("shown.bs.tab", () => {
      const activeTab = document.querySelector(tabLink.dataset.bsTarget);
      collapseTab(activeTab);          // fold back to top 6
      updateButtonVisibility(activeTab);
      showBtn.textContent = "See More";
    });
  });

  // ---------- helpers ----------
  function initTabs() {
    document.querySelectorAll(".tab-pane").forEach((pane) => collapseTab(pane));
    updateButtonVisibility(document.querySelector(".tab-pane.active"));
  }

  function collapseTab(tab) {
    const projects = tab.querySelectorAll(".project");
    projects.forEach((card, idx) =>
      idx < MAX_VISIBLE ? card.classList.remove("d-none")
                        : card.classList.add("d-none")
    );
  }

  function updateButtonVisibility(tab) {
    const projects = tab.querySelectorAll(".project");
    showBtn.style.display = projects.length > MAX_VISIBLE ? "inline-block" : "none";
  }
});




 




 
