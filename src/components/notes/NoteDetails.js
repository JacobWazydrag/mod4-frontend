import React from 'react'

const NoteDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section note-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Note Title - {id}</span>
                    <p>Note Description</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by this USER</div>
                    <div>Posted 09/7/2020</div>
                </div>
            </div>
        </div>
    )
}

export default NoteDetails
