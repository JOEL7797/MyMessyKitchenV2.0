export class ProductModel{
    constructor(
        public productId : Number,
        public productName : String,
        public productType : String,
        public price : Number,
        public quantity : Number,
        public description : String,
        public location : String,
        public imageUrl : String){}
    
}