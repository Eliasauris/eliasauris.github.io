setElementClassEnabled = (element, className, enabled) => element.classList[enabled? 'add' : 'remove'](className)

// relative tabs
function openTab(ev, name) {
	const tab = ev.target
	name ||= tab.innerText
	const tabframe = tab.parentElement.parentElement
	const container = tabframe.querySelector(":scope > .tab-content-container")
	const tabcontent = container.querySelector(":scope > .tab-content[data-tab='" + name + "']")

	for (const e of container.children) e.style.display = e == tabcontent ? 'block' : 'none'
	for (const t of tabframe.querySelectorAll(":scope > .tab-bar>button")) setElementClassEnabled(t, 'active', false)

	setElementClassEnabled(tab, 'active', true)
}

// initialize document defaults (for example, change the default a.target to be "_blank", but only does so to elements that are in index.html, and is not applied to elements created later.)

// changes the default a.target inside link-list items to be '_blank'
document.querySelectorAll(".link-list>li>a").forEach(a => a.target ||= '_blank')

// sets all tab buttons default to openTab(event)
document.querySelectorAll(".tab-button").forEach(e => e.onclick ||= e => openTab(e))
