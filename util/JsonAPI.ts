export const formObj = (obj: any): void => {
  for (var propName in obj) {
    if (propName == 'actions' || propName == 'relationships' || propName == 'type') {
      delete obj[propName]
    }
  }
  return obj
}
