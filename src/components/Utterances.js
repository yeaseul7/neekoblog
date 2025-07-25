import React from "react"

class Utterances extends React.Component {
  constructor(props) {
    super(props)

    this.commentsEl = React.createRef()
    this.state = { status: "pending" }
  }

  componentDidMount() {
    if (typeof window === "undefined" || !window.document) {
      return
    }

    const existingScript = this.commentsEl.current?.querySelector(
      'script[src="https://utteranc.es/client.js"]'
    )
    if (existingScript) {
      this.setState({ status: "success" })
      return
    }

    const scriptEl = document.createElement("script")
    scriptEl.onload = () => this.setState({ status: "success" })
    scriptEl.onerror = () => this.setState({ status: "failed" })
    scriptEl.async = true
    scriptEl.src = "https://utteranc.es/client.js"
    scriptEl.setAttribute("repo", "yeaseul7/neekoblog")
    scriptEl.setAttribute("issue-term", "pathname")
    scriptEl.setAttribute("theme", "github-dark")
    scriptEl.setAttribute("crossorigin", "anonymous")
    this.commentsEl.current.appendChild(scriptEl)

    // Only log pathname in browser environment
    setTimeout(() => {
      if (typeof window !== "undefined") {
        console.log("Current pathname:", window.location.pathname)
      }
    }, 500)
  }

  render() {
    const { status } = this.state

    return (
      <div className="comments-wrapper">
        {status === "failed" && <div>Error. Please try again.</div>}
        {status === "pending" && <div>Loading script...</div>}
        <div ref={this.commentsEl} />
      </div>
    )
  }
}

export default Utterances
