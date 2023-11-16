import { Given, When, Then, After } from '@wdio/cucumber-framework';
import { VerifyProductPage } from '../../page-objects/verifyProductPage';
import { VerifyProductTask } from '../tasks/verifyProductTask';

import { expect } from 'chai';

const verifyProductPage = new VerifyProductPage()
const verifyProductTask = new VerifyProductTask()

Given(/^The user enters Product page$/, async () => {
    await verifyProductPage.open()
})

When(/^The user looks for "About this item" section$/, async () => {
    await expect(verifyProductPage.aboutThisProduct.exist)
})

Then(/^5 bullets are present for product description$/, async () => {
    const liElements = await verifyProductTask.getDescBullets();
    await expect(liElements).to.have.lengthOf(5);
})

When(/^The user looks for product specs$/, async () => {
    await expect(verifyProductPage.productSpecs.exist)
})

Then(/^graphic ram size is 12 GB$/, async () => {
    const ramSizeText = await verifyProductTask.getRamSizeText()
    await expect(ramSizeText).to.equal('12.00')
})

When(/^The user looks for Amazon's choice section$/, async () => {
    await expect(verifyProductPage.amazonBadgeSection.exist)
})

Then(/^"Amazon's Choice" icon is present$/, async () => {
    await expect(verifyProductPage.amazonsChoice.exist)
})

Then(/^brand name is "Samsung"$/, async () => {
    const brandNameText = await verifyProductTask.getbrandNameText()
    await expect(brandNameText).not.to.equal('Samsung')
})

When(/^The user looks for right column$/, async () => {
    await expect(verifyProductPage.rightColumn.exist)
})

Then(/^sum of price and import fees is equals to total price$/, async () => {

    // Price
    const numFullPrice = await verifyProductTask.getFullPrice()

    console.log('Float Full Price', numFullPrice)

    // Import Fees
    const numImportFees = await verifyProductTask.getImportFees()
    const totalPrice = numFullPrice + numImportFees

    console.log('Total Price:', totalPrice);
    
    // Full price to float

    const finalPrice = await verifyProductTask.getDetailsFinalPrice()

    await expect(totalPrice).to.eql(finalPrice)
})