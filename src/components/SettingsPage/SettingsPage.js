import React from "react";
import "./SettingsPage.css";
import Header from "../Header/Header";
import blueArrow from "../assets/images/Polygon 24.png";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <>
      <Header />
      <main className="wrapper-settings-page">
        <div className="general-settings">
          <h1>GENERAL SETTINGS</h1>
          <div className="line">
            <p>Notificaations and emails</p>
            <div className="blue-line"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
          <div className="line">
            <p>User Management</p>
            <div className="blue-line"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
          <div className="line">
            <p>Physical Libraries</p>
            <div className="blue-line"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
          <div className="line">
            <p>Reading Events</p>
            <div className="blue-line"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
          <div className="line">
            <p>Invoicing</p>
            <div className="blue-line"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
          <div className="line">
            <p>Book Statistics</p>
            <div className="blue-line"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
          <div className="line">
            <p>Readers Statistics</p>
            <div className="blue-line"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
          <div className="line">
            <p>Events Statistcs</p>
            <div className="blue-line"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
        </div>
        <div className="book-settings">
          <nav className="nav-book-settings">
            <h1>Book Settings</h1>
            <Link to="/create" className="link">
              ADD NEW
            </Link>
          </nav>
          <div className="line-two">
            <p>Manage Genres</p>
            <div className="blue-line2"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
          <div className="line-twos">
            <p>Book Visibility</p>
            <div className="blue-line2"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>{" "}
          <div className="line-twos">
            <p>Authors Database</p>
            <div className="blue-line2"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>{" "}
          <div className="line-twos">
            <p>Book Covers</p>
            <div className="blue-line2"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>{" "}
          <div className="line-twos">
            <p>Book Covers</p>
            <div className="blue-line2"></div>
            <img src={blueArrow} alt="bluearrow" />
          </div>
        </div>
      </main>
    </>
  );
};

export default SettingsPage;
