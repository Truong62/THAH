import React from 'react';
import './Card.css';

const CampaignGrid = () => {
  return (
    <div className="campaign-container">
      <h2>Popular Campaign</h2>
      <div className="campaign-grid popular-campaigns">
        <div className="campaign-card featured">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="campaign-image" />
          <div className="campaign-content">
            <span className="campaign-category">Education</span>
            <h4>Powered Kits Learning Boxes</h4>
            <p>Fun, durable and reusable boxes with eco-friendly options.</p>
          </div>
          <div className="campaign-footer">
            <span>$2,000 raised of $2,500</span>
            <span>173 backers</span>
            <span>by Mahfuzul Nabil</span>
          </div>
        </div>
        <div className="campaign-card">
          <img src="../../images/wallpaperflare.com_wallpaper.jpg" alt="Campaign" className="campaign-image" />
          <div className="campaign-content">
            <span className="campaign-category">Real Estate</span>
            <h4>Building Hope Village</h4>
            <p>Together we can create access for everyone.</p>
          </div>
          <div className="campaign-footer">
            <span>$250 raised of $1,000</span>
            <span>50 backers</span>
            <span>by Adom Shafi</span>
          </div>
        </div>
        <div className="campaign-card">
          <img src="../../images/wallpaperflare.com_wallpaper.jpg" alt="Campaign" className="campaign-image" />
          <div className="campaign-content">
            <span className="campaign-category">Real Estate</span>
            <h4>New iMac For My Business!</h4>
            <p>My computer decided to die. As a result, my small business.</p>
          </div>
          <div className="campaign-footer">
            <span>$1,200 raised of $1,500</span>
            <span>12 backers</span>
            <span>by Sami Ahmed</span>
          </div>
        </div>
        <div className="campaign-card">
          <img src="../../images/wallpaperflare.com_wallpaper.jpg" alt="Campaign" className="campaign-image" />
          <div className="campaign-content">
            <span className="campaign-category">Home</span>
            <h4>The Watchman's Chairs</h4>
            <p>Your home for indie and classic cinema has just been handed...</p>
          </div>
          <div className="campaign-footer">
            <span>$5,000 raised of $6,000</span>
            <span>100 backers</span>
            <span>by Nill</span>
          </div>
        </div>
      </div>

      <h2>Recent Campaign</h2>
      <div className="campaign-grid recent-campaigns">
        <div className="campaign-card">
          <img src="../../images/wallpaperflare.com_wallpaper.jpg" alt="Campaign" className="campaign-image" />
          <div className="campaign-content">
            <span className="campaign-category">Camera Gear</span>
            <h4>Advanced 4K Action Camera</h4>
            <p>The 4K Vlog - Start Creating Now Without Limitation.</p>
          </div>
          <div className="campaign-footer">
            <span>$1,500 raised of $2,000</span>
            <span>173 backers</span>
            <span>by Cham</span>
          </div>
        </div>
        <div className="campaign-card">
          <img src="../../images/wallpaperflare.com_wallpaper.jpg" alt="Campaign" className="campaign-image" />
          <div className="campaign-content">
            <span className="campaign-category">Food</span>
            <h4>Restaurants Open Business</h4>
            <p>A unique restaurant, beer bar garden, and lighting location.</p>
          </div>
          <div className="campaign-footer">
            <span>$950 raised of $1,200</span>
            <span>150 backers</span>
            <span>by Mahbubul Alom</span>
          </div>
        </div>
        <div className="campaign-card">
          <img src="../../images/wallpaperflare.com_wallpaper.jpg" alt="Campaign" className="campaign-image" />
          <div className="campaign-content">
            <span className="campaign-category">Comics</span>
            <h4>"Lost Soul" graphic novel</h4>
            <p>A team of re-searchers set out to find the meaning of...</p>
          </div>
          <div className="campaign-footer">
            <span>$1,800 raised of $2,500</span>
            <span>65 backers</span>
            <span>by Sajib Rahman</span>
          </div>
        </div>
        <div className="campaign-card">
          <img src="../../images/wallpaperflare.com_wallpaper.jpg" alt="Campaign" className="campaign-image" />
          <div className="campaign-content">
            <span className="campaign-category">Clothes & Wearables</span>
            <h4>Cool Comfy Shoes easy on You</h4>
            <p>Introducing a new range of super comfortable shoes...</p>
          </div>
          <div className="campaign-footer">
            <span>$4,000 raised of $5,000</span>
            <span>100 backers</span>
            <span>by Saleh Ahmed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignGrid;