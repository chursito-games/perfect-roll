export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Only redirect the default pages.dev hostname
  if (url.hostname === "perfect-roll.pages.dev") {
    url.hostname = "perfectrollgame.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  // Otherwise serve the site normally
  return context.next();
}
