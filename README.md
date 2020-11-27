YouLoop
=======

<div align="center">

[![Chrome Web Store Downloads](https://img.shields.io/chrome-web-store/d/fbeahjcnoclflfhkgphfadjldhfadncl.svg?maxAge=2592000&style=for-the-badge)](https://chrome.google.com/webstore/detail/youloop/fbeahjcnoclflfhkgphfadjldhfadncl)
[![Chrome Web Store Rating](https://img.shields.io/chrome-web-store/rating/fbeahjcnoclflfhkgphfadjldhfadncl.svg?maxAge=2592000&style=for-the-badge)](https://chrome.google.com/webstore/detail/youloop/fbeahjcnoclflfhkgphfadjldhfadncl)
![jabbascript](https://img.shields.io/badge/Javascript-294E80.svg?style=for-the-badge&logo=javascript)
[![Sponsors](https://img.shields.io/static/v1?style=for-the-badge&label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/markokajzer&color=ff69b4)](https://github.com/sponsors/markokajzer)

</div>


Chrome extension to put YouTube videos on repeat.

When visiting a YouTube video, it will be next to the other controls right under the video. No additional app needed, everything is right there in the YouTube UI and fits in nicely with the other controls. A simple click will start looping the video (and restart it, if it has already ended).

<div align="center">

[Download and install through Chrome Web Store](https://chrome.google.com/webstore/detail/youloop/fbeahjcnoclflfhkgphfadjldhfadncl).

</div>

I decided to implement this extension after looking into the code of some others qualified for the same task. All of them were kind of messy, needlessly large by including jQuery and other libraries, and they still supported the old and deprecated Flash Player, which even Adobe (its creators) want removed from the internet. This is unnecessary. YouLoop is implemented in Vanilla JavaScript and drops support for Flash. For a better web without Flash!
