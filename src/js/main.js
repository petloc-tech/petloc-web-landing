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

  const increment = (element, count, delay) => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      element.innerHTML = i + "+";
      if (i === count) {
        clearInterval(interval);
      }
    }, delay);
  };

  const adoption = document.querySelector("#total-adoptions");
  const foster = document.querySelector("#total-house");
  const delivery = document.querySelector("#total-deliveries");

  increment(adoption, 200, 20);
  increment(foster, 50, 40);
  increment(delivery, 100, 30);
});
