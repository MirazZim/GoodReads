const getStoredWishList = () => {
    //Wish list
    const storedWishString = localStorage.getItem('Wish-list')
    if (storedWishString){
        const storedWish = JSON.parse(storedWishString);
        return storedWish;
    } else {
        return  [];
    }

}


const addToStoredWishList = (id) => {
const storedWish = getStoredWishList();
if(storedWish.includes(id)){
    console.log(id, 'Already exists in the Wish list')
} else {
    storedWish.push(id);
    const storedWishString = JSON.stringify(storedWish);
    localStorage.setItem('Wish-list', storedWishString);
}

}

export { addToStoredWishList }