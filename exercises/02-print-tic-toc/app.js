// TODO: Write your solution here.
// Print numbers from 1 to 100.
// Multiples of 3 => "Tic", multiples of 5 => "Toc", multiples of both => "TicToc".

for (let i = 1; i <= 100; i++ ) {

    if ( i % 3 === 0 && i % 5 === 0){
        console.log("TicToc");                 
    }else if (i % 3 === 0) {
        console.log("Tic");
    } else if (i % 5 === 0) {
        console.log("Toc");        
    }else {
        console.log(i);
    }
}
