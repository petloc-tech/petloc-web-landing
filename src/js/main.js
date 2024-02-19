document.addEventListener("DOMContentLoaded", () => {
  /**
   *  Tab slider initialization
   **/
  const tabSlider = new TabSlider(
    ".slider-tab",
    ".tab-slider-bar",
    ".slider-content"
  );
  tabSlider.init();

  /**
   * reviews-carousel
   **/
  new Swiper(".reviews-carousel", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".reviews-carousel-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  /**
   *  Video play button click event
   **/
  const videoPlayBtn = document.querySelector(".video-play-btn");
  if (videoPlayBtn) {
    videoPlayBtn.addEventListener("click", function () {
      const videoPlayer = this.closest(".video").querySelector(".video-player");
      videoPlayer.classList.remove("hidden");
    });
  }

  /**
   * Counter initialization
   **/

  const counters = (delay = null) => {
    const counterEl = document.querySelectorAll(".counter.count");
    counterEl.forEach((counter) => {
      const target = +counter.textContent.replace(/\D/g, "");
      const suffix = counter.getAttribute("data-suffix");
      const prefix = counter.getAttribute("data-prefix");
      const duration = counter.getAttribute("data-delay") || delay;
      let count = 0;
      const interval = setInterval(() => {
        count++;
        counter.textContent = `${prefix || ""}${count}${suffix || ""}`;
        if (count === target) {
          clearInterval(interval);
        }
      }, duration);
    });
  };

  counters();
});
