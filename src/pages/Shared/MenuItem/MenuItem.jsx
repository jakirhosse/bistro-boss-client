
const MenuItem = ({item}) => {
        const {price,image,name,recipe} = item;
        return (
                <div>
                     <img style={{borderRadius:'0 200px 200px 200px '}} className="w-[100px]" src={image} alt="" />  
                     <div>
                        <h2 className="uppercase">name:{name}</h2>
                        <p>price:${price}</p>
                        </div> 
                        <p className="text-yellow-500">recipe:{recipe}</p>
                </div>
        );
};

export default MenuItem;