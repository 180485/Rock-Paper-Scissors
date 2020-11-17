
   //is option for computer
   function getOptionComputer (){
    const comp = Math.random();

    if( comp < 0.34 )  return'rock';
    if( comp >= 0.34 && comp < 0.67 ) return 'scissors';
    return 'hand';
    
   
}
//adding rules in game (i choose return insted of else )
function  getResult(comp, player){
     
    var result = '';
    if( player == comp )return 'draw!';
    if( player == 'rock' ) return ( comp == 'scissors' ) ? 'WIN !' : ' LOSE!';
    if( player == 'scissors' ) return( comp == 'rock' ) ? 'LOSE !' : 'WIN!';
    if( player == 'scissors' ) return ( comp == 'hand' ) ? 'LOSE' : 'WIN!';
    
   
}
 
// so i make  this rock button works by clicking and i used document.querySelector to call my class
const pRock = document.querySelector (".rock");
pRock.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = pRock.className
    const result = getResult(optionComputer , optionPlayer);
   
    //console.log('comp :' + optionComputer);
   //console.log('player :' + optionPlayer);
   //console.log('anwser' + result);

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png'); //i used this set attribute for change a picture for computer 
   //bycalling class numbur and (img/  )is because i put my image in folder img

   const info = document.querySelector('.info');
   info.innerHTML = result;

   

});

// so i make  this 2nd button for scissors
const pscissors = document.querySelector (".scissors");
pscissors.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = pRock.className
    const result = getResult(optionComputer , optionPlayer)

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png');

   const info = document.querySelector('.info');
   info.innerHTML = result;

})
    // and the last i make  this  button for hands

    const phand = document.querySelector (".hand");
    phand.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = pRock.className
    const result = getResult(optionComputer , optionPlayer);

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png');

   const info = document.querySelector('.info');
   info.innerHTML = result;

})
