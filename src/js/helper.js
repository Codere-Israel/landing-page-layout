export function CodereHelmet(title, description, type) {
  // Update the document title
  document.title = title;

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

  setMetaDescription(description);
  setFavicon(type);

  const head = document.head;
  const firstChild = head.firstChild;

  let newTitle = document.createElement("title");
  newTitle.textContent = `${title}`;
  head.insertBefore(newTitle, firstChild);

  let newMetaDescription = document.createElement("meta");
  newMetaDescription.name = "description";
  newMetaDescription.content = description;
  head.insertBefore(newMetaDescription, head.children[1]);
}

function setMetaDescription(description) {
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
}

function setFavicon(type) {
  const existingFavicon = document.querySelector("link[rel='icon']");
  console.log(existingFavicon);

  if (existingFavicon) {
    existingFavicon.parentNode.removeChild(existingFavicon);
  }

  // Create new link element
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = `https://www.codere.es/assets1/icons/favicon-${type}.png`;

  // Append to head
  document.head.appendChild(link);
}
