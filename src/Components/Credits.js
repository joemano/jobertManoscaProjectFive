import React, { Component } from 'react';
import appStoreBadge from '../assets/images/appStoreBadge.svg';
import googlePlayBadge from '../assets/images/googlePlayBadge.png'

class Credits extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div className="credits">
        <div class="storeButtons footFlexItem">
          <h3>Download Azur Lane</h3>
          <div class="buttonFlex">
            <div class="appStore" id="#appStoreBadge">
              <a href="https://itunes.apple.com/us/app/azur-lane/id1411126549?l=zh&ls=1&mt=8" target="_blank">
                <img src={appStoreBadge} alt="App Store badge" />
              </a>
            </div>
            <div class="playStore" id="#playStoreBadge">
              <a href="https://play.google.com/store/apps/details?id=com.YoStarEN.AzurLane" target="_blank">
                <img src={googlePlayBadge} alt="Google Play Store badge." />
              </a>
            </div>
          </div>
        </div>
        <div class="externalLinksHolder footFlexItem">
          <ul class="externalLinks">
            <li><a href="https://azurlane.yo-star.com/" target="_blank">Azur Lane</a></li>
            <li><a href="https://www.funimation.com/shows/azur-lane/" target="_blank">Azur Lane - The Animation</a></li>
            <li><a href="https://www.yo-star.com/" target="_blank">Yostar</a></li>
          </ul>
        </div>
        <div class="smLinksHolder footFlexItem">
          <ul class="smLinks">
            <li>
              <a href="https://www.facebook.com/AzurLaneEN/" target="_blank"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/AzurLane_EN" target="_blank"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCPeJaqP6WgxUVDcpYkXZKMQ" target="_blank"><i class="fab fa-youtube"></i></a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/AzureLane/" target="_blank"><i class="fab fa-reddit"></i></a>
            </li>
            <li>
              <a href="https://www.twitch.tv/directory/game/Azur%20Lane" target="_blank"><i class="fab fa-twitch"></i></a>
            </li>
            <li>
              <a href="https://discord.gg/WYjqf7P" target="_blank"><i class="fab fa-discord"></i></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Credits;