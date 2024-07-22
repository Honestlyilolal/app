let pictureArray = [];
let i = 0;
function getRandomInt(max){
  return Math.floor(Math.random() * max);
};


function deleteButton(){
  const element_1 = document.getElementById("button_next");
  element_1.remove();
  pictureArray[i] = '<img src =' + 'https://randomfox.ca//images//'+ getRandomInt(124) + '.jpg />';
  console.log(pictureArray[i])
  return printPicture();
};

function printPicture(){
  document.write(
    '<div id = "picture">' +
    pictureArray[i] +
    '</div>'
  );
    ++i;
    return deletePicture();
};

function deletePicture(){
  const element_2 = document.getElementById("picture");
    if(i > 1){
      element_2.remove();
  };
  return callButton();
};

  function callButton(){
  document.write(
    '<p id = "button_next">' +
    '<button onclick = "deleteButton()"> Next </button>' +
    '</p>'
  );
};





/*
let pictureArray = [];
let i = 0;
function getRandomInt(max){
  return Math.floor(Math.random() * max);
};


function deleteButton(){
  const element_1 = document.getElementById("button_next");
  element_1.remove();
  pictureArray[i] = '<img src =' + 'https://randomfox.ca//images//'+ getRandomInt(124) + '.jpg />';
  console.log(pictureArray[i])
  return printPicture();
};

function printPicture(){
  document.write(
    '<div id = "picture">' +
    pictureArray[i] +
    '</div>'
  );
    ++i;
    return deletePicture();
};

function deletePicture(){
  const element_2 = document.getElementById("picture");
    if(i > 1){
      element_2.remove();
  };
  return callButton();
};

  function callButton(){
  document.write(
    '<p id = "button_next">' +
    '<button onclick = "deleteButton()"> Next </button>' +
    '</p>'
  );
};
*/