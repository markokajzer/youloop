YouLoop
=======

[![Chrome Web Store Downloads](https://img.shields.io/chrome-web-store/rating/fbeahjcnoclflfhkgphfadjldhfadncl.svg?maxAge=2592000)]()
[![Chrome Web Store Downloads](https://img.shields.io/chrome-web-store/d/fbeahjcnoclflfhkgphfadjldhfadncl.svg?maxAge=2592000)]()

[![Code Climate](https://codeclimate.com/github/markokajzer/youloop/badges/gpa.svg)](https://codeclimate.com/github/markokajzer/youloop)

Chrome extension to put YouTube videos on repeat. When visiting a YouTube video, it next to the other controls right under the video. A simple click will start looping the video (and restart it, if it has already ended).

Download and install through Chrome Web Store: [YouLoop](https://chrome.google.com/webstore/detail/youloop/fbeahjcnoclflfhkgphfadjldhfadncl).

I decided to implement this extension after looking into the code of some others qualified for the same task. All of them were kind of messy, needlessly large by including jQuery and other stuff libraries, and they still supported the old and deprecated Flash Player, which even Adobe (its creators) want removed from the internet. This is unnecessary. YouLoop is implemented in Vanilla JavaScript and drops support for Flash. For a better life without Flash!
