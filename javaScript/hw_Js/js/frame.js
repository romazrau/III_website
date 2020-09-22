//create and use random color 
const randomColorString = () => {
  const random255 = () => {
    return Math.floor(Math.random() * 50 + 200);
  }
  return `rgb(250,${random255()},${random255()})`;
}

document.querySelectorAll(".Rcolor").forEach((element) => {
  element.style.backgroundColor = randomColorString();
});

const RcolorChange = (element) => {
  element.style.backgroundColor = randomColorString();
}


//show card hover animation
document.querySelectorAll(".showCard").forEach(
  showcard => {
    showcard.addEventListener(
      "mouseenter",
      () => {
        showcard.classList.remove("showCard-hover-over");
        showcard.classList.add("showCard-hover");
      }
    )
    showcard.addEventListener(
      "mouseleave",
      () => {
        showcard.classList.remove("showCard-hover");
        showcard.classList.add("showCard-hover-over");
      }
    )

  }
);


//navbar and show card switch 
function ShowCardSwitch() {
  let hwlist = ['hw1', 'hw2', 'hw3', 'hw4', 'hw5'];
  let navlinklist = ["navLink-hw1", "navLink-hw2", "navLink-hw3", "navLink-hw4", "navLink-hw5"];
  let tempIndex = 0;

  this.switch = (toIndex) => {
    if (tempIndex !== toIndex) {
      document.getElementById(hwlist[tempIndex]).classList.add("disable");
      document.getElementById(hwlist[toIndex]).classList.remove("disable","showCard-hover","showCard-hover-over");

      document.getElementById(navlinklist[tempIndex]).classList.remove("focus");
      document.getElementById(navlinklist[toIndex]).classList.add("focus");

      tempIndex = toIndex;
    }
  }
}
let CardSwitch = new ShowCardSwitch();

document.querySelectorAll(".navItem").forEach(
  ( e, i ) => {
    e.onclick = () => {CardSwitch.switch(i)};
  }
)

