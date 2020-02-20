[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)
[![Autodesk Forge](https://img.shields.io/badge/Autodesk-Forge-orange.svg)](https://forge.autodesk.com/)
[![NativeScript](https://img.shields.io/badge/NativeScript-Angular-blue.svg)](https://docs.nativescript.org/)
[![Platform](https://img.shields.io/badge/Platform-iOS|Android-green.svg)](https://forge.autodesk.com/)

# Description

Autodesk Forge Viewer Sample for NativeScript in Angular TypeScript

Original post: https://forge.autodesk.com/blog/build-cross-platform-viewer-apps-reason-react-native-and-nativescript-angular

# Why NativeScript?

NativeScript is a framework for building truly native mobile apps with Angular, Vue.js, TypeScript, or JavaScript, enabling one to use a complete stack of cross-platform APIs to write your application code or directly access all platform-specific native APIs using JavaScript only. It's maintained by Telerik, which might ring a bell if you work extensively with .NET, but it appears to have lost a bit of momentum in recent years due to the rise of other popular frameworks...

# Project Structure

```
|-- src/app/main.ts  // App entry
|-- src/app/app.*    // Main app
|-- src/app/home     // Viewer component (WebView)
```

# Setup and Run

## Prerequisites
- Node.JS (install [here](https://nodejs.org/en/download/))
- [NativeScript](https://docs.nativescript.org/)

## Build and Run

- `npm install`
- Modify [the HTML content string here](https://github.com/dukedhx/viewer-nativescript-angular/blob/master/src/app/home/home.component.ts) if you'd like to see your own models ...

### iOS

- Run `tns preview` and use the official iOS app to preview your app, see [here](https://docs.nativescript.org/tooling/docs-cli/project/testing/preview) for details
- Or build with `tns build ios`

### Android

- Run `tns preview` and use the official Android app to preview your app, see [here](https://docs.nativescript.org/tooling/docs-cli/project/testing/preview) for details
- Or build with `tns build android`

# License

[MIT](http://opensource.org/licenses/MIT)

# Written By

[Bryan Huang](https://www.linkedin.com/in/bryan-huang-1447b862) - Forge Partner Development https://forge.autodesk.com
