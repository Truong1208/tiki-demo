function moreItem(){
    var rowItem = document.getElementsByClassName('more-item')

    for (let index = 0; index <= rowItem.length; index++) {
        const element = rowItem[index];
        console.log(element);
        element.classList.remove("d-none-item");
        console.log('remoove');
        
    }
}