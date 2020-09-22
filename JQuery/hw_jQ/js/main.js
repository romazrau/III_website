//hw1 9*9 table ---------------------------------------------
$("#hw1").append("<table></table>").children("table").addClass("table99");
for (let i = 1; i < 10; i++) {
  let newTr = $(".table99").append("<tr></tr>").children("tr:last");

  for (let j = 2; j < 10; j++) {
    newTr
      .append("<td></td>")
      .children("td:last")
      .addClass("Rcolor")
      .text(`${j}*${i}=${i * j}`)
      .mouseenter(function () {
        RcolorChange(this);
      });
  }
}

//hw2 form ---------------------------------------------------
const isInputCorrect = (str, type) => {
  let result = { isCorrect: false, message: "" };
  switch (type) {
    case "name":
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
      result.message = time.toLocaleDateString("zh-TW");
      return result;
      break;
  }
  return result;
};

let checkOperation = (e) => {
  let switchCase = e.target.id.slice(5).toLowerCase();
  let inputCheck = isInputCorrect(e.target.value, switchCase);
  let prompt = inputCheck.isCorrect
    ? `<img src="./img/V.png" alt="V">${inputCheck.message}`
    : `<img src="./img/X.png" alt="X"><span class="formCheckX">${inputCheck.message}</span>`;
  $(`#${e.target.id}Prompt`).html(prompt);
};

$(":input")
  .keydown(function (e) {
    if (e.key === "Enter") e.preventDefault();
  })
  .keyup(checkOperation)
  .blur(checkOperation);

//hw3 五燈獎  ---------------------------------------------
const changeImg = (score) => {
  $(".starRow")
    .children(`:lt(${score})`)
    .attr("src", "./img/chikyu_inseki_syoutotsu.png")
    .end()
    .children()
    .not(`:lt(${score})`)
    .attr("src", "./img/space_nissyoku_glass_man.png");
};

let HowManyStarIHave = 0;
$(".starRow")
  .children()
  .on({
    click: function () {
      let score = $(this).attr("score");
      changeImg(score);
      HowManyStarIHave = score;
      $("#starIGet").text(`獲得${HowManyStarIHave}顆星`);
    },
    mouseenter: function () {
      let score = $(this).attr("score");
      changeImg(score);
      $("#starIGet").text(`評分中...${score}`);
    },
    mouseleave: function () {
      changeImg(HowManyStarIHave);
      $("#starIGet").text(
        HowManyStarIHave == 0 ? "" : `獲得${HowManyStarIHave}顆星`
      );
    },
  });

$("#btnStarsReset").click(() => {
  HowManyStarIHave = 0;
  changeImg(HowManyStarIHave);
  $("#starIGet").text("");
});

//hw4 精靈屋 ---------------------------------------------
//動畫控制類別
function ClsCarouselContl() {
  //img 初始值 配合css
  let imgNum = 6;
  let imgWidth = 70;
  let imgWidthUnit = "vmin";

  //控制項
  let imgLocation = Array(imgNum)
    .fill(0)
    .map((e, i) => imgWidth * -i);
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

  //動畫邏輯
  function animationCarousel() {
    marginMove =
      marginMove > imgLocation[imgFocusIndex]
        ? marginMove - 1 - (marginMove - imgLocation[imgFocusIndex]) / 15
        : marginMove + 1 - (marginMove - imgLocation[imgFocusIndex]) / 15;
    marginMove = parseInt(marginMove);

    $('#carousel').css('margin-left', `${marginMove}${imgWidthUnit}`)

    if (marginMove != imgLocation[imgFocusIndex]) {
      requestAnimationFrame(animationCarousel);
    }
  }

  //btn css
  function focusBtn(index) {
    $(`#btn-carousel-index${index + 1}`).css('border', "2px solid black")
      .siblings().css('border', '0');
  }

  //自動撥放區
  let timer = setInterval(() => {
    this.set2NextPrevImg(1);
  }, 3000);
  let isOn = 1;
  this.toggleTimer = () => {
    if (isOn) {
      clearInterval(timer);
      isOn = 0;
      $("#btn-carousel-toggle").html('<img src="./img/continue.png" alt="continue">').css('background-color', '#ea907ac0');
    } else {
      timer = setInterval(() => {
        this.set2NextPrevImg(1);
      }, 3000);
      isOn = 1;
      $("#btn-carousel-toggle").html('<img src="./img/stop.png" alt="stop">').css('background-color', '#ea907a');
    }
  };

  //hover
  let isHover2stop = 0;
  this.hoverToggleTimer = (isEnter = 1) => {
    switch (isEnter) {
      case 1:
        if (isOn) {
          this.toggleTimer();
          isHover2stop = 1;
        } else {
          isHover2stop = 0;
        }
        break;
      case 0:
        if (isHover2stop && isOn == 0) {
          this.toggleTimer();
        }
        isHover2stop = 0;
        break;
    }
  };
}
let CarouselContrl = new ClsCarouselContl();

//控制btn
$(".carousel-ctrl-btn").first().children().first().css("border", "2px solid black")
  .end().click(
    function () {
      CarouselContrl.set2whichImg(parseInt($(this).text() - 1));
    }
  ).end().next().children().first().click(() => CarouselContrl.set2NextPrevImg(-1))
  .next().click(CarouselContrl.toggleTimer)
  .next().click(() => CarouselContrl.set2NextPrevImg(1));

//img hover
$('#carousel').hover(
  () => CarouselContrl.hoverToggleTimer(1),
  () => CarouselContrl.hoverToggleTimer(0)
);




//hw5  ---------------------------------------------
function ClsCarousel2(){
  const show = () => {
    showIndex = showIndex < 0
      ? $('.btn-carousel2-index').length - 1
      : showIndex >= $('.btn-carousel2-index').length
        ? 0
        : showIndex;
    $(`.btn-carousel2-index:eq(${showIndex})`).css('background-color', '#ea907a').siblings().css('background-color', 'transparent');
    $('#carousel2').css('margin-left', `-${showIndex * 70}vmin`);
  }
  
  let showIndex = 0;
  $('.btn-carousel2-index:first').first().css('background-color', '#ea907a');
  $(".btn-carousel2-index").mouseenter(function () {
    showIndex = $(this).index();
    show();
  }
  );
  
  $("#btn-carousel2-2left").click(function () {
    showIndex--;
    show();
  });
  
  $("#btn-carousel2-2right").click(function () {
    showIndex++;
    show();
  });
  
  $('#carousel2-container').hover(
    () => hoverToggleTimer(1),
    () => hoverToggleTimer(0)
  );
  
  //自動撥放區
  let timer2 = setInterval(() => {
    showIndex++;
    show();
  }, 3000);
  let isOn = 1;
  const toggleTimer = () => {
    if (isOn) {
      clearInterval(timer2);
      isOn = 0;
    } else {
      timer2 = setInterval(() => {
        showIndex++;
        show();
      }, 3000);
      isOn = 1;
    }
  };
  
  //hover
  let isHover2stop = 0;
  const hoverToggleTimer = (isEnter = 1) => {
    switch (isEnter) {
      case 1:
        if (isOn) {
          toggleTimer();
          isHover2stop = 1;
        } else {
          isHover2stop = 0;
        }
        break;
      case 0:
        if (isHover2stop && isOn == 0) {
          toggleTimer();
        }
        isHover2stop = 0;
        break;
    }
  };
}
let carousel2 = new ClsCarousel2();


//hw6  ---------------------------------------------
const resizePenguin = () => {
  let height = $(window).height();
  let width = $(window).width();

  $('#img-resize-penguin').css('width', width/5 ).css('height', height/5);

  let top = (height - $('#img-resize-penguin').height()) /2;
  let left = (width - $('#img-resize-penguin').width()) /2;

  $('#img-resize-penguin').css('top', top).css('left', 'left');
}

resizePenguin();

$(window).resize(function(){
  resizePenguin();
})



// AJAX test
$.ajax({
  type: 'GET',
  url: 'http://localhost:3050/users/testGuest',
  success: function(msg) {
    console.log(msg);
  }
});


