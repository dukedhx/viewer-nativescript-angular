import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    private webViewSrc = `<!DOCTYPE html>
                          <html>
                          <head>
                          <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/style.min.css?v=v7.*" type="text/css">
                          <script language="JavaScript" src="https://developer.api.autodesk.com/modelderivative/v2/viewers/viewer3D.min.js?v=v7.*"></script>
                          </head>
                          <body>
                          <div></div>
                          </body>
                          <script>
                          Autodesk.Viewing.Initializer({env:'Local'}, ()=>new Autodesk.Viewing.GuiViewer3D(document.getElementsByTagName('div')[0]).start('https://dukedhx.github.io/Forge-Workshop/shaver/0.svf'))
                          </script>
                          </html>`;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
