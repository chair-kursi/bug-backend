import React from "react";
import "../../css/services/Merchandising.css";

function Merchandising() {
  return (
    <div>
      <input type="checkbox" id="nav-toggle" />

      <div className="sidebarr">
        <div className="sidebar-brand">
          <h1>
            {" "}
            <span className="fab fa-asymmetrik"> </span>{" "}
            <span>SellerBoost</span>
          </h1>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="/">
                <span className="fas fa-home"></span>
                <span>Home</span>
              </a>
            </li>
            {/* <li>
              <a href="/Onboarding">
                <span className="fas fa-stream"></span>
                <span>OnBoarding</span>
              </a>
            </li> */}

            <li>
              <a href="/Dashboard">
                <span className="fas fa-tachometer-alt"></span>
                <span>Inventory Dashboard </span>
              </a>
            </li>

            <li>
              <a href="/MarketPlaceHealth">
                <span className="fas fa-heartbeat"></span>
                <span>MarketPlace Health</span>
              </a>
            </li>
            <li>
              <a href="/OneClickCatlogUpdate">
                <span className="fas fa-upload"></span>

                <span>One Click Upload</span>
              </a>
            </li>

            <li>
              <a href="/MarketPlaceReconciliation">
                <span className="fas fa-hand-holding-usd"></span>

                <span>Reconciliation</span>
              </a>
            </li>
            <li>
              <a href="/Merchandising">
                <span className="fas fa-tshirt"></span>

                <span>Merchandising</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fas fa-hands-helping"></span>
                <span>Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fas fa-key"></span>
                <span>Password</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fas fa-sign-out-alt"></span>
                <span>Sign-out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>
            <label for="nav-toggle">
              <span class="fas fa-bars"></span>
            </label>
            Merchandising
          </h2>

          <div className="search-wrapper">
            <span class="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
          </div>

          <div className="user-wrapper">
            <img
              src="https://bit.ly/3bvT89p"
              width="40px"
              height="40px"
              alt="profile-img"
            />
            <div class="">
              <h4>Ayan Khan</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </header>

        <div class="main-container">
          <div class="heading">
            <h1 class="heading__title">Merchandising</h1>
            <img
              src="https://cdn4.iconfinder.com/data/icons/under-construction/512/coming_soon-256.png"
              alt=""
            />
          </div>
          <div class="cardssss">
            <div class="card card-1">
              <div className="card__logo">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/jetflat-multimedia/90/004_011_clip_board_clipboard_buffer_todo-256.png"
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>No Need for Buffer</p>
              </div>
            </div>
            <div class="card card-2">
              <div className="card__logo">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/scenarium-vol-5/128/041_cloud_sync_folder_storage-256.png
                    "
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>Smart Inventory Sync</p>
              </div>
            </div>
            <div class="card card-3">
              <div className="card__logo">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/business-271/135/40-256.png"
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>Revenue Increase</p>
              </div>
            </div>
            <div class="card card-4">
              <div className="card__logo">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/recommendations/128/Recommendation_IconsLayer_4-256.png"
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>Inventory Recommendation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merchandising;