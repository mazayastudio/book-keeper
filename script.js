const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

// Show Modal, Focus on Input
function showModal() {
	modal.classList.add("show-modal");
	websiteNameEl.focus();
}

// Modal Event Listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => modal.classList.remove("show-modal"));
window.addEventListener("click", (e) => (e.target === modal ? modal.classList.remove("show-modal") : false));

// Validate Form
function validate(nameValue, urlValue) {
	const expression = /^((http|https):\/\/)?(www\.)?([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
	const regex = new RegExp(expression);
	if (!nameValue || !urlValue) {
		alert("Please submit values for both fields.");
		return false;
	}
	if (!urlValue.match(regex)) {
		alert("Please provide a valid web address.");
		return false;
	}
	// Valid
	return true;
}

// Handle Data from Form
function storeBookmark(e) {
	e.preventDefault();
	const nameValue = websiteNameEl.value;
	let urlValue = websiteUrlEl.value;
	if (!urlValue.includes("http://") && !urlValue.includes("https://")) {
		urlValue = `https://${urlValue}`;
	}
	console.log(nameValue, urlValue);
	if (!validate(nameValue, urlValue)) {
		return false;
	}
}

bookmarkForm.addEventListener("submit", storeBookmark);
