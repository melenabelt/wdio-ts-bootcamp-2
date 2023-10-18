import { browser } from '@wdio/globals'

export default class Page {
    public open () {
        browser.url(`https://www.amazon.com/`)
        browser.maximizeWindow()
    }

}