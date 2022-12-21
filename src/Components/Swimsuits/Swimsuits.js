import { dataBikini } from "../../data/dataBikini";
import Suits from "./Suits";


const Swimsuits = () => {
    return(<div className="card">
       {dataBikini.map((suits,index) => 
        <Suits key={index}
         name={suits.name} 
          id={suits.id}
          image={suits.image}
          searchTerm={suits.searchTerm}
         size={suits.size}
         price={suits.price}
         
          />
       )}
    </div>)
}
export default Swimsuits;