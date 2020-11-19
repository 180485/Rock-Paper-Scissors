
// in this exercise i  making  2  function for computer and player


   // rules option for computer
   function getOptionComputer (){
      const comp = Math.random();

      if( comp < 0.34 )return'rock'; //i used return they will stop  untill here and they return to the next value
      if( comp >= 0.34 && comp < 0.67 ) return 'scissors';
      return 'hand'; 
    

   }
//ruless option for players
   function  getResult(comp, player){
 
      if( player == comp )return 'DRAW!';
      if( player == 'rock' ) return ( comp == 'scissors' ) ? ' YOU WIN!' 
      : ' YOU LOSE';  //i used this (:) IS mean apart from that depend what computer gonna choose we could be lose 
    
      if( player == 'scissors' ) return( comp == 'rock' ) ? ' YOU LOSE ' 
      : 'YOU WIN!';
    
      if( player == 'hand' ) return ( comp == 'scissors' ) ? 'YOU LOSE ' 
      : 'YOU WIN!';
    
   }  
// return The expression whose value is to be returned. If omitted, undefined is returned instead
//make our code shorter AND easy to understand 


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

//make random picture on computer





 
