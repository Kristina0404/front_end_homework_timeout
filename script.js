const btnElement = document.getElementById("addPicture");
const pictureElement = document.getElementById("myPicture")

btnElement.addEventListener(('click'),getPicture);
function getPicture(){

pictureElement.style.display = "block"; 

setTimeout(function() {
    pictureElement.style.display = "none";
  }, 5000);
}
  


/*function getPicture() {
    const pictureElement = document.createElement('img');
    pictureElement.classList.add("picture");
    //pictureElement.src = 'https://eislauffotos.de/piwigo/i.php?/galleries/Saison_2015_-_2016/Deutsche_Nachwuchs_Juniorenmeisterschaft_und_Synchroneiskunstlauf/Free/Junioren/Herren/IMG_7761_10_Daniel_SHAPIRO_TUss_B-W-cu_s9999x300.jpg';
    btnElement.appendChild(pictureElement);
    setTimeout(function() {
        pictureElement.style.display = "none";
      }, 5000);
     
}
btnElement.addEventListener(('click'),getPicture);*/
