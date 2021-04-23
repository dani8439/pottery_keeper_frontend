import React from 'react';
import CollectionInput from '../components/CollectionInput'
import Collections from '../components/Collections'

class CollectionsContainer extends React.Component {


    render() {
        return (
            <div>
                CollectionsContainer
                < CollectionInput/>
                < Collections />
            </div>
        )
    }
}

export default CollectionsContainer