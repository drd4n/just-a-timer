import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        const { count } = this.state
        return (
            <div>

                <p>Time Count = {count}</p>
                {/* <input type="number" id='tnum'></input>
                <button type="button" onclick=''>Snap!</button> */}
            </div>

        )
    }

    componentDidMount() {
        const {time} = this.props
        this.setState({
            count: time
        })
        this.doIntervalChange()

    }

    doIntervalChange =()=>{
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({

                count: prevState.count - 1
            }))
        }, 1000)
    }



    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default Timer;