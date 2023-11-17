const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

function choseTabs() {

	tabItem.forEach(element => {
		element.addEventListener('click', open);
	});
	
	function open(evt) {
		const tabTarget = evt.currentTarget;
		const button = tabTarget.dataset.button;
	
		tabItem.forEach(item => {
			item.classList.remove('tabs__btn-item--active');
		});
	
		tabContent.forEach(item => {
			item.classList.remove('tabs__content-item--active');
		});
	
		tabTarget.classList.add('tabs__btn-item--active');
		document.getElementById(button).classList.add('tabs__content-item--active');
	};
};

export default choseTabs;

