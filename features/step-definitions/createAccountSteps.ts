import { Given, When, Then, After } from '@wdio/cucumber-framework';
import { CreateAccountPage } from '../../page-objects/createAccountPage';
import { CreateAccountTask } from '../tasks/createAccountTask';
import { SigninTask } from '../tasks/signinTask';

import { expect } from 'chai';

const createAccountPage = new CreateAccountPage()
const createAccountTask = new CreateAccountTask()

Given(/^The user enters the Amazon page$/, async () => {
    await createAccountPage.open()
})

When(/^The user enters the correct name, email and password from header$/, async () => {
    await createAccountTask.clickCreateAccStartHereHeader();
    await createAccountTask.amazonCreateAccount("Elenis", "elenitavargas123@gmail.com", "elenitasiempreviva")
    await createAccountPage.continueBtn.click()
})

When(/^The user don't enter name, email or password from header$/, async () => {
    await createAccountTask.clickCreateAccStartHereHeader();
    await createAccountTask.amazonCreateAccount("Elenis", "", "elenitasiempreviva")
    await createAccountPage.continueBtn.click()
})

When(/^The user enters the name, existing email and password from header$/, async () => {
    await createAccountTask.clickCreateAccStartHereHeader();
    await createAccountTask.amazonCreateAccount("Ele", "helloelenacorrea@gmail.com", "helloelena1234")
    await createAccountPage.continueBtn.click()
})

Then(/^OTP field is present$/, async () => {
    await expect(createAccountPage.EntOTPInput.exist)
})

Then(/^The user receives an error message for missing field$/, async () => {
    await expect(createAccountPage.missingFieldError.exist)
})

Then(/^The user receives an error message for existing email$/, async () => {
    await expect(createAccountPage.existingEmailError.exist)
})


