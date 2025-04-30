import React from "react";

function Heading(){
    return (
        <header class="header-main">
          <div class="header-main__left">
            <h2 class="header-main__title">Things to do in London</h2>
            <p class="header-main__subtitle">49 activities found</p>
          </div>
          <div class="header-main__right">
            <label class="header-main__label" for="popularity">Sort by:</label>
            <select class="header-main__select" name="popularity">
              <option>Popularity</option>
            </select>
          </div>
        </header>
    );
}

export default Heading;