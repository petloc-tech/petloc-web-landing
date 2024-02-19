class TabSlider {
  constructor(tabclass, sliderBarClass, contentClass) {
    this.tabclass = tabclass;
    this.sliderBarClass = sliderBarClass;
    this.contentClass = contentClass;
  }

  init() {
    const tabs = document.querySelectorAll(this.tabclass);
    const sliderBars = document.querySelectorAll(this.sliderBarClass);
    const contents = document.querySelectorAll(this.contentClass);

    let i = 0;

    setInterval(() => {
      if (i === tabs.length || i > tabs.length) i = 0;
      contents.forEach((content) => content.classList.add("hidden"));
      contents[i].classList.remove("hidden");
      sliderBars.forEach((bar) => bar.classList.remove("active-slider-tab"));
      sliderBars[i].classList.add("active-slider-tab");
      i++;
    }, 5000);

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        contents.forEach((content) => content.classList.add("hidden"));
        contents[index].classList.remove("hidden");
        sliderBars.forEach((bar) => bar.classList.remove("active-slider-tab"));
        sliderBars[index].classList.add("active-slider-tab");
        i = index + 1;
      });
    });
  }
}

window.TabSlider = TabSlider;
