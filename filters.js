let currentFilters = {
    type: "all",
    year: "all",
    category: "all",
    tags: []
};

function renderProjects() {
    const container = document.getElementById("projects-container");
    const tagContainer = document.getElementById("tag-filters");
    if (!container || !tagContainer) return;

    const baseProjects = projects.filter(project => {
        const matchType = currentFilters.type === "all" ||
            (currentFilters.type === "other" ? project.type === "Académique" : project.type === currentFilters.type);
        const matchYear = currentFilters.year === "all" || project.year === currentFilters.year;
        const matchCategory = currentFilters.category === "all" || project.categories.includes(currentFilters.category);
        return matchType && matchYear && matchCategory;
    });

    const availableTags = [...new Set(baseProjects.flatMap(project => project.tags))].sort();
    currentFilters.tags = currentFilters.tags.filter(tag => availableTags.includes(tag));
    updateFilterCounts();
    tagContainer.innerHTML = [
        `<span class="filter-label">Tags :</span>`,
        createFilterButton("all", "Tous", currentFilters.tags.length === 0, baseProjects.length)
    ].concat(availableTags.map(tag => createFilterButton(
        "tag",
        tag,
        currentFilters.tags.includes(tag),
        baseProjects.filter(project => project.tags.includes(tag)).length
    ))).join("");

    const filteredProjects = baseProjects.filter(project =>
        currentFilters.tags.length === 0 ||
        currentFilters.tags.some(tag => project.tags.includes(tag))
    );

    container.innerHTML = filteredProjects.length
        ? filteredProjects.map(createProjectCard).join("")
        : '<p class="empty-state">Aucun projet ne correspond à ces critères.</p>';
}

function createFilterButton(type, label, active, count) {
    return `<button class="filter-btn${active ? " active" : ""}" data-filter-tag="${type === "tag" ? label : "all"}">${label} (${count})</button>`;
}

function matchesFilters(project, excludedFilter, selectedValue) {
    const type = excludedFilter === "type" ? selectedValue : currentFilters.type;
    const year = excludedFilter === "year" ? selectedValue : currentFilters.year;
    const category = excludedFilter === "category" ? selectedValue : currentFilters.category;
    const matchType = type === "all" ||
        (type === "other" ? project.type === "Académique" : project.type === type);
    const matchYear = year === "all" || project.year === year;
    const matchCategory = category === "all" || project.categories.includes(category);
    const matchTags = currentFilters.tags.length === 0 ||
        currentFilters.tags.some(tag => project.tags.includes(tag));

    return matchType && matchYear && matchCategory && matchTags;
}

function updateFilterCounts() {
    document.querySelectorAll(".filter-select").forEach(select => {
        const [filterName] = Object.keys(select.dataset);
        const filter = filterName.replace("filter", "").toLowerCase();

        select.querySelectorAll("option").forEach(option => {
            const count = projects.filter(project =>
                matchesFilters(project, filter, option.value)
            ).length;
            option.textContent = `${option.dataset.label} (${count})`;
        });
    });
}

function createProjectCard(project) {
    const image = project.image
        ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
        : "<div class=\"no-img\">Aperçu indisponible</div>";
    const tags = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");

    return `
        <a class="project-card" href="project.html?id=${encodeURIComponent(project.id)}">
            <div class="project-image-placeholder">${image}</div>
            <div class="project-info">
                <div class="project-badges">
                    <span class="badge year-badge">${project.year}</span>
                    <span class="badge type-badge">${project.type}</span>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">${tags}</div>
            </div>
        </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const filters = document.getElementById("main-filters");

    document.getElementById("reset-filters").addEventListener("click", () => {
        currentFilters = {
            type: "all",
            year: "all",
            category: "all",
            tags: []
        };

        filters.querySelectorAll(".filter-select").forEach(select => {
            select.value = "all";
        });

        renderProjects();
    });

    filters.addEventListener("change", event => {
        const select = event.target.closest(".filter-select");
        if (!select) return;

        const [filterName] = Object.keys(select.dataset);
        currentFilters[filterName.replace("filter", "").toLowerCase()] = select.value;
        renderProjects();
    });

    filters.addEventListener("click", event => {
        const button = event.target.closest(".filter-btn");
        if (!button) return;

        const tag = button.dataset.filterTag;
        currentFilters.tags = tag === "all"
            ? []
            : currentFilters.tags.includes(tag)
                ? currentFilters.tags.filter(selectedTag => selectedTag !== tag)
                : [...currentFilters.tags, tag];

        renderProjects();
    });

    renderProjects();
});
