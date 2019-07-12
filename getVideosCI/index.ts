import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, res : any): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const id = (req.query.id || (req.body && req.body.id));

    if (id) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: res
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

export default httpTrigger;
