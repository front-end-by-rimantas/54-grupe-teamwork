export function generalListingCard(item) {
    let tag = '';
    if (item.operatingHours.alwaysOpen) {
        tag = '<div class="tag tag-24">24 hours</div>';
    } else if (false) {
        tag = '<div class="tag tag-open">Open</div>';
    } else {
        tag = '<div class="tag tag-closed">Closed</div>';
    }
    const ad = item.isAd ? '<span class="ad">Ad</span>' : '';
    const verified = item.isVerified ? '<div class="verified">✔</div>' : '';
    const location = `<div>ICON + ${item.details.location}</div>`;
    const phone = item.details.phone ? `<div>ICON + ${item.details.phone}</div>` : '';

    return `
        <div class="general-listing-card col-12 col-md-6 col-lg-4">
            <div class="visual">
                <img src="${item.imgSrc}" alt="${item.imgAlt}">
                ${tag}
                <div class="rating">⭐⭐⭐⭐⭐ ${item.rating}</div>
            </div>
            <div class="info">
                <div class="name">${ad + item.name + verified}</div>
                <div class="details">${location + phone}</div>
            </div>
            <div class="footer">
                <a href="${item.searchHref}">ICON</a>
                <button>♥</button>
                <a href="${item.innerPageHref}">Details + ICON</a>
            </div>
        </div>`;
}