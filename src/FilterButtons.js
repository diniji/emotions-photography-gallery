function FilterButtons({filteredImages}) {

    return(
        <div className="filtersContainer">
            <button onClick={() => filteredImages("all")} className="filtersStyle">All</button>
            <button onClick={() => filteredImages("angry")} className="filtersStyle">Anger</button>
            <button onClick={() => filteredImages("sad")} className="filtersStyle">Sadness</button>
            <button onClick={() => filteredImages("hope")} className="filtersStyle">Hope</button>
            <button onClick={() => filteredImages("neutral")} className="filtersStyle">Neutrality</button>
            <button onClick={() => filteredImages("happy")} className="filtersStyle">Happiness</button>
            <button onClick={() => filteredImages("strength")} className="filtersStyle">Strength</button>
        </div>
    )
}

export default FilterButtons;