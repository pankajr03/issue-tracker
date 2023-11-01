import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'
const statusMap: Record<
    Status, {label: string, color: 'red' | 'violent' | 'green'}> = {
    OPEN: { label: 'open', color: 'red'},
    IN_PROGRESS: { label: 'In Progress', color: 'violent'},
    CLOSED: {label: 'closed', color: 'green'}
}
const IssueStatusBadge = ({status}: {status: Status}) => {
    return <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
        
  
}

export default IssueStatusBadge