import { rating } from "./rating.js";
import { workingHoursTag } from "./workingHoursTag.js";

const search = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path></svg>';
const heart = '<svg stroke="currentColor" fill="currentColor" stroke-width="0.5" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g id="Heart"><path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path></g></svg>';
const arrow = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>';

export function generalListingCard(item) {
    const ad = item.isAd ? '<span class="ad">Ad</span>' : '';
    const verified = item.isVerified ? '<img src="./img/verified.svg" class="verified" alt="Verified">' : '';
    const location = `<div class="detail"><img src="./img/location.svg" alt="Location">${item.details.location}</div>`;
    const phone = item.details.phone ? `<div class="detail"><img src="./img/phone.svg" class="phone" alt="Phone">${item.details.phone}</div>` : '';

    return `
        <div class="general-listing-card">
            <div class="visual">
                <img src="./img/${item.imgSrc}" alt="${item.imgAlt}">
                ${workingHoursTag(item.operatingHours) + rating(item.rating)}
            </div>
            <div class="info">
                <div class="name">
                    ${ad}
                    <div class="text">${item.name + verified}</div>
                </div>
                <div class="details">${location + phone}</div>
            </div>
            <div class="footer">
                <a class="search" href="${item.searchHref}">${search}</a>
                <button class="favorite">${heart}</button>
                <a class="more" href="${item.innerPageHref}">Details${arrow}</a>
            </div>
        </div>`;
}