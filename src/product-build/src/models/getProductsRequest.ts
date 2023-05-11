import { RequestBase } from "./requestBase"

export class GetProductsRequest extends RequestBase {
    public baseProductTag: string;

    constructor(sasToken: string, baseProductTag: string) {
        super(sasToken);
        this.baseProductTag = baseProductTag;
    }

    get path() {
        return `/products?token=${this.sasToken}&baseProductTag=${this.baseProductTag}`
    } 
}