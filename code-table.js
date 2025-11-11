var SPREADSHEET_ID_AND_TAB =
	'13Non7UYXe0sGHBRfh42NIa8dD5q8T03aZlAdScHOlTY/boycott';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;

				let nav = $(
					`<a class="navItem__` +
						entry.menuItems +
						`" href="#` +
						entry.menuItems +
						`">` +
						entry.menuItems +
						`</a>`
				).appendTo('#menuItems');

				let div = $(
					`<p data-confirm="` + entry.pledge + `">` + entry.pledge + `</p>`
				).appendTo('#pledge');

				let ul = $(
					`<li class="signatoriesTitle" data-confirm="` +
						entry.signatories +
						`"><p>` +
						entry.signatories +
						`</p><p>` +
						entry.signatoriesRole +
						`</p></li>`
				).appendTo('#signatories');

				let pre = $(
					`<h5 data-confirm="` +
						entry.signatoriesTotal +
						`">` +
						entry.signatoriesTotal +
						`</h5>`
				).appendTo('#signatoriesTotal');

				let a = $(
					`<a target="_blank"
						href="` +
						entry.signupURL +
						`">
						` +
						entry.signupButton +
						`</a>`
				).appendTo('#signUpHere');

				let details = $(
					`<details data-confirm="` +
						entry.faqTitle +
						`">
					<summary>
						
						` +
						entry.faqTitle +
						`
						</summary>
						<div><p class="faq">` +
						entry.faqSection +
						`</p></div>
						</details>`
				).appendTo('#faq');

				let article = $(
					`<p data-confirm="` + entry.about + `">` + entry.about + `</p>`
				).appendTo('#about');

				let ol = $(
					`<span data-confirm="` +
						entry.mediaTitle +
						`"><p data-confirm="` +
						entry.mediaPullQuote +
						`">` +
						entry.mediaPullQuote +
						`</p><a target="_blank" href="` +
						entry.mediaURL +
						`" data-confirm="` +
						entry.mediaTitle +
						`">` +
						entry.mediaTitle +
						`</a></span>`
				).appendTo('#media');

				let footer = $(
					`<p data-confirm="` +
						entry.lastUpdated +
						`">` +
						entry.lastUpdated +
						`</p>`
				).appendTo('#lastUpdated');
			});
		}
	);

	$('#mobileMenu--toggleBtn').click(function () {
		$('#mobileMenu--menuItems').toggle();
	});

	});
