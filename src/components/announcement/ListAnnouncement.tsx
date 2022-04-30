import React, { useState } from "react"
import { Button } from "react-bootstrap"
import AnnouncementService from "../../services/AnnouncementService"
import { Announcement } from "../../types/announcement"

const ListAnnouncement: React.FC = () => {
    const [announcements, setAnnouncements] = useState<Array<Announcement>>([])

    return (
        <>
        <Button onClick={async () => {
            const result = await AnnouncementService.getAnnouncements()
            setAnnouncements(result.results)
        }}>Показать все объявления</Button>

        {announcements.map(ann => 
        <div>
            <p>{ann.title}</p>
            <p>{ann.price}</p>
        </div>
        )}
        </>
    )
}

export default ListAnnouncement