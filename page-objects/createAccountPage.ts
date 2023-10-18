import { $ } from '@wdio/globals'
import Page from './page';

export class CreateAccountPage extends Page {

    LOCATOR = (fileName: string) => `//)[${fileName}]`
    public get input(){ return $("")}

    // Elena
    public get accountAndList() {
        return $('#nav-link-accountList')
    }

    public get createAccountBtn() {
        return $('#createAccountSubmit')
    }

    public get continueBtn() {
        return $('#continue')
    }

    public get EntOTPInput() {
        return $('input#cvf-input-code')
    }

    public get verifyOTPBtn() {
        return $('span[id="cvf-submit-otp-button"] input')
    }

    // Santi
    public get startHere() {
        return $('(// * [contains (text (), "Start here")])[2]');
    }

    public get inputYourName() {
        return $('#ap_customer_name');
    }

    public get inputEmail() {
        return $('#ap_email');
    }

    public get inputPassword() {
        return $('#ap_password');
    }

    public get inputPasswordCheck() {
        return $('#ap_password_check');
    }
    
    public get continueButton() {
        return $('//input[@id="continue"]');
    }

    public get inputEnterOTP() {
        return $('//input[@name="code"]'); // //div[@id="cvf-input-code-container"]
    }   

    public get createAccountButton() {
        return $('//input [contains(@aria-labelledby, "cvf-submit-otp-button-announce")]');
    }

    public open () {
        return super.open();
    }
}

export default new CreateAccountPage();