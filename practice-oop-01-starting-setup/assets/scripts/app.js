class DOMHelper {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true)
        element.replaceWith(clonedElement)
        return clonedElement
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId)
        const destination = document.querySelector(newDestinationSelector)
        destination.append(element)
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElement = document.getElementById(hostElementId)
        } else {
            this.hostElement = document.body
        }
        this.insertBefore = insertBefore
    }

    detach = () => {
        if (this.element) {
            this.element.remove()
        }
    }

    attach() {
        this.hostElement.insertAdjacentElement(
            this.insertBefore ? "afterbegin" : "beforeend",
            this.element
        )
    }
}

class Tooltip extends Component {
    constructor(closeNotifierFunction, text, hostElementId) {
        super(hostElementId)
        this.closeNotifier = closeNotifierFunction
        this.text = text
        this.create()
    }

    closeTooltip = () => {
        this.detach()
        this.closeNotifier()
    }

    create() {
        const tooltipElement = document.createElement('div')
        tooltipElement.className = 'card'
        const tooltipTemplate = document.getElementById('tooltip')
        const tooltipBody = document.importNode(tooltipTemplate.content, true)
        tooltipBody.querySelector('p').textContent = this.text
        tooltipElement.append(tooltipBody)

        const hostElementPosLeft = this.hostElement.offsetLeft
        const hostElementPosTop = this.hostElement.offsetTop
        const hostElementHeight = this.hostElement.clientHeight
        const parentElementScrolling = this.hostElement.parentElement.scrollTop

        const x = hostElementPosLeft + 20
        const y = hostElementPosTop + hostElementHeight - parentElementScrolling - 10

        tooltipElement.style.position = 'absolute'
        tooltipElement.style.left = x + 'px'
        tooltipElement.style.top = y + 'px'

        tooltipElement.addEventListener('click', this.closeTooltip)
        this.element = tooltipElement
    }
}

class ProjectItem {
    hasActiveTooltip = false

    constructor(id, updateProjectLists, type) {
        this.id = id
        this.updateProjectLists = updateProjectLists
        this.connectMoreInfoButton()
        this.connectSwitchButton(type)
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) {
            return
        }
        const projectElement = document.getElementById(this.id)
        const tooltipText = projectElement.dataset.extraInfo
        const tooltip = new Tooltip(
            () => {
                this.hasActiveTooltip = false
            },
            tooltipText,
            this.id
        )
        tooltip.attach()
        this.hasActiveTooltip = true
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id)
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type')
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this))
    }

    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id)
        let switchButton = projectItemElement.querySelector('button:last-of-type')
        switchButton = DOMHelper.clearEventListeners(switchButton)
        switchButton.textContent = type === 'active' ? 'Finish' : 'Activate'
        switchButton.addEventListener('click', this.updateProjectLists.bind(null, this.id))
    }

    update(updateProjectListsFunction, type) {
        this.updateProjectLists = updateProjectListsFunction
        this.connectSwitchButton(type)
    }
}

class ProjectList {
    projects = []

    constructor(type) {
        this.type = type
        const items = document.querySelectorAll(`#${type}-projects li`)
        for (const item of items) {
            this.projects.push(new ProjectItem(item.id, this.switchProject.bind(this), this.type))
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction
    }

    addProject(project) {
        this.projects.push(project)
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`)
        project.update(this.switchProject.bind(this), this.type)
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex, 1)
        this.switchHandler(this.projects.find(p => p.id === projectId))
        this.projects = this.projects.filter(p => p.id !== projectId)
    }

}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active')
        const finishedProjectsList = new ProjectList('finished')
        activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList))
        finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList))
        
        const timerId = setTimeout(this.startAnalytics, 3000)
        document.getElementById('stop-analytics-button').addEventListener('click', () => {
            clearTimeout(timerId)
        })
    }

    static startAnalytics() {
        const analyticsScript = document.createElement('script')
        analyticsScript.src = 'assets/scripts/analytics.js'
        analyticsScript.defer = true
        document.head.append(analyticsScript)
    }
}

App.init()