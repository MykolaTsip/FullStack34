


export default function Cont (props) {

    const data = 'dd dsdgf dfg df';

    console.log(props);
    return (
        <div>
            { props.title }
            <hr/>
            { props.htm }
            { props.children }
        </div>
    )
}