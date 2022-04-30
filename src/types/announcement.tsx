

export interface Announcement {
    title: string
    price: number
    image?: string
}



export interface AnnouncementList {
    count: number
    next: null | string
    previous: null | string
    results: Array<Announcement>
}

export interface AnnouncementCreate {
    title: string
    price: number
    description: string
}