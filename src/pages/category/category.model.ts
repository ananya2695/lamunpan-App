export class homeModel {
    bestseller: Array<bestsellerModel>= [];
    category: Array<categoryModel>= [];
}


export class bestsellerModel {
    name: string;
    size: Array<bestsellerSizeModel> = [];
    type: Array<bestsellerTypeModel> = [];
    pic:string;
}

export class bestsellerSizeModel {
    size: string;
    price: number;
}

export class bestsellerTypeModel {
    name: string;
    price: number;
}


export class categoryModel {
    pic:  string;
    name: string;
}