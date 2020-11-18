



   // option for computer
   function getOptionComputer (){
    const comp = Math.random();

    if( comp < 0.34 )return'rock'; //i used return they will stop and comeback to next value 
    if( comp >= 0.34 && comp < 0.67 ) return 'scissors';
    return 'hand'; //i chose this number cause in this case i dont need Math.
    

   }
//adding rules in games  for getting the result 
   function  getResult(comp, player){
     
//i dont need var result cause i need to return  them
    if( player == comp )return 'draw!';
    if( player == 'rock' ) return ( comp == 'scissors' ) ? ' YOU WIN !' 
    : ' YOU LOSE';  //i used this (:) IS mean apart from that they can to be lose or win depend on what computer gonna choose
    
    if( player == 'scissors' ) return( comp == 'rock' ) ? ' YOU LOSE ' 
    : 'YOU WIN!';
    
    if( player == 'hand' ) return ( comp == 'scissors' ) ? 'YOU LOSE! ' 
    : 'YOU WIN!';
    
   }  

    // return The expression whose value is to be returned. If omitted, undefined is returned instead.
   //make our code shorter this case

 
// so i make  this rock button works by clicking and i used document.querySelector to call my class
   
   const pRock = document.querySelector (".rock");
    pRock.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = pRock.className //is calling class name from html
    const result = getResult(optionComputer , optionPlayer);
   
    //console.log('comp :' + optionComputer);
   //console.log('player :' + optionPlayer);
   //console.log('anwser' : + result);

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png'); //i used this set attribute to change a picture for computer 
   //bycalling class number and i put (img/  )is because i put my image in folder img (this is for computer choosing random image)

   const info = document.querySelector('.info');
   info.innerHTML = result;

   

});

// and i just copy from the one i make above for others pscissors (player scissors)
    
    const pscissors = document.querySelector (".scissors");
    pscissors.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = pscissors.className
    const result = getResult(optionComputer , optionPlayer)

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png');

   const info = document.querySelector('.info');
   info.innerHTML = result;

})
    
// and the last i make  this  button for phands (player hand )

    const phand = document.querySelector (".hand");
    phand.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = phand.className
    const result = getResult(optionComputer , optionPlayer)

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png');

   const info = document.querySelector('.info');
   info.innerHTML = result;


}) 
   
// for 3 button i choose to make it one by one cause i found this easier right now for me to understand