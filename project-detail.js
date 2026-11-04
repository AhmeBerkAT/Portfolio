function renderProjectDetails() {
    const container = document.getElementById("project-detail");
    const projectId = new URLSearchParams(window.location.search).get("id");
    const project = projects.find(item => item.id === projectId);

    if (!project) {
        container.innerHTML = `
            <h1>Projet introuvable</h1>
            <p class="empty-state">Ce projet n'existe pas ou n'est plus disponible.</p>`;
        return;
    }

    document.title = `${project.title} - Portfolio`;
    const image = project.image
        ? `<img class="project-detail-image" src="${project.image}" alt="${project.title}">`
        : "";
    const tags = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");
    const gallery = project.gallery.length
        ? `<section><h2>Galerie</h2><div class="project-gallery">${project.gallery
            .map(imageUrl => `<img src="${imageUrl}" alt="${project.title}" loading="lazy">`).join("")}</div></section>`
        : "";
    const video = project.video
        ? `<section><h2>Vidéo</h2><div class="project-video"><iframe src="${project.video}" title="Vidéo de ${project.title}" allowfullscreen></iframe></div></section>`
        : "";
    const documents = project.pdfs.length
        ? `<section><h2>Documents</h2><ul class="project-links">${project.pdfs
            .map(pdf => `<li><a href="${pdf.url}" target="_blank" rel="noopener">${pdf.title}</a></li>`).join("")}</ul></section>`
        : "";
    const repository = project.repo
        ? `<a class="detail-link" href="${project.repo}" target="_blank" rel="noopener">Voir le dépôt</a>`
        : "";

    container.innerHTML = `
        ${image}
        <div class="project-detail-content">
            <div class="project-badges">
                <span class="badge year-badge">${project.year}</span>
                <span class="badge type-badge">${project.type}</span>
            </div>
            <h1>${project.title}</h1>
            <div class="project-tags">${tags}</div>
            <p class="project-full-description">${project.fullDescription}</p>
            <div class="project-detail-actions">${repository}</div>
            ${gallery}
            ${video}
            ${documents}
        </div>`;
}

document.addEventListener("DOMContentLoaded", renderProjectDetails);
