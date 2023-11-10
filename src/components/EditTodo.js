import React, {Fragment, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const EditTodo = ({todo}) => {

    const [show, setShow] = useState(false);
    const [description, setDescription] = useState(todo.description)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //edit description function
    const updateDescription = async(e) => {
        e.preventDefault()
        try{
            const body = {description}
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type":  "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/"
        }catch(err){
            console.error(err.message)
        }
    }

    
    return (
        <Fragment>
            <Button variant="btn btn-warning" onClick={() => {
                setDescription(todo.description);
                handleShow();
                }}>
            Edit
            </Button>

            <Modal show={show} onHide={
                    () => {
                        setDescription(todo.description);
                        handleClose();
                    }}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' className='form-control'  defaultValue={description} 
                        onChange={e => setDescription(e.target.value)}></input>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="btn btn-warning" onClick={e => updateDescription(e)}>
                        Edit
                    </Button>
                    <Button variant="primary" onClick={
                        () => {
                            setDescription(todo.description);
                            handleClose()
                        }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default EditTodo