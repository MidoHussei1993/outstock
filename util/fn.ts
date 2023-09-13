export function copyToClipboard(text: string = ""): void {
  const dummy = document.createElement("textarea")
  document.body.appendChild(dummy)
  dummy.value = text
  dummy.select()
  document.execCommand("copy")
  document.body.removeChild(dummy)
}

export function guid() {
  const head = Date.now().toString(36)
  const tail = Math.random().toString(36).substring(2)
  return head + tail
}
