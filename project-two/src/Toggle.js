import "./styles/toggle.scss";

export default function Toggle({label, checked, onChange}) {
  return (
    <label className="switch">
      <span className="switch-label">{label}</span>
      <input type="checkbox" checked={checked} onChange={(e)=> onChange(e.target.checked)} />
      <span className="slider round"></span>
    </label>
  )
}