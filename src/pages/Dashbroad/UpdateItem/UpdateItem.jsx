import { useLoaderData } from 'react-router-dom';
import SecctionTitle from '../../../componetes/SecctionTitle/SecctionTitle';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import useAxiosSecure from '../../../hook/useAxiosSeceure';
import Swal from 'sweetalert2';

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST}`;
const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('image', data.image[0]);
            const res = await axiosPublic.post(image_hosting_api, formData);
            console.log('Image Upload Response:', res.data);

            const imageUrl = res.data.data.url;

            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: imageUrl
            };

            console.log("Form Data to Submit:", menuItem);

            // Verify the final endpoint URL
            const endpoint = `/menu/${_id}`;
            console.log('Endpoint URL:', endpoint);

            const menuRes = await axiosSecure.patch(endpoint, menuItem);
            console.log('Menu Update Response:', menuRes.data);

            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successful update',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error uploading image or updating menu:", error);
        }
    };

    return (
        <div>
            <SecctionTitle heading={'Update Data'} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-stone-200 md:ms-5 p-5 m-5">
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe Name"
                            {...register("name", { required: true })}
                            className="input"
                        />
                    </div>
                    <div className="md:flex justify-between gap-5 mb-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select
                                className="select bg-white w-full"
                                defaultValue={category}
                                {...register("category", { required: true })}
                            >
                                <option>pizza</option>
                                <option>Soup</option>
                                <option>Desserts</option>
                                <option>salad</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea
                            defaultValue={recipe}
                            className="textarea textarea-bordered h-24"
                            {...register("recipe", { required: true })}
                            placeholder="Recipe Details"
                        ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Add Image</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                        />
                    </div>
                    <input
                        type="submit"
                        className="btn btn-outline btn-sm mt-5 bg-slate-100 border-orange-400 text-orange-400 hover:bg-orange-400"
                        value={`UPDATE ITEM`}
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;
