import { posts } from '../constants';


import { Fragment } from 'react';


export function Posts () {

    return (
        <Fragment>
             <h3> Posts </h3>
            { posts.length && posts.map((post, i) => (
                <div key={i} style={{margin: '10px', padding: '10px', border: '2px solid red'}}>
                   <b> { post.id }. </b> { post.title }
                   <div>
                    Body: { post.body }
                   </div>
                </div>
            ))}
        </Fragment>
    )
}