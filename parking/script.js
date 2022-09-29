const container = document.querySelector('.container');
const Place = document.querySelectorAll('.row.Place:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const parkingSelect = document.getElementById('parking');


populateUI();
let parkingPrice = +parkingSelect.value;

// seave selected parking index and price
function setParkingData(parkingIndex,parkingPrice){
    localStorage.setItem('selectedParkingIndex',parkingIndex);
    localStorage.setItem('selectedParkingPrice',parkingPrice);

}

function updateSelectedCount() {
    const selectedPlace = document.querySelectorAll('.row.Place.selected');
    const placeIndex=[...selectedPlace].map(function (seat){
        return[...seats].indexOf(Place);
    });
    localStorage.setItem('selectedPlace',JSON.stringify(placeIndex));

    const selectedPlaceCount = selectedPlace.length;
    
    
    count.innerText = selectedPlaceCount;
    total.innerText = selectedPlaceCount * parkingPrice;

}

function populateUI(){
    const selectedPlace=JSON.parse(localStorage.getItem('selectedPlace'));
     
    if(selectedPlace !== null && selectedPlace.length > 0){
        Place.forEach((Place,index)=>{
            if(selectedPlace.indexOf(index)> -1){
                Place.classList.add('selected')
            }
        });
     }

const selectedParkingIndex=localStorage.getItem('selectParkingIndex');

if(selectedParkingIndex !=null){
    parkingSelect.selectedIndex=selectedParkingIndex;
}
}

parkingSelect.addEventListener('change',(e) => {
    ticketprice= +e.target.value;
    setParkingData(e.target.selectedIndex,e.target.value);

    updateSelectedCount();
});
container.addEventListener('click', (e) =>{
    if(e.target.classList.contains('Place') && !e.target.classList.contains('occupied')){
     e.target.classList.toggle('selected');
    }
    updateSelectedCount();

});
function openPopup(){
    popup.classList.add("open-popup");
    }
    function closePopup(){
    popup.classList.remove("open-popup");
    }
updateSelectedCount();

