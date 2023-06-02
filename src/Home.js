import { useState } from 'react';
import { data } from './data';
import FilterButtons from './FilterButtons';
import Gallery from "./Gallery";


function Home() {

    const [imagesToDisplay, setImagesToDisplay] = useState(data);

    const onlyFiltered = (searchTerm) => {
        if (searchTerm === "all") {
            setImagesToDisplay(data);
        }
        else {
            const onlyFilteredImages = data.filter(element => element.searchTerm === searchTerm);
            setImagesToDisplay(onlyFilteredImages);
        }
    }

    return(
        <div className="homeBody">
            <div>
                <FilterButtons filteredImages={onlyFiltered} />
            </div>
            <div className="artPosition">
                {imagesToDisplay.map((element => {
                        // const { id } = element;
                        return(
                            <div key={element.id}>
                                <Gallery singleArt={element} />
                            </div>
                    )
                }))}
            </div>
            <div className="copyright">
                <p>The site was created for educational purposes. The images and other media were taken from sources such as: unsplash.com, pexels.com, freepik.com, giphy.com, pixabay.com, icons8.com,...</p>
            </div>
        </div>
    )
}

export default Home;
