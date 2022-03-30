function Modal({currentPhoto}) {
    const {name, category, description, index} = currentPhoto;
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    {isModalOpen && <Modal currentPhoto={currentPhoto} />}
    

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(true);
      }
    
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
          <p>{description}</p>
          <button type="button">
            Close this modal
          </button>
        </div>
      </div>
    );
  }
  
  export default Modal;