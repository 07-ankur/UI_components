import './Button1.css'

export default function Button1_btn({label,functionHandler}) {
  return (
    <button onClick={functionHandler} className="button-1">
      {label}
    </button>
  )
}