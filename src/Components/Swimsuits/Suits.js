
const Suits = ({image, id, name, price, size} ) => {
    console.log()
    return(<div>
<p>{id} </p>
<img src={`${image}.jpg `} width="250px" height="400px" alt="Swimsuit" />
<p>{name} </p>
<ul>
    {size.map((item, index) => (
        <li key={index}>{item} </li>
    ))}
</ul>
<p>{price} </p>
    </div>)
}
export default Suits;