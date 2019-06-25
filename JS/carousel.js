class Carousel{
  constructor(element){
    this.element = element;
    this.tabs = element.querySelectorAll('.tab');

    this.leftBtn = element.querySelector('.btn-left');
    this.rightBtn = element.querySelector('.btn-right');

    this.leftBtn.addEventListener('click', ()=>this.moveLeft());
        this.rightBtn.addEventListener('click', ()=>this.moveRight());
  }

  moveLeft(){
    const tmpNode =this.tabs[0];
    this.tabs[0].className = 'tab move-out-from-left';
    
    setTimeout(()=>{
      if(this.tabs.length>5){
        tmpNode.classList.add('tab-hide');
        this.tabs[5].className ='tab move-to-position5-from-left';
      }
      this.tabs[1].className = "tab move-to-position1-from-left";
      this.tabs[2].className = "tab move-to-position2-from-left";
      this.tabs[3].className = "tab move-to-position3-from-left";
      this.tabs[4].className = "tab move-to-position4-from-left";
      this.tabs[0].remove();
      this.element.querySelector('.tab-container').appendChild(tmpNode);
      this.tabs = this.element.querySelectorAll('.tab');


    }, 500)

  }

  moveRight(){
    this.tabs[4].className ='tab move-out-from-right';
    
    setTimeout(()=>{
      const tabNum = this.tabs.length;
      if(tabNum>4){
        this.tabs[4].className = 'tab tab-hide'
      }
      const tmpNode = this.tabs[this.tabs.length - 1];
      tmpNode.classList.remove('tab-hide');
      this.tabs[tabNum - 1].remove();
      let parentObj = this.element.querySelector('.tab-container');
      parentObj.prepend(tmpNode);
      tmpNode.className = 'tab move-to-position1-from-right';
      this.tabs[0].className = "tab move-to-position2-from-right";
      this.tabs[1].className = "tab move-to-position3-from-right";
      this.tabs[2].className = "tab move-to-position4-from-right";
      this.tabs[3].className = "tab move-to-position5-from-right";
      this.tabs = this.element.querySelectorAll('.tab');

    }, 500)

  }
}

let carousel = new Carousel(document.querySelector('.carousel'));