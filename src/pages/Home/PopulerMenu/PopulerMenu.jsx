
import SecctionTitle from '../../../componetes/SecctionTitle/SecctionTitle';
import useMenu from '../../../hook/UseMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopulerMenu = () => {
    const [menu, loading] = useMenu();
    const populerCategory = 'populer';
    const populer = menu.filter(item => item.category === populerCategory);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="mb-10">
           <SecctionTitle  heading="from our menu"
            Setheading="popular menu"></SecctionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {populer.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default PopulerMenu;
