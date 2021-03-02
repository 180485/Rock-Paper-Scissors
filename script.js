
   function getOptionComputer (){
      const comp = Math.random();

      if( comp < 0.34 )return'rock';
      if( comp >= 0.34 && comp < 0.67 ) return 'scissors';
      return 'hand'; 
    
   }

   function  getResult(comp, player){
 
      if( player == comp )return 'DRAW!';
      if( player == 'rock' ) return ( comp == 'scissors' ) ? ' YOU WIN!' 
      : ' YOU LOSE';
    
      if( player == 'scissors' ) return( comp == 'rock' ) ? ' YOU LOSE ' 
      : 'YOU WIN!';
    
      if( player == 'hand' ) return ( comp == 'scissors' ) ? 'YOU LOSE ' 
      : 'YOU WIN!';
    
   }  

   
    const pRock = document.querySelector (".rock");
    pRock.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = pRock.className 
    const result = getResult(optionComputer , optionPlayer);
   
   

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png');

   const info = document.querySelector('.info');
   info.innerHTML = result;

   

});


    
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
   






 
