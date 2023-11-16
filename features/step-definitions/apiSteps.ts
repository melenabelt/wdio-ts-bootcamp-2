import { Given, When, Then } from '@wdio/cucumber-framework';

import { expect } from 'chai';
import { ApiTask } from '../tasks/apiTask';

const apiTask = new ApiTask()
let apiResponse: any;

Given(/^the user has a valid API endpoint$/, async () => {
    const expectedEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    const actualEndpoint = apiTask.apiURL

    expect(actualEndpoint).to.equal(expectedEndpoint);
})

When(/^the user makes a GET request to the API$/, async () => {
    apiResponse = await apiTask.getResults();

    console.log("Response status", apiResponse.status)
})

Then(/^the get API responds with a 200 status code$/, async () => {
    await expect(apiResponse.status).to.equal(200);
})

Then(/^the response contains valid JSON data$/, async () => {
    await expect(apiResponse.data[0].title).to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
})


When(/^the user makes a POST request to the API with valid data$/, async () => {
    apiResponse = await apiTask.createPost()
})

Then(/^the API responds with a 201 status code$/, async () => {
    await expect(apiResponse.status).to.equal(201);
})

Then(/^the response contains the newly created resource$/, async () => {
    await expect(apiResponse.data.title).to.equal("I'm a title");
})


Given(/^the user has an existing resource$/, async () => {
    apiResponse = await apiTask.getResults();
    await expect(apiResponse.data).to.not.be.empty;
})

When(/^the user makes a PUT request to the API with updated data$/, async () => {
    apiResponse = await apiTask.updatePost()
})

Then(/^the put API responds with a 200 status code$/, async () => {
    await expect(apiResponse.status).to.equal(200);
})

Then(/^the response contains the updated resource$/, async () => {
    await expect(apiResponse.data.title).to.equal("I'm another title");
})


When(/^the user makes a DELETE request to the API$/, async () => {
    apiResponse = await apiTask.deletePost()
})

Then(/^the delete API responds with a 200 status code$/, async () => {
    await expect(apiResponse.status).to.equal(200);
})