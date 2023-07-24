const tabsNav = document.querySelectorAll(".tabs-nav-btn");
const tabsText = document.querySelectorAll(".tabs-text");

tabsNav.forEach(function (item) {
	item.addEventListener("click", function () {
		let activBtn = item;
		let tabId = activBtn.getAttribute("data-tab");
		let activTab = document.querySelector(tabId);

		tabsText.forEach(function(item){
			item.classList.remove("active");
		});

		tabsNav.forEach(function(item){
			item.classList.remove("active");
		});

		activBtn.classList.add("active");
		activTab.classList.add("active");
	});
});