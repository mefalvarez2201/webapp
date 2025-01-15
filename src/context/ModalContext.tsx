"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import Modal from "@/components/common/Modal";

interface ModalContextType {
  openModal: (
    content: React.ReactNode,
    autoClose: boolean,
    delay: number,
    title?: string
  ) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

  const openModal = (
    content: ReactNode,
    autoClose: boolean = false,
    delay: number = 3000,
    title?: string
  ) => {
    setModalContent(content);
    setModalTitle(title);
    setIsOpen(true);

    if (autoClose) {
      setTimeout(() => {
        closeModal();
      }, delay);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setModalTitle(undefined);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
