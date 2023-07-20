import { randomUUID } from 'node:crypto'

const generateId = (length = 8) => randomUUID().substring(0, length)

export default generateId
