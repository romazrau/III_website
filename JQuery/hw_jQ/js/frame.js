//create and use random color 
const randomColorString = () => {
  const random255 = () => {
    return Math.floor(Math.random() * 50 + 200);
  }
  return `rgb(250,${random255()},${random255()})`;
}
$('.Rcolor').each(function(){
  $(this).css('background-color',randomColorString());
})

const RcolorChange = (element) => {
  $(element).css('background-color',randomColorString());
}


//show card hover animation
$('.showCard').hover(
  function(){$(this).removeClass("showCard-hover-over").addClass("showCard-hover")},
  function(){$(this).addClass("showCard-hover-over").removeClass("showCard-hover")},
)



//navbar and show card switch 
$('.navItem').click(function(){
  $(this).addClass('focus').parent().children().not(this).removeClass('focus');
  $(`#${$(this).attr('id').slice(-3)}`).siblings().addClass('disable').end().removeClass('disable',"showCard-hover","showCard-hover-over")
});


