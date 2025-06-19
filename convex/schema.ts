import { defineSchema } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'

const schema = defineSchema({
  ...authTables,
  // Other tables can be defined here
})

export default schema
