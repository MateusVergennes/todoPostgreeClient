import React, {Fragment, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const EditTodo = ({todo}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Fragment>
            <Button variant="btn btn-warning" onClick={handleShow}>
            Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' className='form-control'></input>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="btn btn-warning" onClick={handleClose}>
                        Edit
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default EditTodo