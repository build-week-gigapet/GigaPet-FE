class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
    if (this.tabData === "all") {
      this.comments = document.querySelectorAll(".comment");
    } else {
      this.comments = document.querySelectorAll(
        `.comment[data-tab=${this.tabData}]`
      );
    }
    this.comments = Array.from(this.comments).map(function(comment) {
      return new TabComment(comment);
    });
    this.tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(function(element) {
      element.classList.remove("active-tab");
    });
    const comments = document.querySelectorAll(".comment");
    comments.forEach(function(element) {
      element.style.display = "none";
    });
    this.tabElement.classList.add("active-tab");
    this.comments.forEach(comment => comment.selectComment());
  }
}

class TabComment {
  constructor(commentElement) {
    this.commentElement = commentElement;
  }
  selectComment() {
    this.commentElement.style.display = "flex";
  }
}

let tabs = document.querySelectorAll(".tab");

tabs.forEach(function(tab) {
  return new TabLink(tab);
});
