import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

const Modal = forwardRef( function Modal({ children, label }, ref) {
    const dialog= useRef();
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return createPortal(<dialog id="modal" ref={dialog}>{children}
    <form method="dialog">
        <Button>{label}</Button>
    </form>
    </dialog>,
        document.getElementById('modal-root'));
});

export default Modal;
