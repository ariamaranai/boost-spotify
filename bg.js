chrome.omnibox.onInputEntered.addListener(q =>
  chrome.tabs.update({
    url: "https://open.spotify.com/search/" + q
  })
);