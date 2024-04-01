import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="foto.jpg" width="400" alt="animals" />
      </Modal>
      <button>Modal 2</button>
      {/*  <Modal>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime
          voluptatibus recusandae vitae distinctio illum iure veritatis tempora
          porro nobis, vero molestias provident dolores, sint mollitia quod
          necessitatibus. Natus, nam.
        </p>
        <img src="logo192.png" width="400" alt="animals" />
      </Modal> */}
    </div>
  );
};

export default Modals;
