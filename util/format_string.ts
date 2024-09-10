export function formatRecipeInfo(text: string) {
  // Replace <b> tags with **
  text = text.replace(/<b>/g, "**").replace(/<\/b>/g, "**");

  // Replace <a href="..."> tags with markdown-style links
  text = text.replace(/<a href="([^"]+)">([^<]+)<\/a>/g, "[$2]($1)");

  // Replace \u003C and \u003E with < and >
  text = text.replace(/\\u003C/g, "<").replace(/\\u003E/g, ">");

  return text;
}
