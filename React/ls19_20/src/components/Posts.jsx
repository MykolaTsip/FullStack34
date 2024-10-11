import { posts } from '../constants';


export function Posts () {

    return (
        <div>
             <h3> Posts </h3>
            { posts.length && posts.map((post, i) => (
                <div key={i} style={{margin: '10px', padding: '10px', border: '2px solid red'}}>
                   <b> { post.id }. </b> { post.title }
                   <div>
                    Body: { post.body }
                   </div>
                </div>
            ))}
        </div>
    )
}