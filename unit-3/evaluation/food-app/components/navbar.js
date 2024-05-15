function navbar() {
    return (
        `
        <h3><a href="./index.html">HOME</a></h3>
        <div id="options">
            <input id="search" type="text" oninput="" placeholder="Search a receipe">
            <button id="receipeOfTheDay" type="button"><a href="./receipeOfTheDay.html">Get Receipe of the Day</a></button>
            <button id="latestReceipe" type="button"><a href="./latestReceipe.html">Latest Receipe</a></button>
        </div>
        `
    );
}

export default navbar;