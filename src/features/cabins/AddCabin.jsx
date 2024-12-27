import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => (
  <div>
    <Modal>
      <Modal.Open modalName="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window connectedModalWindowName="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  </div>
);

export default AddCabin;
