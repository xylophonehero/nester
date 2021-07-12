export const convertBrackets = (string) => string
  .replace(/\[(?<class>\w+)\]/, `<span class="$<class>">`)
  .replace(/\[\/\w+\]/, "</span>")