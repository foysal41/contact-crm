"use client";

import { Modal, Button } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";

export default function DeleteModal() {
  return (
    <Modal>
      <Modal.Trigger>
        <button className="text-red-500 hover:text-red-700">
          <TrashBin className="size-4" />
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Delete Contact?</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p>
                Are you sure you want to delete this contact?
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button color="danger" slot="close">
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}