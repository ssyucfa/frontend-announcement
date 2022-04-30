import api from "../http/api"
import { AnnouncementCreate, AnnouncementList } from "../types/announcement"



export default class AnnouncementService {

    static async getAnnouncements() {
        const response = await api.get<AnnouncementList>("/announcement")
        return response.data
    }

    static async createAnnouncement(announcement: AnnouncementCreate) {
        await api.post("/announcement/", announcement)
    }
}