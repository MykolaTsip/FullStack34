import { Component } from "react";

import { Photo } from './components/Photo';

import { photoItems } from './constants';

class Content extends Component {

    state = {
        photoList: photoItems.map(photoItem => ({...photoItem, isShow: true}))
    }


    togglePhotoItem = (id) => {
        const newStateOfPhotos = this.state.photoList.map((el) => {
            if (el.id === id) {
                return ({
                    ...el,
                    isShow: !el.isShow
                })
            }

            return el;
        })

        this.setState({photoList: newStateOfPhotos});
    }


    render() {

        const { photoList } = this.state;

        return (
            <div>
                {
                    photoList.map((photoEl, i) => (
                        <div key={i}>
                            <button onClick={() => this.togglePhotoItem(photoEl.id)}>
                                { photoEl.isShow ? 'Hide' : 'Show' } details from photo { photoEl.id}
                            </button>
                            {  photoEl.isShow && <Photo photoEl={photoEl} /> }
                        </div>
                    ))
                }

            </div>
        )
    }
}


export default Content