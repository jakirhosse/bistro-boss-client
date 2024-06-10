import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
const Menucategory = ({items,title,img}) => {
        return (
                <div className="pt-6">
                        {title && <Cover img={img} title={title} />}
                     <div className="grid md:grid-cols-2 gap-6 mt-12 ">
                        {
                               items.map(item => <MenuItem key={item._id}
                                item={item}></MenuItem> )
                        }
                      </div>   
                      <Link to={`/order/${title}`}><button className="btn btn-outline  mt-4 mx-4 ">view menu</button></Link>
                </div>
        );
};
export default Menucategory;