import { IssueStatusBadge, LinkRadixLink } from "@/app/components"
import prisma from '@/prisma/client'
import { Table } from '@radix-ui/themes'

import IssueActions from './IssueActions'
const IssuePage = async() => {
  const issues = await prisma.issue.findMany()
  return (
    <div className='p-6 max-w-4xl'>
    <IssueActions />

    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Created Date</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map(issue => (
          <Table.Row key={issue.id}>
            <Table.RowHeaderCell>
              <LinkRadixLink href={`/issues/${issue.id}`}>
                {issue.title}
              </LinkRadixLink>
              
              <div className='block md:hidden'>
                <IssueStatusBadge status={issue.status} />
               
              </div>
              <div className='block md:hidden'>{issue.createdAt.toDateString()}</div>
            </Table.RowHeaderCell>
            <Table.Cell className='hidden md:table-cell'>
            <IssueStatusBadge status={issue.status} />
              
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
        ))}
        

        
      </Table.Body>
    </Table.Root>
    </div>
  )
}
//export const dynamic = 'force-dynamic'
export const revalidate = 0 
export default IssuePage