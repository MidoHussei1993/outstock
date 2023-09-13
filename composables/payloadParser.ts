type backendErrorMassage = {
  detail: string
  status: number
  title: string
}
import { serialize } from 'jsonapi-fractal'

export const $payloadParser = (entity: any, type: string) => {
  const properties = Object.keys(entity)
  let relationArray: string[] = []
  properties.map((prop: string) => {
    if (Array.isArray(entity[prop])) relationArray.push(prop)
  })
  return serialize(entity, type, {
    relationships: relationArray,
  })
}
