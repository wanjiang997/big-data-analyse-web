import React, {Component} from 'react'
import {is, fromJS} from 'immutable'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'sql'
        }
    }
    componentWillMount(){
        // 组件初始化是调用，更新不调用，整个生命周期只调用一次，可修改state
        this.setState({
            name: '变化1'
        })
    }
    componentDidMount(){
        // 组件渲染之后调用，只调用一次
        console.log('componentDidMount')
    }
    componentWillReceiveProps(nextProps) {
        // 组件初始化时不调用，组件接收到新的props时调用
    }
    componentWillUpdate(nextProps, nextStates) {
        // 组件初始化时不调用，只有组件将要更新时才调用，此时可以修改state
    }
    componentDidUpdate(){
        // 组件初始化时不调用，组件更新完后调用，此时可以修改dom节点
    }
    componentWillUnmount() {
        // 组件将要卸载时调用，一些事件监听和定时器需要需要在此时清除
    }
    shouldComponentUpdate(nextProps, nextStates) {
        // 组件判断是否需要重新渲染时调用
        return !is(fromJS(this.props), fromJS(nextProps)) || is(fromJS(this.state), fromJS(nextStates))
    }
    deal = (val) => {
        console.log(val)
        this.setState({
            name: val
        })
    }
    render() {
        return (<div>
            <div>wanjiang {this.state.name}</div>
            <a onClick={this.deal.bind(this, 'hellow world')}>wanjiang</a>
        </div>)
    }
}
export default Home