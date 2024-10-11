import { comments } from '../constants';


export function Comments () {

    return (
        <div>
            <h3> Comments </h3>
            { comments.length && comments.map((comment, i) => (
                <div key={i} style={{margin: '10px', padding: '10px', border: '2px solid red'}}>
                   <b> { comment.id }. </b> { comment.title }
                   <div>
                    Body: { comment.body }
                   </div>
                </div>
            ))}
        </div>
    )
}