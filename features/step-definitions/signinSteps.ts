import { Given, When, Then, After } from '@wdio/cucumber-framework';
import SigninPage from '../../page-objects/signinPage';
import { SigninTask } from '../tasks/signinTask';

import {expect} from 'chai';

const email = process.env.EMAIL || '';
const password = process.env.PASSWORD || '';
const wrongEmail = process.env.WRONG_EMAIL || '';
const wrongPassword = process.env.WRONG_PASS || '';

const signinTask = new SigninTask()

let manualInterventionRequired = false

Given(/^The user enters the Amazon homepage$/, async () => {
    await SigninPage.open()
})

When(/^The user enters the correct email and password from header$/, async () => {
    await signinTask.clickSigninHeader();
    await signinTask.amazonSignIn(email, password);
})

When(/^The user re-enter password and captcha$/, async () => {

    if (SigninPage.captchaSection.isExisting()) {
        await SigninPage.passwordInput.setValue(password)
        manualInterventionRequired = true;
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
})

Then(/^The user sees Sign Out link on Account & Lists$/, async () => {
    await signinTask.signinHeader.moveTo();
    await expect(signinTask.signoutLink).exist
    await signinTask.signinHeader.moveTo();
    await signinTask.signoutLink.click();
})

// Other scenarios
When(/^The user enters the incorrect email or password from header$/, async () => {
    await signinTask.clickSigninHeader();
    await signinTask.amazonSignIn(wrongEmail, wrongPassword);
  })

Then(/^The user sees an error message and sign-in is not possible$/, async () => {
    await expect(signinTask.errorMsgContainer).to.exist;
})

When(/^The user enters the correct email and password from footer$/, async () => {
    await signinTask.preFooterContainer.scrollIntoView()
    await signinTask.clickSigninFooter();
    await signinTask.amazonSignIn(email, password);
  })

When(/^The user enters the incorrect email or password from footer$/, async () => {
    await signinTask.preFooterContainer.scrollIntoView()
    await signinTask.clickSigninFooter();
    await signinTask.amazonSignIn(wrongEmail, wrongPassword);
})