


export default function MyEvents () {


    function workOnClick () {
        console.log('workOnClick');
    }


    function workOnClick () {
        console.log('workOnClick');
    }


    function workOnMouseD () {
        console.log('workOnMouseD DOWN');
    }

    function workOnMouseU () {
        console.log('workOnMouseU UP');
    }

    function workOnCopy (e) {
        console.log('onCopy', e);

        e.preventDefault();
    }

    function workOnCut (anyyy, eve) {
        console.log('workOnCut', anyyy, eve);
    }


    function onKeyDownFFF (e) {
        console.log('onKeyDown', e.key);
    }


    const onInput = (even) => {
        console.log(even, 'onInput', even.target.value);
    }


    return (
        <div>
            <hr/>
            <hr/>

            <h1>
                Hello world
            </h1>

            <hr/>

            <div
                onClick={workOnClick}
                onMouseDown={workOnMouseD}
                onMouseUp={workOnMouseU}
                onCopy={workOnCopy}
                // onCut={workOnCut()}
                onCut={($event) => workOnCut('Hello WOLRDDD', $event)}
                onPaste={() => { console.log('onPaste');  }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur, perferendis ab 
                sunt nulla totam blanditiis ea officiis? Quasi doloribus maiores esse unde sit ipsum dolores 
                modi aliquid atque recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur, perferendis ab 
                sunt nulla totam blanditiis ea officiis? Quasi doloribus maiores esse unde sit ipsum dolores 
                modi aliquid atque recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur, perferendis ab 
                sunt nulla totam blanditiis ea officiis? Quasi doloribus maiores esse unde sit ipsum dolores 
                modi aliquid atque recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur, perferendis ab 
                sunt nulla totam blanditiis ea officiis? Quasi doloribus maiores esse unde sit ipsum dolores 
                modi aliquid atque recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur, perferendis ab 
                sunt nulla totam blanditiis ea officiis? Quasi doloribus maiores esse unde sit ipsum dolores 
                modi aliquid atque recusandae.
            </div>

            <hr/>

            <input onKeyDown={onKeyDownFFF} onInput={onInput}/>

            <hr/>
            <hr/>
        </div>
    )
}