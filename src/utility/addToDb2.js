import { toast } from "react-toastify";

const getStoredWishList = () => {
    //Wish list
    const storedWishListString = localStorage.getItem('Wish-list')
    if (storedWishListString){
        const storedWishList = JSON.parse(storedWishListString);
        return storedWishList;
    } else {
        return  [];
    }

}


const addToStoredWishList = (id) => {
const storedWishList = getStoredWishList();
if(storedWishList.includes(id)){
    console.log(id, 'Already exists in the Wish list')
} else {
    storedWishList.push(id);
    const storedWishListString = JSON.stringify(storedWishList);
    localStorage.setItem('Wish-list', storedWishListString);

    toast('This book is added to your Wish list')
}

}

export { addToStoredWishList }