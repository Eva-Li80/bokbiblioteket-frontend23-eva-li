type openModalType = (isOpen: boolean) => void;

export const openModal = (setModalOpen: openModalType, timeout: number= 3000) => {
    setModalOpen(true)
 setTimeout(() => {
    setModalOpen(false);
 }, timeout)
}


