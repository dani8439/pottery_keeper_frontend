import React from 'react';

class CollectionInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label>Collection Name:</label>
                    <input type="text" placeholder="Name"/><br></br>
                    <br></br>
                    <label>Main Image:</label>
                    <input type="text" placeholder="Main Image"/>
                </form>
            </div>
        )
    }

}

export default CollectionInput