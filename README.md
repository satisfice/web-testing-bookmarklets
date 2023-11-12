# web-testing-bookmarklets
This is a set of bookmarklets I use for analyzing web applications for testing purposes.

## Installation

Copy and paste the code for each bookmarklet into the body of a corresponding bookmark that you create in your browser.

## Usage

Go to any web page and run any of these bookmarklets by selecting the bookmark that you've set up for it.

- **Get DOM:** grabs the entire DOM and collates it by tag name (i.e. all the form objects will be listed together). This bookmarklet is for a general breakdown of an entire page. It's a good start.
  
- **Get DOM Raw:** grabs the entire DOM in HTML form.

- **Get DOM URIs:** Lists every URI that it can find in the document, including links, image sources, iframes, etc. This is good for getting a sense of the dependencies.

- **Get DOM Classes:** Lists every class in the DOM, collated by tag name. Since classes are often named in ways that describe functionality, this can be a good way of getting a sense of what the page does that might need testing.

- **Get DOM By Classes:** Grabs outer HTML of DOM elements, collated by class names. Often classes map directly to functionality such that you want to grab all the HTML associated with certain classes. This bookmarklet does the job.

- **Get DOM By Classes InnerText:** Grabs inner text of DOM elements, collated by class names. When making a coverage outline, getting the inner text associated with particular classes is a great shortcut.

- **Get DOM Hidden:** Lists every element of the DOM that has a style attribute that includes "hidden" or "display:none". If there are things in the DOM that are not currently showing on the screen, this bookmarklet will identify some or all of them.

- **Get DOM IDs:** Lists every element of the DOM that has an ID, collated by tag name. ID's make GUI-level automation way easier. This is a bookmarklet to use for reviewing testability of the page.

- **Get DOM Innertext:** Lists all the text associated with each element of the DOM. This is probably all the text that can appear on the page, other than stuff dynamically generated.

- **Get DOM Read/Write:** Lists all the editable elements on the page. If a field is editable, then you will need to test by entering data into it.

- **Get Storage:** Dumps the contents of Javascript-visible cookies, Local Storage, and Session Storage. Local storage can be a gold mine of test data, or categories of test data, that you will need to test with.

- **Console Stamp:** This one dumps the following info to the console, which is useful during testing: current page title, current URL, current time, and any selected text on the page. It also prompts you in case you want to enter a note. Great for in situ notetaking. This is especially useful if you have enabled the Chrome debug log.

In addition to the functionality described above, each of these bookmarklets also performs the function of the Console Stamp bookmarklet whenever you invoke it.
