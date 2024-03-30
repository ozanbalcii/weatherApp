const SubmitButton = ({type, className, onClick, text, submit }) => {
    return (
      <button
        className={className}
        type={type}
        onClick={onClick}
        text={text}
        submit={submit}
      >
       {text}
      </button>
    )
  }
  
  export default SubmitButton