import { handleHideModal } from "./handleHideModal"

interface IHandleDetailsClickProps {
  cardRef: React.MutableRefObject<any[]>;
  detaislRef: React.RefObject<HTMLDivElement>;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
}

export const handleDetailsClick = ({cardRef, detaislRef, setShowModal}:IHandleDetailsClickProps) => {
  if(cardRef.current.some(card => card.classList[2])){
    handleHideModal({detaislRef,cardRef ,setShowModal})
  }
}