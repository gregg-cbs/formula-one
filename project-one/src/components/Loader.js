export default function Loader({className, show, loadingMessage, ...props}) {
  if (show === false) return null
  
  return (
    <div className={`bg-white/75 z-20 absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center ${className}`} {...props}>
      <span dangerouslySetInnerHTML={{__html: loadingMessage || "Loading..."}} />
    </div>
  )
}