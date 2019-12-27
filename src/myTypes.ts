export interface petFinderJson {
    animals: Animal[],
    pagination: {
        count_per_page: number,
        total_count: number,
        current_page: number,
        total_pages: number,
        _links: {
            previous: {href: string},
            next: {href: string}
        }
    }
}

export interface Animal {
    id: number,
    organization_id: string,
    url: string,
    type: string,
    species: string,
    breeds: {
        primary: string,
        secondary: null,
        mixed: boolean,
        unknown: boolean
    },
    colors: {
        primary: string,
        secondary: null,
        tertiary: null
    },
    age: string,
    gender: string,
    size: string,
    coat: string,
    name: string,
    description: string,
    photos: [
        {
            small: string,
            medium: string,
            large: string,
            full: string
        }
    ],
    status: string,
    attributes: {
        spayed_neutered: boolean,
        house_trained: boolean,
        declawed: boolean,
        special_needs: boolean,
        shots_current: boolean
    },
    environment: {
        children: boolean,
        dogs: boolean,
        cats: boolean
    },
    tags: [
        string,
        string,
        string,
        string,
        string
    ],
    contact: {
        email: string,
        phone: string,
        address: {
            address1: null,
            address2: null,
            city: string,
            state: string,
            postcode: string,
            country: string
        }
    },
    published_at: string,
    distance:number,
    _links: {
        self: {
            href: string
        },
        type: {
            href: string
        },
        organization: {
            href: string
        }
    }
}