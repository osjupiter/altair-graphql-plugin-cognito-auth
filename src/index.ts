import { createRoot } from 'react-dom/client';
import App from "./hoge"

const testdom=document.createElement('div')

class AltairPluginName {

    initialize(ctx:any) {
        const r=createRoot(testdom)
        r.render(App())
        console.log("hello from plugin!!!")
        ctx.app.createPanel(testdom)
    }

    async destroy() {}
}
export {}

// Add the class to the Altair plugins object
(window as any).AltairGraphQL.plugins.AltairPluginName = AltairPluginName;