import { useModal } from "../hooks/useModal";
import ContactForm from './ContactForm';
import Modal from "./Modal";
import SongSearch from './SongSearch';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="foto.jpg" width="400" alt="animals" />
      </Modal >
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime
          voluptatibus recusandae vitae distinctio illum iure veritatis tempora
          porro nobis, vero molestias provident dolores, sint mollitia quod
          necessitatibus. Natus, nam.
        </p>
        <img src="foto.jpg" width="400" alt="animals" />
      </Modal>

      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal >

      <button onClick={openModalSong}>Modal Canciones</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal >
    </div>
  );
};

export default Modals;
