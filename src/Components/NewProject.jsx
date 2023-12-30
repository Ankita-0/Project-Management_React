import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredDescription.trim() === '' || enteredDueDate.trim() === '' || enteredTitle.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    return <>
        <Modal ref={modal} label="Okay">
        <h2>Invalid Inputs</h2>
        <p>Oops... looks like you forgot to enter a value!</p>
        <p>Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="NewProject">
            <menu>
                <li>
                    <Button>Cancel</Button>
                </li>
                <li>
                    <Button onClick={handleSave}>Save</Button>
                </li>
            </menu>
            <div>
                <Input type='text' ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type='date' ref={dueDate} label="Due Data" />
            </div>
        </div>
    </>
}