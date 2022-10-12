import { eventBusService } from '../services/event-bus.service.js'


export class UserMsg extends React.Component {

    removeEvent

    state = {
        msg: null
    }

    componentDidMount() {
        this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
            this.setState({ msg })
            setTimeout(() => {
                this.setState({ msg: null })
            }, 3000)
        })
    }

    componentWillUnmount() {
        this.removeEvent()
    }

    render() {
        const { msg } = this.state
        if (!msg) return <span></span>
        const msgClass = msg.type || ''
        return (
            <section className={'user-msg ' + msgClass}>
                {this.state.msg.txt}
                <button onClick={() => { this.setState({ msg: null }) }}>
                    Dismiss
                </button>
            </section>
        )
    }
}
