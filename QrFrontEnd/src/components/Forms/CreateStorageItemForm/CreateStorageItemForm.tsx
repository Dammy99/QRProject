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
    Id: "", // ID буде встановлений при відправці
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
      const newItem = { ...formState };
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files![0]);
    reader.onload = () => {

      console.log(e.target);
      setFormState((prevState) => ({
        ...prevState,
        image: reader.result as string,
      }));

    };
    reader.onerror = error =>{
        console.log('Error: ', error);
    } 
  }

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
                <input type="file" style={{color:"transparent"}} name="Image" value={formState.Image} onChange={handleImageChange} />
                {formState.image && <div>Зображення вибране</div>}
            </div>
            <button type="submit">Add Item</button>
        </form>
      <img className={styles.regImg} onClick={props.setOpen} src="/cross.png" />
    </section>
  );
};

export default StorageItemForm;
