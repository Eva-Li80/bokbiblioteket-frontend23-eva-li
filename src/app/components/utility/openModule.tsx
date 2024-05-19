type openModalType = (isOpen: boolean) => void;

const openModal = (setModalOpen: openModalType, timeout: number= 3000) => {
    setModalOpen(true)
 setTimeout(() => {
    setModalOpen(false);
 }, timeout)
}

export default openModal
