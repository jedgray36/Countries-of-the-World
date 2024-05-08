import React, { useCallback, useEffect, useRef, useState } from "react";
import CountriesList from "./CountriesList";
import "./Styles/sidebar.css";
import { Country } from "./Interfaces/Countries";
import { Button, Modal } from "react-bootstrap";

interface TableModalProps {
countries: Country[] | undefined;
toggle: boolean;
onClose: () => void;
}


const TableModal: React.FC<TableModalProps> = ({ countries, toggle, onClose}) => {
  return (
        <>
    <div className="font-sans">
    <Modal isOpen={toggle} onClose={onClose}>
      <Modal.Header className="font-bold">Hello!</Modal.Header>
      <Modal.Body>
        Press ESC key or click the button below to close
      </Modal.Body>
      <Modal.Footer>
        <form method="dialog">
          <Button>Close</Button>
        </form>
      </Modal.Footer>
    </Modal>
  </div>
 </>
      );
    }
    
    export default TableModal;