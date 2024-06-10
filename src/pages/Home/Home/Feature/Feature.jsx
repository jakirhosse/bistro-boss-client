
import SecctionTitle from '../../../../componetes/SecctionTitle/SecctionTitle';
import feturedimg from '../../../../assets/assets/home/featured.jpg'
import featured from '../../../../assets/assets/home/featured.jpg'
import './Feature.css'
const Feature = () => {
        return (
                <section>
            <div className="hero bg-fixed mt-20 my-8" style={{backgroundImage: `url(${featured} )`}}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div>
                <div className='text-white'>
                <SecctionTitle
          heading="check it out" Setheading="Fetureds item"
         ></SecctionTitle> 
     </div>
    <div className='md:flex py-10 px-20 gap-8 '>
    <div>
    <img className='sm:mb-10' src={feturedimg} alt="" />          
    </div>
      <div>
        <p className='text-yellow-400'>March 20 ,2023</p>   
            <p className='uppercase italic text-white text-lg'>where can i get some??</p>  
          <p className='text-white italic text-lg'>Consectetur, adipisicing elit. Dolorem fugit explicabo voluptatem facere consequatur voluptas similique placeat aspernatur provident id ex, quae facilis quod totam. Fuga vel, porro cumque esse, quidem nemo corrupti fugiat illo ipsam atque aspernatur laboriosam eos sit commodi nobis amet laudantium facilis, id maiores consequatur necessitatibus!</p> 
           <button className="btn btn-neutral text-orange-300 mt-2">ORDER NOW </button>                
        </div>
    </div>
  </div>
</div>
  </section>
  );
};
export default Feature;

