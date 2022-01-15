fetch('https://api.github.com/repos/mystpi/ninetails/releases/latest')
  .then(res => res.json())
  .then(res => {
    const version = document.getElementById('version-title');
    version.innerText = res.name;
    version.href = res.html_url;

    const desc = document.getElementById('desc');
    desc.innerText = res.body;

    res.assets.forEach(asset => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = asset.browser_download_url;
      a.innerText = asset.name;
      a.className = 'text-sm text-gray-700';
      li.appendChild(a);
      document.getElementById('downloads').appendChild(li);
    });
  });