module.exports = function zeros(exp) {
    let part = exp.split("*");
    let two=0;
    let five=0;

    part.map(elem => {
      let period,
        num;
  
      if (elem[elem.length-1]=='!' && elem[elem.length-2]=='!') {
        period = 2;
        num = +elem.slice(0, -2);
      } else {
        period = 1;
        num = +elem.slice(0, -1);
      }
      for(; 0 < num ; num -= period) {
        let temp=num;
        while (temp % 5 == 0) { 
          temp /= 5;
          five++;
        }
      temp=num;
        while (temp % 2 == 0) {
          temp /= 2;
          two++;
        }
      }
    });

    return Math.min(two, five);
  }

