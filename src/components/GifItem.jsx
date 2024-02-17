

export const GifItem = ({imagen, id, url, title}) => {
  return (
    <div className="card">
        {/* {console.log(url)} */}
        <img src={url} alt="" />
        <p>{title}</p>
    </div>
  )
}
