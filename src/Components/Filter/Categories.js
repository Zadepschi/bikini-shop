import Filter from "./Filter";

const Categories = () => {
    return(<div className="category">
        {['All', 'swimsuit', 'bikini', 'dress', 'hat'].map((category,index) =>
          <Filter category={category} key={index} />  ) }
        
    </div>)
}
export default Categories;