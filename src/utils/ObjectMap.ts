// this function is for delete fields with value '' because is not necessary edit them
export function ObjectMap (object: Record<string, any>): Record<string, any> {
  const newObject: Record<string, any> = {}
  for (const [key, value] of Object.entries(object)) {
    if (value !== '') { newObject[key] = value }
  }
  return newObject
}
