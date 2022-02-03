const bar = document.getElementById('searchbar');
const btn = document.getElementById('searchbutton');
const urlParams = new URLSearchParams(window.location.search);
const version = urlParams.get('v');
const engine = urlParams.get('e');


if (version !== 'false') {
  fetch('https://api.github.com/repos/MystPi/ninetails/releases/latest')
    .then(res => res.json())
    .then(res => {
      if ('v' + version !== res.tag_name) {
        let popup = document.getElementById('popup');
        popup.style.display = 'block';
        popup.href = '/ninetails/download';
      }
    });
}


bar.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    if (!engine) {
      window.location.href = 'https://www.startpage.com/sp/search?q=' + bar.value;
    } else {
      window.location.href = engine + bar.value;
    }
  }
});


btn.addEventListener('click', () => {
  if (!engine) {
    window.location.href = 'https://www.startpage.com/sp/search?q=' + bar.value;
  } else {
    window.location.href = engine + bar.value;
  }
});
