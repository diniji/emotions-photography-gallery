import { useState } from 'react';
import { data } from './data';
import FilterButtons from './FilterButtons';
import Gallery from "./Gallery";

function Home() {

    const [imagesToDisplay, setImagesToDisplay] = useState(data);

    const onlyFiltered = (searchTerm) => {
        const onlyFilteredImages = data.filter(element => element.searchTerm === searchTerm);
        setImagesToDisplay(onlyFilteredImages);
    }

    return(
        <div className="homeBody">
            <div>
                <FilterButtons filteredImages={onlyFiltered} />
            </div>
            <div className="artPosition">
                {imagesToDisplay.map((element => {
                        const { id } = element;
                    return(
                        <div key={id}>
                            <Gallery singleArt={element} />
                        </div>
                    )
                }))}
            </div>
            <div className="copyright">
                <p>*All images and other media were taken from open sources for educational purposes.</p>
            </div>
        </div>
    )
}

export default Home;