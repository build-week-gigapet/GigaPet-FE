class Carousel {
    constructor(element) {
      this.element = element;
      this.prev = this.element.querySelector(".left-button");
      this.next = this.element.querySelector(".right-button");
      this.pics = this.element.querySelectorAll("img");
      this.index = 0;
      this.prev.addEventListener("click", () => this.picShift(-1));
      this.next.addEventListener("click", () => this.picShift(1));
      this.pics[this.index].style.display = "block";
    }
    picShift(dir) {
      this.index += dir;
      this.pics[this.index].style.display = "block";
      this.pics[this.index - dir].style.display = "none";
    }




let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);