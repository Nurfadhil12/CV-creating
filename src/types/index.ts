export interface DATAPROFILE {
    id: string;
    name: string;
    old: string;
    profile: string;
}

export interface DATAEXPERIENCE {
    id: string;
    position: string;
    company: string;
    jobDescription: string;
    startDate: string;
    endDate: string;
    images: string;
}


export enum PageEnum {
    list,
    add,
    edit,
}

export enum PageEnum1 {
    list,
    add,
    edit,
}