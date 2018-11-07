document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },10);
  }
}










// <div class="container">
//             <div class="row index">
//                 <div class="col-sm">
//                     <img src="world.png" class="img-thumbnail">
//     </div>
//                     <div class="col-sm">
//                         <img src="world.png" class="img-thumbnail">

//     </div>
//                         <div class="col-sm">
//                             <img src="world.png" class="img-thumbnail">

//     </div>
//                         </div>
//                     </div>