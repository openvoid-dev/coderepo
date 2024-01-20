export interface ResourceCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    icon: string;
}

export interface Resource {
    name: string;
    link: string;
    description: string;
}

export interface ResourcesBySlugResult {
    // Define the structure of the result
    resourceCategory: ResourceCategory;
    resources: Resource[];
}
