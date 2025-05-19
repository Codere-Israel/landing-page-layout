export function CodereHelmet(title, description) {
  // Update the document title
  document.title = title;

  // Handle meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  } else {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = description;
    document.head.appendChild(metaDescription);
  }
  // console.log(location);

  // Handle canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute("href", location.href);
  } else {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = location.href;
    document.head.appendChild(canonicalLink);
  }

  // Remove existing title and meta description elements (excluding JSON-LD)
  const headChildren = document.head.children;
  for (let i = headChildren.length - 1; i >= 0; i--) {
    const child = headChildren[i];
    if (
      child.tagName === "TITLE" ||
      (child.tagName === "META" && child.name === "description")
    ) {
      child.remove();
    }
  }

  // Place new title and meta description immediately after <head> tag
  const head = document.head;
  const firstChild = head.firstChild;

  let newTitle = document.createElement("title");
  newTitle.textContent = `${title} | Codere®`;
  head.insertBefore(newTitle, firstChild);

  let newMetaDescription = document.createElement("meta");
  newMetaDescription.name = "description";
  newMetaDescription.content = description;
  head.insertBefore(newMetaDescription, head.children[1]);
}
