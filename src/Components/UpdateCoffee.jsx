import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const UpdatedCoffee = {
          name,
          quantity,
          supplier,
          test,
          category,
          details,
          photo,
        };
        console.log(UpdatedCoffee);
    
        //send data to server
    
        fetch(`http://localhost:5050/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(UpdatedCoffee),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Success',
                })
            }
        });
    };

    return (
        <div className="bg-[#F4F3F0] p-24">
    <h2 className="text-3xl font-extrabold text-center">Update Coffee: {name}</h2>
    <form onSubmit={handleUpdateCoffee}>
        {/* form row name and quantity row */}
        <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
            <label className="label">
            <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
            <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                defaultValue={name}
                className="input input-bordered w-full"
            />
            </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
            <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
            <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                defaultValue={quantity}
                className="input input-bordered w-full"
            />
            </label>
        </div>
        </div>
        {/* suplier test row */}
        <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
            <label className="label">
            <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
            <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
            />
            </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
            <span className="label-text">Test</span>
            </label>
            <label className="input-group">
            <input
                type="text"
                name="test"
                placeholder="Test"
                defaultValue={test}
                className="input input-bordered w-full"
            />
            </label>
        </div>
        </div>
        {/* category details row  */}
        <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
            <label className="label">
            <span className="label-text">Category</span>
            </label>
            <label className="input-group">
            <input
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={category}
                className="input input-bordered w-full"
            />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* photo url row */}
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-neutral-900 text-white"
        />
      </form>
    </div>
    );
};

export default UpdateCoffee;