# Pixi.js Bidirectional Text Plugin

Currently, Pixi.js doesn't handle bidirectional text properly due to underlying browser [bugs](https://bugs.webkit.org/show_bug.cgi?id=169922). 
I haven't checked all the browsers, but this issue seems to affect Gecko-based browsers (mainly Firefox), too.
Obviously the linked bug report on Webkit means that Chrome suffers from the same issue.

Until these issues are fixed, this plugin will attempt to workaround these limitations and in general provide a compatibility layer for older browsers.
