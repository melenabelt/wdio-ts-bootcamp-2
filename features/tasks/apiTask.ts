import axios from 'axios';


export class ApiTask {
    apiURL = "https://jsonplaceholder.typicode.com/posts"

    public async getResults():Promise<any>{        
        const url = this.apiURL;
        let response = await axios.get(url)
        .catch((error: {message: any; response: any; }) => {
            throw new Error(`Error getting the information:- ${error.message}\n`)
        })

        return response;
    }

    public async createPost():Promise<any>{
        const url = this.apiURL;
        const payload: any = {
            "title": "I'm a title",
            "body": "I'm a very cute body",
            "author": "Team number 2!"
        };
        
        let response = await axios.post(url, payload)
        .catch((error: {message: any; response: any; }) => {
            throw new Error(`Error creating a new resource:- ${error.message}\n`)
        })

        return response;
    }

    public async updatePost():Promise<any>{
        const url = this.apiURL + "/100";
        const payload: any = {
            "title": "I'm another title",
            "body": "I'm a very cute body",
            "author": "Team number 2!"
        };
        
        let response = await axios.put(url, payload)
        .catch((error: {message: any; response: any; }) => {
            throw new Error(`Error updating resource:- ${error.message}\n`)
        })

        return response;
    }

    public async deletePost():Promise<any>{        
        const url = this.apiURL + "/100";
        let response = await axios.delete(url)
        .catch((error: {message: any; response: any; }) => {
            throw new Error(`Error getting the information:- ${error.message}\n`)
        })

        return response;
    }
}