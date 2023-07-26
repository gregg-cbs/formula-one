export default function Loader({className, show, loadingMessage, ...props}) {
  if (show === false) return null
  
  return (
    <div className={`loader ${className}`} {...props}>
      <span dangerouslySetInnerHTML={{__html: loadingMessage || "Loading..."}} />
    </div>
  )
}