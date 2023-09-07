const profession = document.querySelector(".profession");
const textToBeTyped = "Web Designer , Web Developer , Front End Developer";
let index = 0,
  isAdding = true;

function playAnim() {
  setTimeout(function () {
    profession.innerText = textToBeTyped.slice(0, index);

    profession.innerText = textToBeTyped.slice(0, index);
    if (isAdding) {
      if (index > textToBeTyped.length) {
        isAdding = false;
        setTimeout(function () {
          playAnim();
        }, 2000);
        return;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        isAdding = true;
      } else {
        index--;
      }
    }

    playAnim();
  }, 100);
}

playAnim();

//navbar 
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        // $('.navbar').fadeIn('slow').css('display', 'block');
      $('.navbar').fadeIn('slow').show();
    } else {
        $('.navbar').fadeOut('slow').hide();
    }
})

//skill
// $('.skill').waypoint(function (){
//     $('.progress .progress-bar').each(function (){
//         $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
// }, { offset: '80%' });
// $(".progress-bar").each(function(){
//   $(this).find(".progress .progress-bar").animate({
//     width: $(this).attr("data-width")
//   },2000)
// });
$(".progress-bar").each(function (index, element) {
  // console.log(a)
  // $(this).find(".progress-bar");
  console.log($(this).attr('aria-valuenow'));
  $(this).animate({
    width: $(this).attr("aria-valuenow")+'%'
  },550)
});

let nama = $("#nama").val();
let email = $("#email").val();
let subject = $("#subject").val();
let msg = $("#msg").val();
let emailpemilik = 'adis14498@gmail.com';
document.getElementById('send').href = `mailto:${emailpemilik}.com?subject=${subject}&body=from ${email} , \n Hello my name is ${nama}\n"${msg}"`