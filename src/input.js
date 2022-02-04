export default function getLocationFromSearchBar() {
    try {
        const txt = document.querySelector('[data-id="text"]');
        return txt.value;
    } catch (err) {
        console.log(`ERROR: ${err}`);
        return null;
    }
}