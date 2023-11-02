import verifyProductPage, {
  VerifyProductPage,
} from "../../page-objects/verifyProductPage";

export class VerifyProductTask extends VerifyProductPage {
  public async getDescBullets() {
    const descriptionBullets = await this.descriptionBullets;
    const liElements = await descriptionBullets.$$("li");
    return liElements;
  }

  public async getRamSizeText() {
    const ramSizeText: string = await this.ramSize.getText();
    return ramSizeText;
  }

  public async getbrandNameText() {
    const brandNameText: string = await this.brand.getText();
    return brandNameText;
  }

  public async getFullPrice() {
    const priceWhole = await this.priceWhole.getText();
    const priceDecimal = await this.priceDecimal.getText();
    const fullPrice = priceWhole + "." + priceDecimal;
    const numFullPrice = parseFloat(fullPrice);

    return numFullPrice;
  }

  public async getImportFees() {
    const importFeesText = await this.importFees.getText();
    const importFeesRegex: RegExpMatchArray | null =
      importFeesText.match(/\d+\.\d+/);
    let numImportFees = 0.0;

    console.log("Import Fees Text:", importFeesText);

    if (importFeesRegex !== null) {
      numImportFees = parseFloat(importFeesRegex[0]);
    }

    console.log("Import Fees Float", numImportFees);

    return numImportFees;
  }

  public async getDetailsFinalPrice() {
    await this.detailsButton.click()
    const totalSpanText = await this.finalPrice.getText()

    console.log("Span total price Text:", totalSpanText)


    const TotalPriceRegex: RegExpMatchArray | null =
      totalSpanText.match(/\d+\.\d+/);
    let numFullPrice = 0.0;

    if (TotalPriceRegex !== null) {
      numFullPrice = parseFloat(TotalPriceRegex[0]);
    }

    console.log("Span total price Float:", numFullPrice);

    return numFullPrice;
  }

}
