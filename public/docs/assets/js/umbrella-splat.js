const makeItUmbrellaSplat = () => {
   //clear out everything
   // $('.only-splat-front').empty();

   let increment = 0;
   let drops = '';

   while (increment < 200) {
      let randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      //random number between 5 and 2
      let randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      // drops += `<div class="splat only-splat" style="
      //       animation-delay: 0.${randoHundo}s;
      //       animation-duration: 0.5${randoHundo}s;
      //       right: ${increment}%;
      //       "></div>`;

      // front splat
      drops += `<div class="splat only-splat" style="
            animation-delay: 0.${randoHundo}s;
            animation-duration: 0.5${randoHundo}s;
            left: ${getLeftPosition()}%;
            top: ${getTopPosition()}%;
            position:absolute;
            "></div>`;

      // back splat
      drops += `<div class="splat only-splat splat-back" style="
            animation-delay: 0.${randoHundo}s;
            animation-duration: 0.5${randoHundo}s;
            left: ${getLeftPosition()}%;
            top: ${getTopPosition()}%;
            position:absolute;
            "></div>`;
   }

   $('.only-splat-front').append(drops);
};

function getLeftPosition() {
   return Math.floor(Math.random() * 98);
}

function getTopPosition() {
   return Math.floor(Math.random() * 91);
}

makeItUmbrellaSplat();
