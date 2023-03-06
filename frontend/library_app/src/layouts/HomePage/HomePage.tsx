import { Carousel } from "./components/Carousel";
import { ExploreToBooks } from "./components/ExploreToBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExploreToBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </>
    );
}