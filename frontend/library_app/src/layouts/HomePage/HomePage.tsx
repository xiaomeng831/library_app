import { useEffect } from "react";
import { Carousel } from "./components/Carousel";
import { ExploreToBooks } from "./components/ExploreToBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <>
            <ExploreToBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </>
    );
}