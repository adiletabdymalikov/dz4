
let rotateX = 0, rotateY = 0 ;

$("#rotateX").ready(function () {
  rotateX += 9000;
  $(".cube").css("transform",
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  );
});

$("#rotateY").ready(function () {
  rotateY += 9000;
  $(".cube").css("transform",
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  );
});



setInterval(() => {
  rotateX += 90;
  rotateY += 90;

  $(".cube").css("transform",
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  );
}, 2000); 
function toggleCubes() {
  // Сначала скрываем все кубы
  $(".cube").addClass("hidden");

  // Появление по очереди
  setTimeout(() => { $(".cube1").removeClass("hidden"); }, 1000);
  setTimeout(() => { $(".cube2").removeClass("hidden"); }, 2000);
  setTimeout(() => { $(".cube3").removeClass("hidden"); }, 3000);
  setTimeout(() => { $(".cube4").removeClass("hidden"); }, 4000);
}

// Запуск цикла
setInterval(toggleCubes, 6000);
toggleCubes();