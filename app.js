var actual = 'foto1';

console.log(document.getElementById("Bookmark"))

document.getElementById("Back1").addEventListener('click', function(){
  if (actual == 'foto1'){
    document.getElementById("Bookmark").src = "images/icon-bookmark2.png";
    document.getElementById("textBookmark").innerHTML = "<b>Bookmarked</b>";
    document.getElementById("textBookmark").style.color = "hsl(176, 72%,28%)";
    actual = 'foto2'
  }else {
    document.getElementById("Bookmark").src = "images/icon-bookmark.svg";
    document.getElementById("textBookmark").innerHTML = "<b>Bookmark</b>";
    document.getElementById("textBookmark").style.color = "hsl(0, 0%, 48%)";
    actual = 'foto1'
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////

var btnAbrirPopup = document.getElementById("Back"),
  overlay = document.getElementById("overlay"),
  popup = document.getElementById("popup"),
  btncerrarpopup = document.getElementById("btn-cerrar-popup");

btnAbrirPopup.addEventListener('click', function(){
  overlay.classList.add('active');
  popup.classList.add('active');
});

btncerrarpopup.addEventListener('click', function(){
  overlay.classList.remove('active');
  popup.classList.remove('active');
  document.getElementById("number-popup").value = '';
  document.getElementById("number-popup1").value = '';
  document.getElementById("number-popup2").value = '';
  document.getElementById("number-popup3").value = '';
});

btnAbrirPopup.addEventListener('click', function(){
  if (sumnumcontributors > 99800){
    cardtres.style.opacity = "0.5";
    btncontinue2.addEventListener('click', function(){
      ""
    });
    numerocard3.innerHTML = 0 + " left";
    newArr[3].style.opacity = "0.5";
    newArr2[3].disabled = true;
    numMa.innerHTML = 0 + " left";

    if (sumnumcontributors > 99925){
      carddos.style.opacity = "0.5";
      btncontinue1.addEventListener('click', function(){
        ""
      });
      numerocard2.innerHTML = 0 + " left";
      newArr[2].style.opacity = "0.5";
      newArr2[2].disabled = true;
      numblack.innerHTML = 0 + " left";

      if (sumnumcontributors > 99975){
        carduno.style.opacity = "0.5";
        btncontinue.addEventListener('click', function(){
          ""
        });
        numerocard1.innerHTML = 0 + " left";
        newArr[1].style.opacity = "0.5";
        newArr2[1].disabled = true;
        objetivo.innerHTML = 0 + " left";
      }
    }
  } 
});

btncerrarpopup.addEventListener('click', function(){
  sumnumcontributors
  if (sumnumcontributors<= 99800){
  let Arr = [pledge, pledge1, pledge2, pledge3];
  let Arr2 = [document.getElementById("noreward"), document.getElementById("Bamboo-Stand"), document.getElementById("BlackEdition"),document.getElementById("MahoganySpecial")];

    for (let i=0; i<Arr.length; i++ ){
      Arr[i].classList.remove('active');
      Arr2[i].checked = false;
      Arr[i].parentNode.style = "";
    }
  }else{
    if (sumnumcontributors > 99800){
      cardtres.style.opacity = "0.5";
      btncontinue2.addEventListener('click', function(){
        ""
      });
      numerocard3.innerHTML = 0 + " left";
      newArr[3].style.opacity = "0.5";
      newArr2[3].disabled = true;
      numMa.innerHTML = 0 + " left";
  
      if (sumnumcontributors > 99925){
        carddos.style.opacity = "0.5";
        btncontinue1.addEventListener('click', function(){
          ""
        });
        numerocard2.innerHTML = 0 + " left";
        newArr[2].style.opacity = "0.5";
        newArr2[2].disabled = true;
        numblack.innerHTML = 0 + " left";
  
        if (sumnumcontributors > 99975){
          carduno.style.opacity = "0.5";
          btncontinue.addEventListener('click', function(){
            ""
          });
          numerocard1.innerHTML = 0 + " left";
          newArr[1].style.opacity = "0.5";
          newArr2[1].disabled = true;
          objetivo.innerHTML = 0 + " left";
        }
      }
    } 
  }

});

//////////////////////////////////////////////////////////////////////////////////////////////

let customCheckboxes = document.getElementsByClassName('custom-checkbox');
let customStyles = `border: 2px solid hsl(176, 50%, 47%);`;
let pledge = document.getElementById('pledge')

var btnmenos0 = document.getElementById("continue-popup");

for (const box of customCheckboxes) {
  box.addEventListener('change', (event) => {
    let parent = event.target.parentNode;

    if (event.target.checked) {
      parent.style = customStyles;
      pledge.classList.add('active');

      document.getElementById("number-popup1").value = '';
      document.getElementById("number-popup2").value = '';
      document.getElementById("number-popup3").value = '';

      if (sumnumcontributors<100000){
        let Arr = [pledge1, pledge2, pledge3];
        let Arr2 = [document.getElementById("Bamboo-Stand"), document.getElementById("BlackEdition"), document.getElementById("MahoganySpecial")];

        for (let i=0; i<Arr.length; i++ ){
          Arr[i].classList.remove('active');
          Arr2[i].checked = false;
          Arr[i].parentNode.style = "";
        }
        
        if (sumnumcontributors > 99800){
          cardtres.style.opacity = "0.5";
          btncontinue2.addEventListener('click', function(){
            ""
          });
          numerocard3.innerHTML = 0 + " left";
          newArr[3].style.opacity = "0.5";
          newArr2[3].disabled = true;
          numMa.innerHTML = 0 + " left";
      
          if (sumnumcontributors > 99925){
            carddos.style.opacity = "0.5";
            btncontinue1.addEventListener('click', function(){
              ""
            });
            numerocard2.innerHTML = 0 + " left";
            newArr[2].style.opacity = "0.5";
            newArr2[2].disabled = true;
            numblack.innerHTML = 0 + " left";
      
            if (sumnumcontributors > 99975){
              carduno.style.opacity = "0.5";
              btncontinue.addEventListener('click', function(){
                ""
              });
              numerocard1.innerHTML = 0 + " left";
              newArr[1].style.opacity = "0.5";
              newArr2[1].disabled = true;
              objetivo.innerHTML = 0 + " left";
            }
          }
        } 
      }

      btnmenos0.addEventListener('click', function(){
          
        if (document.getElementById("number-popup").value.length === 0){

          btnmenos.addEventListener('click', function(){
            ""
          });

        }else if (document.getElementById("number-popup").value>0 && document.getElementById("number-popup").value<=100000){

          popup.classList.remove('active');
          Thanks.classList.add('active');
          pledge.classList.remove('active');
        }

      });

      btnmenos0.addEventListener('click', function(){

        if (document.getElementById("number-popup").value>0 && document.getElementById("number-popup").value<=100000){
          let numcontributors = document.getElementById("number-popup").value;
          sumnumcontributors = parseInt(numcontributors) + sumnumcontributors;
          contributors.innerHTML = "$ " + sumnumcontributors.toLocaleString("en-US");
          document.getElementById("number-popup").value = '';
          sumnumcontributors
          
            if (sumnumcontributors < 100000){
              objetivo.innerHTML = Math.round((100000-sumnumcontributors)/25) +' left';
              numblack.innerHTML = Math.round((100000-sumnumcontributors)/75) +' left';
              numMa.innerHTML = Math.round((100000-sumnumcontributors)/200) +' left';
              numerocard1.innerHTML = Math.round((100000-sumnumcontributors)/25) + " left";
              numerocard2.innerHTML = Math.round((100000-sumnumcontributors)/75) + " left";
              numerocard3.innerHTML = Math.round((100000-sumnumcontributors)/200) + " left";
            }else{
              objetivo.innerHTML = 0 +' left';
              numblack.innerHTML = 0 +' left';
              numMa.innerHTML = 0 +' left';

              let Arrcard = [carduno, carddos, cardtres]
              let Arrbtns = [btncontinue, btncontinue1, btncontinue2]
              let Arrnumcard = [numerocard1, numerocard2, numerocard3]
              for (let i=0 ; i<Arrcard.length ; i++){

                Arrcard[i].style.opacity = "0.5";
                Arrbtns[i].addEventListener('click', function(){
                ""
                });
                Arrnumcard[i].innerHTML = 0 + " left";
              }

            }
        }
      
      });

    } else {
      parent.style = "";
      pledge.classList.remove('active');
      document.getElementById("number-popup").value = '';
    }

  });
}

//////////////////////////////////////////////////////////////////////////////////////////////

let customCheckboxes1 = document.getElementsByClassName('custom-checkbox1');
let customStyles1 = `border: 2px solid hsl(176, 50%, 47%);`;
let pledge1 = document.getElementById('pledge1')
let objetivo = document.getElementById('numbamboo');

var btnmenos = document.getElementById("continue-popup1");
let Thanks = document.getElementById('Thanks');
var numero = 100000/25;
objetivo.innerHTML = numero + ' left';

for (const box of customCheckboxes1) {
  box.addEventListener('change', (event) => {
    let parent = event.target.parentNode;

    if (event.target.checked) {
      parent.style = customStyles1;
      pledge1.classList.add('active');

      document.getElementById("number-popup").value = '';
      document.getElementById("number-popup2").value = '';
      document.getElementById("number-popup3").value = '';

        if (sumnumcontributors<100000){
          let Arr = [pledge, pledge2, pledge3];
          let Arr2 = [document.getElementById("noreward"), document.getElementById("BlackEdition"), document.getElementById("MahoganySpecial")];

          for (let i=0; i<Arr.length; i++ ){
            Arr[i].classList.remove('active');
            Arr2[i].checked = false;
            Arr[i].parentNode.style = "";
          }
      

          if (sumnumcontributors > 99800){
            cardtres.style.opacity = "0.5";
            btncontinue2.addEventListener('click', function(){
              ""
            });
            numerocard3.innerHTML = 0 + " left";
            newArr[3].style.opacity = "0.5";
            newArr2[3].disabled = true;
            numMa.innerHTML = 0 + " left";
        
            if (sumnumcontributors > 99925){
              carddos.style.opacity = "0.5";
              btncontinue1.addEventListener('click', function(){
                ""
              });
              numerocard2.innerHTML = 0 + " left";
              newArr[2].style.opacity = "0.5";
              newArr2[2].disabled = true;
              numblack.innerHTML = 0 + " left";
        
              if (sumnumcontributors > 99975){
                carduno.style.opacity = "0.5";
                btncontinue.addEventListener('click', function(){
                  ""
                });
                numerocard1.innerHTML = 0 + " left";
                newArr[1].style.opacity = "0.5";
                newArr2[1].disabled = true;
                objetivo.innerHTML = 0 + " left";
              }
            }
          } 
        }

        btnmenos.addEventListener('click', function(){
          
          if (document.getElementById("number-popup1").value.length === 0){

            btnmenos.addEventListener('click', function(){
              ""
            });
          
          }else if (document.getElementById("number-popup1").value>=25 && document.getElementById("number-popup1").value<=74){

            popup.classList.remove('active');
            Thanks.classList.add('active');
            pledge1.classList.remove('active');

          }
          
        });

        btnmenos.addEventListener('click', function(){
  
          if (document.getElementById("number-popup1").value>=25 && document.getElementById("number-popup1").value<=74){
            let numcontributors = document.getElementById("number-popup1").value;
            sumnumcontributors = parseInt(numcontributors) + sumnumcontributors;
            contributors.innerHTML = "$ " + sumnumcontributors.toLocaleString("en-US");
            document.getElementById("number-popup1").value = '';
            sumnumcontributors
          
            if (sumnumcontributors < 100000){
              objetivo.innerHTML = Math.round((100000-sumnumcontributors)/25) +' left';
              numblack.innerHTML = Math.round((100000-sumnumcontributors)/75) +' left';
              numMa.innerHTML = Math.round((100000-sumnumcontributors)/200) +' left';
              numerocard1.innerHTML = Math.round((100000-sumnumcontributors)/25) + " left";
              numerocard2.innerHTML = Math.round((100000-sumnumcontributors)/75) + " left";
              numerocard3.innerHTML = Math.round((100000-sumnumcontributors)/200) + " left";
            }else{
              objetivo.innerHTML = 0 +' left';
              numblack.innerHTML = 0 +' left';
              numMa.innerHTML = 0 +' left';

              let Arrcard = [carduno, carddos, cardtres]
              let Arrbtns = [btncontinue, btncontinue1, btncontinue2]
              let Arrnumcard = [numerocard1, numerocard2, numerocard3]
              for (let i=0 ; i<Arrcard.length ; i++){

                Arrcard[i].style.opacity = "0.5";
                Arrbtns[i].addEventListener('click', function(){
                ""
                });
                Arrnumcard[i].innerHTML = 0 + " left";
              }

            }
          }
        
        });

      } else {
      parent.style = "";
      pledge1.classList.remove('active');
      document.getElementById("number-popup1").value = '';
    }

  });
}

///////////////////////////////////////////////////////////////////////////////////

let customCheckboxes2 = document.getElementsByClassName('custom-checkbox2');
let customStyles2 = `border: 2px solid hsl(176, 50%, 47%);`;
let pledge2 = document.getElementById('pledge2')

var btnmenos1 = document.getElementById("continue-popup2");
let btnOk = document.getElementById("got-it");
let numblack = document.getElementById('numblack');
var numero1 = Math.round(100000/75);
numblack.innerHTML = numero1 + ' left';

for (const box of customCheckboxes2) {
  box.addEventListener('change', (event) => {
    let parent = event.target.parentNode;

    if (event.target.checked) {
      parent.style = customStyles2;
      pledge2.classList.add('active');

      document.getElementById("number-popup").value = '';
      document.getElementById("number-popup1").value = '';
      document.getElementById("number-popup3").value = '';

      if (sumnumcontributors<100000){
        let Arr = [pledge, pledge1, pledge3];
        let Arr2 = [document.getElementById("noreward"), document.getElementById("Bamboo-Stand"), document.getElementById("MahoganySpecial")];

        for (let i=0; i<Arr.length; i++ ){
          Arr[i].classList.remove('active');
          Arr2[i].checked = false;
          Arr[i].parentNode.style = "";
        }
    

        if (sumnumcontributors > 99800){
          cardtres.style.opacity = "0.5";
          btncontinue2.addEventListener('click', function(){
            ""
          });
          numerocard3.innerHTML = 0 + " left";
          newArr[3].style.opacity = "0.5";
          newArr2[3].disabled = true;
          numMa.innerHTML = 0 + " left";
      
          if (sumnumcontributors > 99925){
            carddos.style.opacity = "0.5";
            btncontinue1.addEventListener('click', function(){
              ""
            });
            numerocard2.innerHTML = 0 + " left";
            newArr[2].style.opacity = "0.5";
            newArr2[2].disabled = true;
            numblack.innerHTML = 0 + " left";
      
            if (sumnumcontributors > 99975){
              carduno.style.opacity = "0.5";
              btncontinue.addEventListener('click', function(){
                ""
              });
              numerocard1.innerHTML = 0 + " left";
              newArr[1].style.opacity = "0.5";
              newArr2[1].disabled = true;
              objetivo.innerHTML = 0 + " left";
            }
          }
        } 
      }

      btnmenos1.addEventListener('click', function(){
          
        if (document.getElementById("number-popup2").value.length === 0){

          btnmenos1.addEventListener('click', function(){
            ""
          });
        
        }else if (document.getElementById("number-popup2").value>=75 && document.getElementById("number-popup2").value<=199){

          popup.classList.remove('active');
          Thanks.classList.add('active');
          pledge2.classList.remove('active');

        }
        
      });

      btnmenos1.addEventListener('click', function(){

        if (document.getElementById("number-popup2").value>=75 && document.getElementById("number-popup2").value<=199){
          let numcontributors = document.getElementById("number-popup2").value;
          sumnumcontributors = parseInt(numcontributors) + sumnumcontributors;
          contributors.innerHTML = "$ " + sumnumcontributors.toLocaleString("en-US");
          document.getElementById("number-popup2").value = '';
          sumnumcontributors

          
          if (sumnumcontributors < 100000){
            objetivo.innerHTML = Math.round((100000-sumnumcontributors)/25) +' left';
            numblack.innerHTML = Math.round((100000-sumnumcontributors)/75) +' left';
            numMa.innerHTML = Math.round((100000-sumnumcontributors)/200) +' left';
            numerocard1.innerHTML = Math.round((100000-sumnumcontributors)/25) + " left";
            numerocard2.innerHTML = Math.round((100000-sumnumcontributors)/75) + " left";
            numerocard3.innerHTML = Math.round((100000-sumnumcontributors)/200) + " left";           
          }else{

            objetivo.innerHTML = 0 +' left';
            numblack.innerHTML = 0 +' left';
            numMa.innerHTML = 0 +' left';

            let Arrcard = [carduno, carddos, cardtres]
            let Arrbtns = [btncontinue, btncontinue1, btncontinue2]
            let Arrnumcard = [numerocard1, numerocard2, numerocard3]
            for (let i=0 ; i<Arrcard.length ; i++){

              Arrcard[i].style.opacity = "0.5";
              Arrbtns[i].addEventListener('click', function(){
               ""
              });
              Arrnumcard[i].innerHTML = 0 + " left";
            }
          }
        }
      
      });

    } else {
      parent.style = "";
      pledge2.classList.remove('active');
      document.getElementById("number-popup2").value = '';
    }

  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let customCheckboxes3 = document.getElementsByClassName('custom-checkbox3');
let customStyles3 = `border: 2px solid hsl(176, 50%, 47%);`;
let pledge3 = document.getElementById('pledge3')

var btnmenos2 = document.getElementById("continue-popup3");
let numMa = document.getElementById('numMahogany');
var numero3 = Math.round(100000/200);
numMa.innerHTML = numero3 + ' left';

for (const box of customCheckboxes3) {
  box.addEventListener('change', (event) => {
    let parent = event.target.parentNode;

    if (event.target.checked) {
      parent.style = customStyles3;
      pledge3.classList.add('active');

      document.getElementById("number-popup").value = '';
      document.getElementById("number-popup1").value = '';
      document.getElementById("number-popup2").value = '';

      if (sumnumcontributors<100000){
        let Arr = [pledge, pledge1, pledge2];
        let Arr2 = [document.getElementById("noreward"), document.getElementById("Bamboo-Stand"), document.getElementById("BlackEdition")];

        for (let i=0; i<Arr.length; i++ ){
          Arr[i].classList.remove('active');
          Arr2[i].checked = false;
          Arr[i].parentNode.style = "";
        }
    

        if (sumnumcontributors > 99800){
          cardtres.style.opacity = "0.5";
          btncontinue2.addEventListener('click', function(){
            ""
          });
          numerocard3.innerHTML = 0 + " left";
          newArr[3].style.opacity = "0.5";
          newArr2[3].disabled = true;
          numMa.innerHTML = 0 + " left";
      
          if (sumnumcontributors > 99925){
            carddos.style.opacity = "0.5";
            btncontinue1.addEventListener('click', function(){
              ""
            });
            numerocard2.innerHTML = 0 + " left";
            newArr[2].style.opacity = "0.5";
            newArr2[2].disabled = true;
            numblack.innerHTML = 0 + " left";
      
            if (sumnumcontributors > 99975){
              carduno.style.opacity = "0.5";
              btncontinue.addEventListener('click', function(){
                ""
              });
              numerocard1.innerHTML = 0 + " left";
              newArr[1].style.opacity = "0.5";
              newArr2[1].disabled = true;
              objetivo.innerHTML = 0 + " left";
            }
          }
        } 
      }

      btnmenos2.addEventListener('click', function(){
          
        if (document.getElementById("number-popup3").value.length === 0){

          btnmenos2.addEventListener('click', function(){
            ""
          });
        
        }else if (document.getElementById("number-popup3").value>=200 && document.getElementById("number-popup3").value<=100000){

          popup.classList.remove('active');
          Thanks.classList.add('active');
          pledge3.classList.remove('active');

        }
        
      });

      btnmenos2.addEventListener('click', function(){

        if (document.getElementById("number-popup3").value>=200 && document.getElementById("number-popup3").value<=100000){
          let numcontributors = document.getElementById("number-popup3").value;
          sumnumcontributors = parseInt(numcontributors) + sumnumcontributors;
          contributors.innerHTML = "$ " + sumnumcontributors.toLocaleString("en-US");
          document.getElementById("number-popup3").value = '';
          sumnumcontributors

          
          if (sumnumcontributors < 100000){
            objetivo.innerHTML = Math.round((100000-sumnumcontributors)/25) +' left';
            numblack.innerHTML = Math.round((100000-sumnumcontributors)/75) +' left';
            numMa.innerHTML = Math.round((100000-sumnumcontributors)/200) +' left';
            numerocard1.innerHTML = Math.round((100000-sumnumcontributors)/25) + " left";
            numerocard2.innerHTML = Math.round((100000-sumnumcontributors)/75) + " left";
            numerocard3.innerHTML = Math.round((100000-sumnumcontributors)/200) + " left";           
          }else{

            objetivo.innerHTML = 0 +' left';
            numblack.innerHTML = 0 +' left';
            numMa.innerHTML = 0 +' left';

            let Arrcard = [carduno, carddos, cardtres]
            let Arrbtns = [btncontinue, btncontinue1, btncontinue2]
            let Arrnumcard = [numerocard1, numerocard2, numerocard3]
            for (let i=0 ; i<Arrcard.length ; i++){

              Arrcard[i].style.opacity = "0.5";
              Arrbtns[i].addEventListener('click', function(){
               ""
              });
              Arrnumcard[i].innerHTML = 0 + " left";
            }
          }
        }
      
      });

    } else {
      parent.style = "";
      pledge3.classList.remove('active');
      document.getElementById("number-popup3").value = '';
    }

  });
}


//////////////////////////////////////////////////////////////////////////////////////////////

let pruebas = document.getElementsByClassName('modal-card');

for (const box of pruebas) {
  box.addEventListener('change', (event) => {
    let parent = event.target.parentNode;

    btnOk.addEventListener('click', function(){
      Thanks.classList.remove('active');
      overlay.classList.remove('active');
      parent.style = "";
      event.target.checked = false;
      pledge.classList.remove('active');
      pledge1.classList.remove('active');
      pledge2.classList.remove('active');
      pledge3.classList.remove('active');
    })
  })
}

/////////////////////////////////////////////////////////////////////////////////////////////////

let btnOk1 = document.getElementById("got-it");
let backers = document.getElementById("backers");
let contributors = document.getElementById("contributors");
let days = document.getElementById("days");
let fill = document.getElementById("progressfill");
var percentage = 0;
let sumnumcontributors = 0;
let num_backers = 0;

backers.innerHTML = num_backers;
contributors.innerHTML = "$ " + sumnumcontributors;
days.innerHTML = 0;

btnOk.addEventListener('click', function(){
  num_backers += 1;
  backers.innerHTML = num_backers;
})

btnOk.addEventListener('click', function(){
  percentage = (sumnumcontributors/100000)*100
  fill.style.width = percentage + "%";
})

///////////////////////////////////////////////////////////////////////////////////////////////

let numerocard1 = document.getElementById("numerocard1");
let btncontinue = document.getElementById("button-continue");

contadorcard1 = 100000/25;
numerocard1.innerHTML = contadorcard1 + " left";

btncontinue.addEventListener('click', function(){

  if (sumnumcontributors < 100000 && sumnumcontributors <= 99975){

    Thanks.classList.add('active');
    overlay.classList.add('active');
    sumnumcontributors = 25 + sumnumcontributors;
    contributors.innerHTML = "$ " + sumnumcontributors.toLocaleString("en-US");

    if((numerocard1.innerHTML = (100000-sumnumcontributors)/25) >= 0){
      objetivo.innerHTML = Math.round((100000-sumnumcontributors)/25) +' left';
      numblack.innerHTML = Math.round((100000-sumnumcontributors)/75) +' left';
      numMa.innerHTML = Math.round((100000-sumnumcontributors)/200) +' left';
      numerocard1.innerHTML = Math.round((100000-sumnumcontributors)/25) + " left";
      numerocard2.innerHTML = Math.round((100000-sumnumcontributors)/75) + " left";
      numerocard3.innerHTML = Math.round((100000-sumnumcontributors)/200) + " left";
    }else{
      objetivo.innerHTML = 0 +' left';
      numblack.innerHTML = 0 +' left';
      numMa.innerHTML = 0 +' left';
    }

    let Arrcard = [carduno, carddos, cardtres]
    let Arrbtns = [btncontinue, btncontinue1, btncontinue2]
    let Arrnumcard = [numerocard1, numerocard2, numerocard3]
    if(sumnumcontributors >= 100000){
      for (let i=0 ; i<Arrcard.length ; i++){

        Arrcard[i].style.opacity = "0.5";
        Arrbtns[i].addEventListener('click', function(){
        ""
        });
        Arrnumcard[i].innerHTML = 0 + " left";
      }
    }

  }
});

btnOk.addEventListener('click', function(){
  Thanks.classList.remove('active');
  overlay.classList.remove('active');
})

///////////////////////////////////////////////////////////////////////////////////////////////

let numerocard2 = document.getElementById("numerocard2");
let btncontinue1 = document.getElementById("button-continue1");

contadorcard2 = Math.round(100000/75);
numerocard2.innerHTML = contadorcard2 + " left";

btncontinue1.addEventListener('click', function(){

  if (sumnumcontributors < 100000 && sumnumcontributors <= 99925){

    Thanks.classList.add('active');
    overlay.classList.add('active');
    sumnumcontributors = 75 + sumnumcontributors;
    contributors.innerHTML = "$ " + sumnumcontributors.toLocaleString("en-US");

    if((numerocard2.innerHTML = (100000-sumnumcontributors)/75) >= 0){
      objetivo.innerHTML = Math.round((100000-sumnumcontributors)/25) +' left';
      numblack.innerHTML = Math.round((100000-sumnumcontributors)/75) +' left';
      numMa.innerHTML = Math.round((100000-sumnumcontributors)/200) +' left';
      numerocard1.innerHTML = Math.round((100000-sumnumcontributors)/25) + " left";
      numerocard2.innerHTML = Math.round((100000-sumnumcontributors)/75) + " left";
      numerocard3.innerHTML = Math.round((100000-sumnumcontributors)/200) + " left";
    }else{
      objetivo.innerHTML = 0 +' left';
      numblack.innerHTML = 0 +' left';
      numMa.innerHTML = 0 +' left';
    }

    let Arrcard = [carduno, carddos, cardtres]
    let Arrbtns = [btncontinue, btncontinue1, btncontinue2]
    let Arrnumcard = [numerocard1, numerocard2, numerocard3]
    if(sumnumcontributors >= 100000){
      for (let i=0 ; i<Arrcard.length ; i++){

        Arrcard[i].style.opacity = "0.5";
        Arrbtns[i].addEventListener('click', function(){
        ""
        });
        Arrnumcard[i].innerHTML = 0 + " left";
      }
    }

  }
});

btnOk.addEventListener('click', function(){
  Thanks.classList.remove('active');
  overlay.classList.remove('active');
})

///////////////////////////////////////////////////////////////////////////////////////////////

let numerocard3 = document.getElementById("numerocard3");
let btncontinue2 = document.getElementById("button-continue2");
let carduno = document.getElementById("modal-carduno");
let carddos = document.getElementById("modal-carddos");
let cardtres = document.getElementById("modal-cardtres");

contadorcard3 = Math.round(100000/200);
numerocard3.innerHTML = contadorcard3 + " left";

btncontinue2.addEventListener('click', function(){

  if (sumnumcontributors < 100000 && sumnumcontributors <= 99800){

    Thanks.classList.add('active');
    overlay.classList.add('active');
    sumnumcontributors = 200 + sumnumcontributors;
    contributors.innerHTML = "$ " + sumnumcontributors.toLocaleString("en-US");

    if((numerocard3.innerHTML = (100000-sumnumcontributors)/200) >= 0){
      objetivo.innerHTML = Math.round((100000-sumnumcontributors)/25) +' left';
      numblack.innerHTML = Math.round((100000-sumnumcontributors)/75) +' left';
      numMa.innerHTML = Math.round((100000-sumnumcontributors)/200) +' left';
      numerocard1.innerHTML = Math.round((100000-sumnumcontributors)/25) + " left";
      numerocard2.innerHTML = Math.round((100000-sumnumcontributors)/75) + " left";
      numerocard3.innerHTML = Math.round((100000-sumnumcontributors)/200) + " left"; 
    }else{
      objetivo.innerHTML = 0 +' left';
      numblack.innerHTML = 0 +' left';
      numMa.innerHTML = 0 +' left';
    }

    let Arrcard = [carduno, carddos, cardtres]
    let Arrbtns = [btncontinue, btncontinue1, btncontinue2]
    let Arrnumcard = [numerocard1, numerocard2, numerocard3]
    if(sumnumcontributors >= 100000){
      for (let i=0 ; i<Arrcard.length ; i++){

        Arrcard[i].style.opacity = "0.5";
        Arrbtns[i].addEventListener('click', function(){
        ""
        });
        Arrnumcard[i].innerHTML = 0 + " left";
      }
    }

  }
});

btnOk.addEventListener('click', function(){
  Thanks.classList.remove('active');
  overlay.classList.remove('active');
})

//////////////////////////////////////////////////////////////////////////////////////////////////////

let newArr = [document.getElementById('popupcard1'), document.getElementById('popupcard2'), document.getElementById('popupcard3'), document.getElementById('popupcard4')]
let newArr2 = [document.getElementById("noreward"), document.getElementById("Bamboo-Stand"), document.getElementById("BlackEdition"), document.getElementById("MahoganySpecial")];

btnAbrirPopup.addEventListener('click', function(){
  sumnumcontributors

  if ( sumnumcontributors >= 100000){
 
    for (let i=0; i<newArr.length; i++ ){
      newArr[i].style.opacity = "0.5";
      newArr2[i].disabled = true;
    }
  
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

btnOk.addEventListener('click', function(){
  sumnumcontributors

    if (sumnumcontributors > 99800){
      cardtres.style.opacity = "0.5";
      btncontinue2.addEventListener('click', function(){
        ""
      });
      numerocard3.innerHTML = 0 + " left";
      newArr[3].style.opacity = "0.5";
      newArr2[3].disabled = true;
      numMa.innerHTML = 0 + " left";

      if (sumnumcontributors > 99925){
        carddos.style.opacity = "0.5";
        btncontinue1.addEventListener('click', function(){
          ""
        });
        numerocard2.innerHTML = 0 + " left";
        newArr[2].style.opacity = "0.5";
        newArr2[2].disabled = true;
        numblack.innerHTML = 0 + " left";

        if (sumnumcontributors > 99975){
          carduno.style.opacity = "0.5";
          btncontinue.addEventListener('click', function(){
            ""
          });
          numerocard1.innerHTML = 0 + " left";
          newArr[1].style.opacity = "0.5";
          newArr2[1].disabled = true;
          objetivo.innerHTML = 0 + " left";
        }
      }
    } 
})

///////////////////////////////////////////////////////////////////////

let tampledge = document.getElementById('pledge1');
let tampledge1 = document.getElementById('pledge2');
let tampledge2 = document.getElementById('pledge3');

for (const box of customCheckboxes) {
  box.addEventListener('change', (event) => {
      
    if (event.target.checked) {
      if ( document.body.clientWidth <= 850 ) {
        document.getElementById('numbamboo').style.bottom = '0';
        document.getElementById('numblack').style.bottom = '0';
        document.getElementById('numMahogany').style.bottom = '0';
      }
    }
  })
}

for (const box of customCheckboxes1) {
  box.addEventListener('change', (event) => {
      
    if (event.target.checked) {
      if ( document.body.clientWidth <= 850 ) {
        document.getElementById('numbamboo').style.bottom = (tampledge.clientHeight+41) + 'px';
        document.getElementById('numblack').style.bottom = '0';
        document.getElementById('numMahogany').style.bottom = '0';
      }else{
        document.getElementById('numbamboo').style.bottom = '0';
      }
    }else{
      document.getElementById('numbamboo').style.bottom = '0';
    }
  })
}

for (const box of customCheckboxes2) {
  box.addEventListener('change', (event) => {
      
    if (event.target.checked) {
      if ( document.body.clientWidth <= 850 ) {
        document.getElementById('numblack').style.bottom = (tampledge1.clientHeight+41) + 'px';
        document.getElementById('numbamboo').style.bottom = '0';
        document.getElementById('numMahogany').style.bottom = '0';
      }else{
        document.getElementById('numblack').style.bottom = '0';
      }
    }else{
      document.getElementById('numblack').style.bottom = '0';
    }
  })
}

for (const box of customCheckboxes3) {
  box.addEventListener('change', (event) => {
      
    if (event.target.checked) {
      if ( document.body.clientWidth <= 850 ) {
        document.getElementById('numMahogany').style.bottom = (tampledge2.clientHeight+41) + 'px';
        document.getElementById('numbamboo').style.bottom = '0';
        document.getElementById('numblack').style.bottom = '0';
      }else{
        document.getElementById('numMahogany').style.bottom = '0';
      }
    }else{
      document.getElementById('numMahogany').style.bottom = '0';
    }
  })
}

////////////////////////////////////////////////////////////////////////////

var con = 0;

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const head = document.querySelector(".burger");
  const imgheader = document.getElementById("imgheader");

  burger.addEventListener("click", () => {

    if (nav.style.display == 'block'){
      nav.style.display = 'none';
      overlay.classList.remove('active')
    }else{
      nav.style.display = 'block';
      overlay.classList.add('active');
      head.style.zIndex = '1';
      imgheader.style.zIndex = '1';
    }

    burger.classList.toggle("toggle");
    con += 1;
  });
};

navSlide();


window.addEventListener("resize", function(){
  if ( document.body.clientWidth > 850 ){
    document.querySelector(".nav_links").style.display = 'block';
    overlay.classList.remove('active');
    Thanks.classList.remove('active');
    document.getElementById("imgheader").style.zIndex = '0';
    popup.classList.remove('active');
    document.getElementById('numbamboo').style.bottom = '0';
    document.getElementById('numblack').style.bottom = '0';
    document.getElementById('numMahogany').style.bottom = '0';
  }else if ( document.body.clientWidth <= 850 ){
      document.querySelector(".nav_links").style.display = 'none';
    if (con%2 != 0){
      document.querySelector(".burger").click();
      overlay.classList.remove('active');
      document.querySelector(".nav_links").style.display = 'none';
    }
  }
});
