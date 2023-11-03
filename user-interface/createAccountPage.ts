import { $ } from '@wdio/globals'
import Page from './page';

export class createAccountPage extends Page {

    LOCATOR = (fileName: string) => `//)[${fileName}]`
    public get input(){ return $("")}


    public open () {
        return super.open();
    }
}

export default new createAccountPage();