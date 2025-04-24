export function workingHoursTag(data) {
    const currentHour = (new Date()).getHours();

    if (data.alwaysOpen) {
        return '<div class="tag tag-24">24 hours</div>';
    } else if (data.startingHour < data.closingHour
        && currentHour >= data.startingHour
        && currentHour < data.closingHour) {
        return '<div class="tag tag-open">Open</div>';
    } else if (data.startingHour > data.closingHour &&
        (currentHour >= data.startingHour || currentHour < data.closingHour)) {
        return '<div class="tag tag-open">Open</div>';
    } else {
        return '<div class="tag tag-closed">Closed</div>';
    }
}