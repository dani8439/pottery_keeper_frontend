import React from 'react';
import PieceEdit from './PieceEdit';

class Piece extends React.Component {
    render() {
        return (
            <div>
                <PieceEdit piece={this.props.piece} />
            </div>
        )
    }
}

export default Piece

// import React from 'react';
// import PieceEdit from './PieceEdit';

// const Piece = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <PieceEdit piece={props.piece}/>
//         </div>
//     )
// }

// export default Piece