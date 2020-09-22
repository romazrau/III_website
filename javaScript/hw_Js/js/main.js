//hw1 9*9 table ---------------------------------------------
let table99 = document.createElement("table");
table99.classList.add("table99");
for (let i = 1; i < 10; i++) {
  let tr = document.createElement("tr");

  for (let j = 2; j < 10; j++) {
    let td = document.createElement("td");
    td.classList.add("Rcolor");
    td.addEventListener("mouseenter", () => {
      // console.log("main.js: R color!");
      RcolorChange(td);
    });
    td.innerText = `${j}*${i}=${i * j}`;
    tr.appendChild(td);
  }

  table99.appendChild(tr);
}
document.querySelector("#hw1").appendChild(table99);

//hw2 form ---------------------------------------------------
const isInputCorrect = (str, type) => {
  let result = { isCorrect: false, message: "" };
  switch (type) {
    case "name":
      // console.log("name", str);
      //regEX 版
      // let regEx1 = /^[\u4e00-\u9fff]{2,}$/;
      // if (regEx1.test(str)) {
      //   result.isCorrect = true;
      //   return result;
      // } else if (str.length < 2) {
      //   result.message = "長度不足";
      //   return result;
      // } else {
      //   result.message = "請勿輸入中文以外的文字";
      //   return result;
      // }

      //自己來版
      if (str.length < 2) {
        result.message = "長度不足";
        return result;
      }
      for (let i = 0; i < str.length; i++) {
        if (!(str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9fff)) {
          result.message = "請勿輸入中文以外的文字";
          return result;
        }
      }

      result.isCorrect = true;
      result.message = `Hi，${str}`;
      return result;
      break;

    case "password":
      // console.log("psw", str);
      //regEX 版
      // let regEx2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
      // if (regEx2.test(str)) {
      //   result.isCorrect = true;
      //   return result;
      // }else if(str.length < 6){
      //   result.message =  str.length ===0 ? "密碼不可空白" : "密碼長度不足";
      //   return result;
      // }else {
      //   result.message = "必須包含英文、數字與特殊符號";
      //   return result;
      // }

      //自己來版
      if (str.length < 6) {
        result.message = str.length === 0 ? "密碼不可空白" : "密碼長度不足";
        return result;
      }
      let hasNum = false;
      let hasChar = false;
      let hasSymbol = false;
      for (let i = 0; i < str.length; i++) {
        let e = str.charAt(i);
        if (e.toLowerCase() >= "a" && e.toLowerCase() <= "z") {
          hasChar = true;
        } else if (e >= "0" && e <= "9") {
          hasNum = true;
        } else if ("!@#$%^&*".indexOf(e) !== -1) {
          hasSymbol = true;
        }
        if (hasNum && hasChar && hasSymbol) break;
      }

      if (hasNum && hasChar && hasSymbol) {
        result.isCorrect = true;
      } else {
        result.message = "必須包含英文、數字與特殊符號";
      }
      break;

    case "date":
      // console.log("data", str);
      let time = new Date(str);
      if (!time.getFullYear()) {
        result.message = "格式錯誤";
        return result;
      }
      if (time.getFullYear().toString().length !== 4) {
        result.message = "格式錯誤";
        return result;
      }
      result.isCorrect = true;
      result.message = time.toLocaleDateString('zh-TW');
      return result;
      break;
  }
  return result;
};

document.querySelectorAll(".formInput").forEach((ele) => {
  ele.addEventListener("keydown", (e) => {
    if (e.key === "Enter") e.preventDefault();
  });
  ele.addEventListener("keyup", (e) => {
    let switchCase = e.target.id.slice(5).toLowerCase();
    let inputCheck = isInputCorrect(e.target.value, switchCase);
    let InputPrompt = document.getElementById(`${e.target.id}Prompt`);

    InputPrompt.innerHTML = inputCheck.isCorrect
      ? `<img src="./img/V.png" alt="V">${inputCheck.message}`
      : `<img src="./img/X.png" alt="X"><span class="formCheckX">${inputCheck.message}</span>`;
  });
  ele.addEventListener("blur", (e) => {
    let switchCase = e.target.id.slice(5).toLowerCase();
    let inputCheck = isInputCorrect(e.target.value, switchCase);
    let InputPrompt = document.getElementById(`${e.target.id}Prompt`);

    InputPrompt.innerHTML = inputCheck.isCorrect
      ? `<img src="./img/V.png" alt="V">${inputCheck.message}`
      : `<img src="./img/X.png" alt="X"><span class="formCheckX">${inputCheck.message}</span>`;
  });
});

//hw3 五燈獎  ---------------------------------------------
let HowManyStarIHave = 0;
const changeImgsSrc = (score) => {
  let starlist = document.querySelectorAll(".star");
  let i = 0;
  for (i; i < score; i++) {
    starlist[i].src = "./img/chikyu_inseki_syoutotsu.png";
  }
  for (i; i < starlist.length; i++) {
    starlist[i].src = "./img/space_nissyoku_glass_man.png";
  }
};

let stars = document.querySelectorAll(".star");
stars.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    changeImgsSrc(parseInt(this.getAttribute("score")));
    document.querySelector(
      "#starIGet"
    ).innerText = `評分中...${this.getAttribute("score")}`;
  });
  item.addEventListener("mouseleave", function () {
    changeImgsSrc(HowManyStarIHave);
    document.querySelector("#starIGet").innerText =
      HowManyStarIHave === 0 ? "" : `獲得${HowManyStarIHave}顆星`;
  });
  item.addEventListener("click", function () {
    HowManyStarIHave = parseInt(this.getAttribute("score"));
    document.querySelector(
      "#starIGet"
    ).innerText = `獲得${HowManyStarIHave}顆星`;
  });
});

let btnStarsReset = document.querySelector("#btnStarsReset");
btnStarsReset.addEventListener("click", () => {
  HowManyStarIHave = 0;
  changeImgsSrc(HowManyStarIHave);
  document.querySelector("#starIGet").innerText = "";
});




//hw4 精靈屋 ---------------------------------------------
function ClsCarouselContl() {
  //img 初始值 配合css
  let imgNum = 6;
  let imgWidth = 70;
  let imgWidthUnit = "vmin";

  let imgLocation = Array(imgNum).fill(0).map((e, i) => imgWidth * -i);
  let imgFocusIndex = 0;
  let marginMove = 0;

  this.set2whichImg = (index = 0) => {
    if (index === imgFocusIndex) return;
    focusBtn(index);
    imgFocusIndex = index;
    requestAnimationFrame(animationCarousel);
  };

  this.set2NextPrevImg = (n = 1) => {
    imgFocusIndex += n;
    if (imgFocusIndex > imgNum - 1) imgFocusIndex = 0;
    if (imgFocusIndex < 0) imgFocusIndex = imgNum - 1;
    focusBtn(imgFocusIndex);
    requestAnimationFrame(animationCarousel);
  };

  function animationCarousel() {  //動畫邏輯
    marginMove =
      marginMove > imgLocation[imgFocusIndex] ?
        marginMove - 1 - (marginMove - imgLocation[imgFocusIndex]) / 15 :
        marginMove + 1 - (marginMove - imgLocation[imgFocusIndex]) / 15;
    marginMove = parseInt(marginMove);

    let carousel = document.querySelector("#carousel");
    carousel.style.marginLeft = `${marginMove}${imgWidthUnit}`;

    if (marginMove != imgLocation[imgFocusIndex]) {
      requestAnimationFrame(animationCarousel);
    }
  }

  function focusBtn(index) {
    document.querySelectorAll('.btn-carousel-index').forEach(
      e => { e.style.border = "0" }
    );
    document.querySelector(`#btn-carousel-index${index + 1}`).style.border = "2px solid black";
  }

  //自動撥放區
  let timer = setInterval(
    () => { this.set2NextPrevImg(1) },
    3000
  );
  let isOn = 1;
  this.toggleTimer = () => {
    if (isOn) {
      clearInterval(timer);
      isOn = 0;
      document.querySelector('#btn-carousel-toggle').innerHTML = '<img src="./img/continue.png" alt="stop">';
    } else {
      timer = setInterval(
        () => { this.set2NextPrevImg(1) },
        3000
      );
      isOn = 1;
      document.querySelector('#btn-carousel-toggle').innerHTML = '<img src="./img/stop.png" alt="stop">';
    }
  }


}
let CarouselContl = new ClsCarouselContl();
document.querySelector(`#btn-carousel-index1`).style.border = "2px solid black";



document.querySelector("#btn-carousel2right").onclick = () => {
  CarouselContl.set2NextPrevImg(1);
};

document.querySelector("#btn-carousel2left").onclick = () => {
  CarouselContl.set2NextPrevImg(-1);
};

document.querySelectorAll(".btn-carousel-index").forEach(
  (e, i) => {
    e.onclick = () => { CarouselContl.set2whichImg(i) };
  }
)

document.querySelector('#btn-carousel-toggle').onclick = CarouselContl.toggleTimer;



//hw5 日曆 ---------------------------------------------
const updataDateShow = () => {
  let yy = document.getElementById('dateYear').value;
  let mm = document.getElementById('dateMM').value;
  let dd = document.getElementById('dateDD').value;
  document.querySelector('#calendarInfo').innerText = `${yy} 年 ${mm} 月 ${dd} 日`
}
updataDateShow()

const updataDateDay = (day) =>{
  console.log(day)
  let output = ""
  for(let i=1; i<=day; i++){
    output += `<option value='${i}'>${i}</option>`
  }
  document.querySelector('#dateDD').innerHTML = output;
}
updataDateDay(31);

document.querySelectorAll('#dateYear, #dateMM').forEach((e) => {
  e.addEventListener('change', () => {
    let yy = document.getElementById('dateYear').value;
    let mm = document.getElementById('dateMM').value;
    console.log(yy, mm);
    if(mm == 2){
      let date = new Date(`${yy}, ${mm}, 29`);
      if(date.getMonth()+1 == mm) updataDateDay(29)
      else updataDateDay(28);
    }else{
      let date = new Date(`${yy}, ${mm}, 31`);
      if(date.getMonth()+1 == mm) updataDateDay(31)
      else updataDateDay(30);
    }
  })
})

document.querySelectorAll('.calendar select').forEach((e) => {
  e.addEventListener('change', updataDateShow)
})


