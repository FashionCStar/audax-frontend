import React, { useState } from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function ToastComponent(props) {
  const [show, setShow] = useState(false);

  return (
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <ToastHeader>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded mr-2"
          alt=""
        />
        <strong className="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </ToastHeader>
      <ToastBody>Woohoo, you're reading this text in a Toast!</ToastBody>
    </Toast>
  )
}