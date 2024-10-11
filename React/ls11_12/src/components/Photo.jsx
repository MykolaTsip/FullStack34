import { Component, PureComponent } from "react";


export class Photo extends PureComponent {

    state = {
        count: 0
    }

    clearMyInt

    // Mounting
    constructor({photoEl}) {
        super();
        this.photo = photoEl;


        console.log('constructor');

        this.clearMyInt = setInterval(() => { 
            // this.forceUpdate();
            console.log('setInterval');}, 1000)
    }


    // Mounting and Updating
    static getDerivedStateFromProps(data, state) {
        console.log('getDerivedStateFromProps', data, state);
    }


    // Updating
    // shouldComponentUpdate(props, state) {
    //     console.log('shouldComponentUpdate', props, state);

    //     return state.count < 5
    // }


    // Mounting and Updating
    render() {
        console.log('render');
        const { id, title, url } = this.photo;

        return (
            <div style={{padding: '10px', margin: '15px', border: '2px solid red'}}>
                <h3> Photo ID is: { id } </h3>
                <p> Title: { title } </p>
                <b> It's url of IMAGE: { url } </b>
                <hr />
                <img height={'100px'} src={url} alt="" />
                <hr />
                <hr />
                <hr />

                <div>
                    <hr />
                    <button onClick={() => this.setState({count: this.state.count+1})}> +++ </button>
                    <span> { this.state.count } </span>
                    <button onClick={() => this.setState({count: this.state.count-1})}  > --- </button>
                    <hr />
                </div>
            </div>
        )
    }


    // Updating
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
    }

    // Mounting
    componentDidMount() {
        console.log('componentDidMount');
    }

    // Updating
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }


    // Unmounting
    componentWillUnmount() {
        console.log('componentWillUnmount');

        clearInterval(this.clearMyInt);
    }
}