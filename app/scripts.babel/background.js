'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});

chrome.webRequest.onBeforeRequest.addListener(
      details => {
        console.log('details', details)
      }, filter, opt_extraInfoSpec);

console.log('privet');
