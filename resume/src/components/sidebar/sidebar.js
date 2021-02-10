// sidebar.js

import React from 'react';

export default props => {
  return (
    <div className="nav">
      
      <ul className="nav-list">

        <li class="nav-item">
          <a href="#hero" title="Home"><span class="nav-item-title">Home</span></a>
        </li>

        <li class="nav-item">
          <a href="#groovy" title="Portfolio"><span class="nav-item-title">Portfolio</span></a>

          <ul class="nav-list-sub">

            <li class="nav-list-sub-item">
              <a href="#groovy" title="Portfolio"><span class="nav-item-title">Groovy</span></a>
            </li>

            <li class="nav-list-sub-item">
              <a href="#laserchess" title="Portfolio"><span class="nav-item-title">Laser Chess</span></a>
            </li>

          </ul>
        </li>

      </ul>

    </div>
  );
};