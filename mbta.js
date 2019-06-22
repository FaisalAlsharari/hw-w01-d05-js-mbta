/*At the begining I created an Object 
#1 RedLine 
#2 GreenLine
#3 OrangeLine
After that I put The Stations name as an Arrays
*/
 let TrainStactions = {
     RedLine :[
        'Alewife',
        'Davis',
        'Porter',
        'Harvard',
        'Central',
        'Kendall',
        'Park Street',
        'South Station',

     ],
     GreenLine :[
        'Government Center', 
        'Park Street', 
        'Boylston', 
        'Arlington', 
        'Copley', 
        'Hynes',
      'Kenmore',

     ],
     OrangeLine :[
        'North Station',
         'Haymarket', 
         'Park Street', 
         'State', 
         'Downtown Crossing', 
         'Chinatown', 
         'Back Bay', 
         'Forest Hills',

     ],
 }
   
   // Now i will creat a function that will take parameaters startLine , startStation, endLine, endStation
   const stopsNumber = function(startLine, startStation, endLine, endStation){


 
    if( startLine === endLine && startStation === endStation ){ //Here i use If condation to check the startLine is the same as startStation if so return 0;
        return 0;
    }else if(startLine === endLine){// Here will check  if  startLine is the same as endLine  

        return `${Math.abs(TrainStactions[endLine].indexOf(endStation) - TrainStactions[startLine].indexOf(startStation))}` // if it is then it will calculate the nuber of stops betwwen the same line

    }

    }

