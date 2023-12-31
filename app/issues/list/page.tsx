import prisma from '@/prisma/client'

import Pagination from "@/app/Pagination"
import { Status } from "@prisma/client"
import IssueActions from './IssueActions'
import TableIssue, { IssueQuery, columnNames } from "./tableIssue"
import { Flex } from '@radix-ui/themes'
import { Metadata } from 'next'
interface Props {
  searchParams: IssueQuery
}
const IssuePage = async({searchParams}: Props) => {
  
  
  const pageSize = 2
  const page = parseInt(searchParams.page) || 1
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status) ? 
    searchParams.status 
    : undefined

  const orderBy = columnNames
  .includes(searchParams.orderBy)
  ? { [searchParams.orderBy] : 'asc'}
  : undefined
  
  const where = {
    status
  }
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page -1 ) * pageSize,
    take: pageSize
  })
  const totalCount = await prisma.issue.count({
    where
  })

  return (
    <Flex direction="column" gap="3" className='max-w-4xl'>
    <IssueActions />
    <TableIssue issues={issues} searchParams={searchParams} />
    
    <Pagination currentPage={page} itemCount={totalCount} pageSize={pageSize} />
    </Flex>
  )
}

export const metadata: Metadata = {
  title: 'Issue Tracker - Lists',
  description: 'Issue tracker as app for loggin issues in the system.'
}

//export const dynamic = 'force-dynamic'
export const revalidate = 0 
export default IssuePage