import React, { useState } from "react";
import styles from "./CreateStorageItemForm.module.css";
import { postItems } from "../../../apis/apis";
import { ItemDto } from "../../StorageItem/StorageItem";
import { getLocalStorageUser } from "../../../functions/localStorage";
interface StorageItemProps {
  setOpen: () => void;
  setIsPosted: React.Dispatch<React.SetStateAction<boolean>>
}

const StorageItemForm = (props: StorageItemProps) => {
  const [formState, setFormState] = useState<ItemDto>({
    Id: "", // ID буде встановлений на бекенді або при відправці
    OrgId: getLocalStorageUser().orgId,
    Quantity: 0,
    Name: "",
    Details: "",
    PricePerOne: 0,
    Code: "",
    Category: "",
    Image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(formState)
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    props.setOpen();
    try {
      const newItem = { ...formState }; // або інший спосіб генерувати унікальний ID
      await postItems(newItem);
      setFormState({
        Id: "",
        OrgId: "",
        Quantity: 0,
        Name: "",
        Details: "",
        PricePerOne: 0,
        Code: "",
        Category: "",
        Image: "",
      });
      props.setIsPosted(true);
    } catch (error) {
      alert("Failed to add item");
    }
  };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(e.target.files![0]);
//     reader.onload = () => {
//         console.log(reader.result);
//     //   setFormState((prevState) => ({
//     //     ...prevState,
//     //     image: reader.result as string,
//     //   }));
//     };
//     reader.onerror = error =>{
//         console.log('Error: ', error);
//     } 
//   }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
    //   setImage(e.target.files[0]);
    const { name, value } = e.target;
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(formState)
  };

  return (
    <section className={styles.page}>
      <div className={styles.background}></div>
        <form className={styles.registration} onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="Name" value={formState.Name} onChange={handleChange} required />
            </div>
            <div>
                <label>Details:</label>
                <input type="text" name="Details" value={formState.Details} onChange={handleChange} required />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" name="Quantity" value={formState.Quantity} onChange={handleChange} required />
            </div>
            <div>
                <label>Price per One:</label>
                <input type="number" name="PricePerOne" value={formState.PricePerOne} onChange={handleChange} required />
            </div>
            <div>
                <label>Code:</label>
                <input type="text" name="Code" value={formState.Code} onChange={handleChange} required />
            </div>
            <div>
                <label>Category:</label>
                <input type="text" name="Category" value={formState.Category} onChange={handleChange} required />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" name="Image" value={formState.Image} onChange={handleImageChange} />
            </div>
            <button type="submit">Add Item</button>
        </form>
      <img className={styles.regImg} onClick={props.setOpen} src="/cross.png" />
    </section>
  );
};

export default StorageItemForm;


      /* <div>
        <label>Image URL:</label>
        <input type="text" name="image" value={formState.image} onChange={handleChange} />
      </div> */
      /* <div>
        <label>Image:</label>
        <input type="file" name="image" value={formState.image} onChange={handleChange} />
      </div> */