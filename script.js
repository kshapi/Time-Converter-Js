const secend = document.querySelector('#secend h3');
const frist = document.querySelector('#frist h2');
const btns = document.querySelectorAll('#btns .btn');
const select = document.querySelectorAll('#inputs select');


let click = 'fristInput';
let fristOption,
    secendOption;
    
//init load when page loaded
fristOption = select[0].value;
secendOption = select[1].value
frist.style.color = 'yellow'
frist.style.borderRight = '2px solid yellow';


const focus = (e) => {
  const target = e.target;
  const id = e.target.parentElement.id;
  
  if (id == 'frist') {
    click = 'fristInput';
    secend.style.color = null;
    frist.style.color = 'yellow';
    secend.style.borderRight = null;
    frist.style.borderRight = '2px solid yellow';
  }else {
    click = 'secendInput';
    frist.style.color = null;
    secend.style.color = 'yellow';
    frist.style.borderRight =  null;
    secend.style.borderRight = '2px solid yellow';
  };
  
};
frist.addEventListener('click', focus);
secend.addEventListener('click', focus);


//When any btn clicked
const keys = (event) => {
  const btn = event.target.innerText;
  
  //Checking btns
  if (btn == 'AC') {
    if (click == 'fristInput') {
      frist.innerText = '';
      secend.innerText = '0';
    }else {
      secend.innerText = '';
      frist.innerText = '0';
    };
    return;
  }else if (btn == 'X') {
    if (click == 'fristInput') {
      frist.innerText = frist.innerText.slice(0, -1);
      calculation();
    }else {
      secend.innerText = secend.innerText.slice(0, -1);
      calculation();
    };
    return;
    
  };
  
  if (click == 'fristInput') {
      frist.innerHTML += btn;
      calculation();
  }else {
    secend.innerHTML += btn;
    calculation();
  };
  
};
//click event for all btns
btns.forEach(btn => {
  btn.addEventListener('click', keys);
});

//Get select value when Change
select[0].onchange = function() {
  fristOption = this.value;
  calculation()
}
select[1].onchange = function() {
  secendOption = this.value;
  calculation()
}


//All Calculation
const calculation = () => {
  
  if (click === 'fristInput') {
    //YEAR TO ....
    if (fristOption == 'year' && secendOption == 'year') {
      secend.innerText = frist.innerText;
    }else if (fristOption == 'year' && secendOption == 'week'){
      secend.innerText = frist.innerText * 12 * 4.3452380;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'year' && secendOption == 'day') {
      secend.innerText = parseInt(frist.innerText * 12 * 30.41666667);
    }else if (fristOption == 'year' && secendOption == 'hour') {
      secend.innerText = parseInt(frist.innerText * 12 * 30.41666667 * 24);
    }else if (fristOption == 'year' && secendOption == 'minutes'){
      secend.innerText = parseInt(frist.innerText * 12 * 30.41666667 * 24 * 60);
    }else if(fristOption == 'year' && secendOption == 'secend'){
      secend.innerText = parseInt(frist.innerText * 12 * 30.41666667 * 24 * 60 * 60);
    }else if (fristOption == 'year' && secendOption == 'millisecend') {
      secend.innerText = parseInt(frist.innerText * 12 * 30.416666667 * 24 * 60 * 60 * 1000);
    }
    
    //WEEK TO ....
    else if (fristOption == 'week' && secendOption == 'year') {
      secend.innerText = frist.innerText / 52;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'week' && secendOption == 'week') {
      secend.innerText = frist.innerText;
    }else if (fristOption == 'week' && secendOption == 'day') {
      secend.innerText = frist.innerText * 7;
    }else if (fristOption == 'week' && secendOption == 'hour') {
      secend.innerText = frist.innerText * 7 * 24;
    }else if (fristOption == 'week' && secendOption == 'minutes') {
      secend.innerText = frist.innerText * 7 * 24 * 60;
    }else if (fristOption == 'week' && secendOption == 'secend') {
      secend.innerText = frist.innerText * 7 * 24 * 60 * 60;
    }else if (fristOption == 'week' && secendOption == 'millisecend') {
      secend.innerText = frist.innerText * 7 * 24 * 60 * 60 * 1000;
    }
    
    //DAY TO ....
    else if (fristOption == 'day' && secendOption == 'year') {
      secend.innerText = frist.innerText / 365;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'day' && secendOption == 'week') {
      secend.innerText = frist.innerText / 7;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'day' && secendOption == 'day') {
      secend.innerText = frist.innerText;
    }else if (fristOption == 'day' && secendOption == 'hour') {
      secend.innerText = frist.innerText * 24;
    }else if (fristOption == 'day' && secendOption == 'minutes') {
      secend.innerText = frist.innerText * 24 * 60;
    }else if (fristOption == 'day' && secendOption == 'secend') {
      secend.innerText = frist.innerText * 24 * 60 * 60;
    }else if (fristOption == 'day' && secendOption == 'millisecend') {
      secend.innerText = frist.innerText * 24 * 60 * 60 * 1000;
    }
    
    //HOUR TO ....
    else if (fristOption == 'hour' && secendOption == 'year') {
      secend.innerText = frist.innerText / 8760;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'hour' && secendOption == 'week') {
      secend.innerText = frist.innerText / 7 / 24;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'hour' && secendOption == 'day') {
      secend.innerText = frist.innerText * 24;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'hour' && secendOption == 'hour') {
      secend.innerText = frist.innerText;
    }else if (fristOption == 'hour' && secendOption == 'minutes') {
      secend.innerText = parseInt(frist.innerText * 60);
    }else if (fristOption == 'hour' && secendOption == 'secend') {
      secend.innerText = parseInt(frist.innerText * 60 * 60);
    }else if (fristOption == 'hour' && secendOption == 'millisecend') {
      secend.innerText = parseInt(frist.innerText * 60 * 60 * 1000);
    }
    
    //MINUTE TO ....
    else if (fristOption == 'minutes' && secendOption == 'year') {
      secend.innerText = frist.innerText / 525600;
      //fix Text Length
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'minutes' && secendOption == 'week') {
      secend.innerText = frist.innerText / 7 / 24 / 60;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'minutes' && secendOption == 'day') {
      secend.innerText = frist.innerText / 60 / 24;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'minutes' && secendOption == 'hour') {
      secend.innerText = frist.innerText / 60;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'minutes' && secendOption == 'minutes') {
      secend.innerText = frist.innerText;
    }else if (fristOption == 'minutes' && secendOption == 'secend') {
      secend.innerText = parseInt(frist.innerText * 60);
    }else if (fristOption == 'minutes' && secendOption == 'millisecend') {
      secend.innerText = parseInt(frist.innerText * 60 * 1000);
    }
    
    //SECEND TO ....
    else if (fristOption == 'secend' && secendOption == 'year') {
      secend.innerText = frist.innerText / 31536000;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'secend' && secendOption == 'week') {
      secend.innerText = frist.innerText / 7 / 24 / 60 / 60;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'secend' && secendOption == 'day') {
      secend.innerText =frist.innerText / 60 / 24 / 60;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'secend' && secendOption == 'hour') {
      secend.innerText = frist.innerText / 60 / 60;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'secend' && secendOption == 'minutes') {
      secend.innerText = frist.innerText / 60;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'secend' && secendOption == 'secend') {
      secend.innerText = frist.innerText;
    }else if (fristOption == 'secend' && secendOption == 'millisecend') {
      secend.innerText = frist.innerText * 1000;
    }
    
    //MILLISECEND TO ....
    else if (fristOption == 'millisecend' && secendOption == 'year') {
      secend.innerText = frist.innerText / 31557600000;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'millisecend' && secendOption == 'week') {
      secend.innerText = frist.innerText / 7 / 24 / 60 / 60 / 1000;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'millisecend' && secendOption == 'day') {
      secend.innerText = frist.innerText / 60 /24 /60 /1000;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'millisecend' && secendOption == 'hour') {
      secend.innerText = frist.innerText / 60 / 60 / 60;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'millisecend' && secendOption == 'minutes') {
      secend.innerText = frist.innerText /1000 / 60;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'millisecend' && secendOption == 'secend') {
      secend.innerText = frist.innerText / 1000;
      fixLargeNumber(secend.innerText.length, 'secend');
    }else if (fristOption == 'millisecend' && secendOption == 'millisecend') {
      secend.innerText = frist.innerText;
    };
    
  }else {
    
    //YEAR TO ....
    if (fristOption == 'year' && secendOption == 'year') {
      frist.innerText = secend.innerText;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if(fristOption == 'year' && secendOption == 'week') {
      frist.innerText = secend.innerText / 12 / 4.3452381;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'year' && secendOption == 'day') {
      frist.innerText = secend.innerText / 365;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'year' && secendOption == 'hour') {
      frist.innerText = secend.innerText / 8760;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'year' && secendOption == 'minutes') {
      frist.innerText = secend.innerText / 525600;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'year' && secendOption == 'secend') {
      frist.innerText = secend.innerText / 31536000;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'year' && secendOption == 'millisecend') {
      frist.innerText = secend.innerText / 31557600000;
      fixLargeNumber(frist.innerText.length, 'frist');
    }
    
    //WEEK TO ....
    else if (fristOption == 'week' && secendOption == 'year') {
      frist.innerText = secend.innerText / 52 + 0.14028;
      fixLargeNumber(frist.innerText.length, 'frist')
    }else if (fristOption == 'week' && secendOption == 'week') {
      frist.innerText = secend.innerText;
    }else if (fristOption == 'week' && secendOption == 'day') {
      frist.innerText = secend.innerText / 7;
      fixLargeNumber(frist.innerText.length, 'frist')
    }else if (fristOption == 'week' && secendOption == 'hour') {
      frist.innerText = secend.innerText / 7 / 24;
      fixLargeNumber(frist.innerText.length, 'frist')
    }else if (fristOption == 'week' && secendOption == 'minutes') {
      frist.innerText = secend.innerText / 7 / 24 / 60;
      fixLargeNumber(frist.innerText.length, 'frist')
    }else if (fristOption == 'week' && secendOption == 'secend') {
      frist.innerText = secend.innerText / 7 / 24 / 60 / 60;
      fixLargeNumber(frist.innerText.length, 'frist')
    }else if (fristOption == 'week' && secendOption == 'millisecend') {
      frist.innerText = secend.innerText / 7 / 24 / 60 / 60 / 1000;
      fixLargeNumber(frist.innerText.length, 'frist')
    }
    
    //DAY TO ....
    else if (fristOption == 'day' && secendOption == 'year') {
      frist.innerText = parseInt(secend.innerText * 365);
    }else if (fristOption == 'day' && secendOption == 'week') {
      frist.innerText = secend.innerText * 7;
    }else if (fristOption == 'day' && secendOption == 'day') {
      frist.innerText = secend.innerText;
    }else if (fristOption == 'day' && secendOption == 'hour') {
      frist.innerText = secend.innerText / 24;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'day' && secendOption == 'minutes') {
      frist.innerText = secend.innerText / 24 / 60;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'day' && secendOption == 'secend') {
      frist.innerText =secend.innerText / 24 / 60 / 60;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'day' && secendOption == 'millisecend') {
      frist.innerText = secend.innerText / 24 / 60 / 60 / 1000;
      fixLargeNumber(frist.innerText.length, 'frist');
    }
    
    //HOUR TO ....
    else if (fristOption == 'hour' && secendOption == 'year') {
      frist.innerText = parseInt(secend.innerText * 8760);
    }else if (fristOption == 'hour' && secendOption == 'week') {
      frist.innerText = parseInt(secend.innerText * 7 * 24);
    }else if (fristOption == 'hour' && secendOption == 'day') {
      frist.innerText = parseInt(secend.innerText * 24);
    }else if (fristOption == 'hour' && secendOption == 'hour') {
      frist.innerText = secend.innerText;
    }else if (fristOption == 'hour' && secendOption == 'minutes') {
      frist.innerText = parseInt(secend.innerText * 60);
    }else if (fristOption == 'hour' && secendOption == 'secend') {
      frist.innerText = parseInt(secend.innerText * 60 * 60);
    }else if (fristOption == 'hour' && secendOption == 'millisecend') {
      frist.innerText = parseInt(secend.innerText * 60 * 60 * 1000);
    }
    
    //MINUTE TO ....
    else if (fristOption == 'minutes' && secendOption == 'year') {
      frist.innerText = parseInt(secend.innerText * 525600);
    }else if (fristOption == 'minutes' && secendOption == 'week') {
      frist.innerText = parseInt(secend.innerText * 7 * 24 * 60);
    }else if (fristOption == 'minutes' && secendOption == 'day') {
      frist.innerText = parseInt(secend.innerText * 60 * 24);
    }else if (fristOption == 'minutes' && secendOption == 'hour') {
      frist.innerText = parseInt(secend.innerText * 60);
    }else if (fristOption == 'minutes' && secendOption == 'minutes') {
      frist.innerText = secend.innerText;
    }else if (fristOption == 'minutes' && secendOption == 'secend') {
      frist.innerText = secend.innerText / 60;
      fixLargeNumber(frist.innerText.length, 'frist');
    }else if (fristOption == 'minutes' && secendOption == 'millisecend') {
      frist.innerText = secend.innerText / 60 / 1000;
      fixLargeNumber(frist.innerText.length, 'frist');
    }
    
    //SECEND TO ....
    else if (fristOption == 'secend' && secendOption == 'year') {
      frist.innerText = parseInt(secend.innerText * 31536000);
    }else if (fristOption == 'secend' && secendOption == 'week') {
      frist.innerText = parseInt(secend.innerText * 7 * 24 * 60 * 60);
    }else if (fristOption == 'secend' && secendOption == 'day') {
      frist.innerText = parseInt(secend.innerText * 60 * 24 * 60);
    }else if (fristOption == 'secend' && secendOption == 'hour') {
      frist.innerText = parseInt(secend.innerText * 60 * 60);
    }else if (fristOption == 'secend' && secendOption == 'minutes') {
      frist.innerText = parseInt(secend.innerText * 60);
    }else if (fristOption == 'secend' && secendOption == 'secend') {
      frist.innerText = secend.innerText;
    }else if (fristOption == 'secend' && secendOption == 'millisecend') {
      frist.innerText = secend.innerText / 1000;
    }
    
    //MILLISECEND TO ....
    else if (fristOption == 'millisecend' && secendOption == 'year') {
      frist.innerText = parseInt(secend.innerText * 31557600000);
    }else if (fristOption == 'millisecend' && secendOption == 'week') {
      frist.innerText = parseInt(secend.innerText * 7 * 24 * 60 * 60 * 1000);
    }else if (fristOption == 'millisecend' && secendOption == 'day') {
      frist.innerText = parseInt(secend.innerText * 60 * 24 * 60 * 1000);
    }else if (fristOption == 'millisecend' && secendOption == 'hour') {
      frist.innerText = parseInt(secend.innerText * 60 * 60 * 1000);
    }else if (fristOption == 'millisecend' && secendOption == 'minutes') {
      frist.innerText = parseInt(secend.innerText * 60 * 1000);
    }else if (fristOption == 'millisecend' && secendOption == 'secend') {
      frist.innerText = secend.innerText * 1000;
    }else if (fristOption == 'millisecend' && secendOption == 'millisecend') {
      frist.innerText = secend.innerText;
    };
    
  };
  
};



//Fix Text length
const fixLargeNumber = (length, input) => {
  if (length > 4 && input == 'secend') {
    secend.innerText = Number(secend.innerText)
    .toFixed(4);
  };
  
  if (length > 4 && input == 'frist') {
    frist.innerText = Number(frist.innerText)
      .toFixed(5);
  };
  
};

//Kshapii