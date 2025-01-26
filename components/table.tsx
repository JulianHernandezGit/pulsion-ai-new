import { prisma } from '@/lib/prisma'
import { type users } from '@prisma/client'

export default async function Table() {
  try {
    const startTime = Date.now()
    const users = await prisma.users.findMany() // Changed from users to user
    const duration = Date.now() - startTime

    return (
      <div>
        <h2>Users ({users.length})</h2>
        <p>Query took: {duration}ms</p>
        <table className="min-w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user: users) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt.toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  } catch (error) {
    console.error('Database Error:', error)
    return <div>Error loading table data</div>
  }
}