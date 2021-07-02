import React, { Component } from 'react';   

class navbar extends Component {
    render() {
        return (
            // <!-- NAVBAR START-->
            <div class="navbar sticky">
                <div>
                  <ul>
                    <li><a class="active" href="#">Jokes</a></li>
                    <li><a href="../infiniteScroll/indexInfiniteScroll.html">Infinite Scroll</a></li>
                    <li><a href="../pong/indexPong.html">Pong</a></li>
                    <li><a href="../paint-clone/index.html">Paint</a></li>
                    <li><a href="../math-sprint-game/index.html">Speed Math</a></li>
                    <li><a href="../drag-and-drop/index.html">Work Flow</a></li>
                    <li><a href="../spock-rock-game/index.html">RPS Shoot!</a></li>
                    <li><a href="../DrawBalls/index.html">Drawing Balls</a></li>

                  </ul>
                </div>
              </div>
            //   <!-- NAVBAR END -->
        
        );
    }
}

export default navbar;