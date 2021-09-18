interface IHandleHideModalProps {
  detaislRef: React.RefObject<HTMLDivElement>;
  cardRef: React.MutableRefObject<any[]>;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
}

export const handleHideModal = ({detaislRef,cardRef ,setShowModal}:IHandleHideModalProps) => {
  detaislRef?.current?.classList.add('hide-details')
  setTimeout(() => {
    detaislRef?.current?.classList.remove('hide-details')
    setShowModal(prevState => (!prevState))
  },2400)

  cardRef.current.map(card => card.classList.remove('current-card'))
}