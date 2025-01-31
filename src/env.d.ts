declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent
    export default component
}

declare namespace App {
    interface Locals {
        user: {
            name: string
        },
        welcomeTitle: () => string,
        orders: Map<string, object>
    }
}