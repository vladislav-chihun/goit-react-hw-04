import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, largeImg }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div >
        <img src={largeImg} className={css.largeImg} />
      </div>
    </Modal>
  );
}
