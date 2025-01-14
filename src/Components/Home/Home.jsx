import Banner from "../Banner/Banner";
import Books from "../Books/Books";



const Home = () => {
    document.title = "GoodReads";
    return (
        
        <div className="">
            
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;