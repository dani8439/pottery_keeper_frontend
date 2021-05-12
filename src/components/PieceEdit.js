import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {editPiece} from '../actions/editPiece'

const PieceEdit = ({piece}) => {

    const dispatch = useDispatch()

    const initialState = {
        collection_id: '',
        piece_name: '',
        pattern_name: '',
        quantity: '',
        image_url: ''

    }

    const [state, setState] = useState(initialState)


    useEffect(() => {
        // ? optional chaining.
        setState({
            collection_id: piece?.collection_id,
            piece_name: piece?.piece_name,
            pattern_name: piece?.pattern_name,
            quantity: piece?.quantity,
            image_url: piece?.image_url  
        })
    }, [piece]) 
    // tells react to run this code anytime the piece variable changes.


    const handleChange = (event) => {
        // console.log(event)
        event.preventDefault()
                setState({
                    ...state,
                    [event.target.name]: event.target.value 
                })
        
            }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log("I HAVE BEEN CALLED!")
        // console.log(state)
        let newPiece = {...state, id: piece.id}
        dispatch(editPiece(newPiece))

    }


    return(
            <div>
                <h1>Edit Piece</h1>
                <form onSubmit={handleSubmit}>
                <label>Piece Name:</label>
                    <input type="text" placeholder="Piece Name" name="piece_name" defaultValue={piece?.piece_name} onChange={handleChange}/><br></br>
                    <br></br>
                    <label>Pattern Name:</label>
                    <input type="text" placeholder="Pattern Name" name="pattern_name" defaultValue={piece?.pattern_name} onChange={handleChange}/><br></br>
                    <br></br>
                    <label>Image:</label>
                    <input type="text" placeholder="Image Url" name="image_url" defaultValue={piece?.image_url} onChange={handleChange}/><br></br>
                    <br></br>
                    <label>Quantity:</label>
                    <input type="text" placeholder="Quantity" name="quantity" defaultValue={piece?.quantity} onChange={handleChange}/><br></br>
                    <br></br>
                    <input type="submit"></input>

                </form>
            </div>
    )

}

export default PieceEdit;

// class PieceEdit extends React.Component {

//     state = {
//         collection_id: '',
//         piece_name: '',
//         pattern_name: '',
//         quantity: '',
//         image_url: ''
//     }


//     componentDidMount() {
//         this.setState({
//             collection_id: this.props.piece?.collection_id,
//             piece_name: this.props.piece?.piece_name,
//             pattern_name: this.props.piece?.pattern_name,
//             quantity: this.props.piece?.quantity,
//             image_url: this.props.piece?.image_url

//         })
//         console.log("COMPONENT DID MOUNT?")
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value 
//         })

//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         let piece = {...this.state, id: this.props.piece.id}
//         console.log(this.state)
//         console.log(piece)
//         console.log(this.props.piece)
//         this.props.editPiece(piece)
    
//         // this.setState({
//         //     piece_name: '',
//         //     pattern_name: '',
//         //     quantity: '',
//         //     image_url: ''
//         // })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Edit Piece</h1>
//                 <form onSubmit={this.handleSubmit}>
//                 <label>Piece Name:</label>
//                     <input type="text" placeholder="Piece Name" name="piece_name" defaultValue={this.props.piece?.piece_name} onChange={this.handleChange}/><br></br>
//                     <br></br>
//                     <label>Pattern Name:</label>
//                     <input type="text" placeholder="Pattern Name" name="pattern_name" defaultValue={this.props.piece?.pattern_name} onChange={this.handleChange}/><br></br>
//                     <br></br>
//                     <label>Image:</label>
//                     <input type="text" placeholder="Image Url" name="image_url" defaultValue={this.props.piece?.image_url} onChange={this.handleChange}/><br></br>
//                     <br></br>
//                     <label>Quantity:</label>
//                     <input type="text" placeholder="Quantity" name="quantity" defaultValue={this.props.piece?.quantity} onChange={this.handleChange}/><br></br>
//                     <br></br>
//                     <input type="submit"></input>

//                 </form>
//             </div>

//         )
//     }
// }

// export default connect(null, {editPiece})(PieceEdit);