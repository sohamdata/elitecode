import { useState } from 'react';
import { firestore } from '@/firebase/firebase';
import { doc, setDoc } from "firebase/firestore";
import toast from 'react-hot-toast';

interface Temp { };

const AddProblem = (props: Temp) => {
    const [data, setData] = useState({
        id: "",
        title: "",
        difficulty: "",
        category: "",
        order: 0,
        likes: 0,
        dislikes: 0,
        videoId: "",
        link: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data_ = {
            ...data,
            order: Number(data.order),
        }
        const docRef = doc(firestore, "problems", data.id);
        await setDoc(docRef, data_);
        for (let key in data_) {
            setData({
                ...data,
                [key]: "",
            })
        }
        toast.success("saved to db");
    };

    return (
        <form className="mt-10 p-5 flex flex-col space-y-5 bg-teal-900 max-w-md" onSubmit={handleSubmit}>
            <input type="text" placeholder="problem id" name="id" onChange={handleChange} />
            <input type="text" placeholder="title" name="title" onChange={handleChange} />
            <input type="text" placeholder="difficulty" name="difficulty" onChange={handleChange} />
            <input type="text" placeholder="category" name="category" onChange={handleChange} />
            <input type="text" placeholder="order" name="order" onChange={handleChange} />
            <input type="text" placeholder="videoId?" name="videoId" onChange={handleChange} />
            <input type="text" placeholder="link?" name="link" onChange={handleChange} />
            <button className="bg-slate-500 text-green-300" type="submit">submit</button>
            <button className=" bg-red-500" type="reset">reset</button>
        </form>
    )
};

export default AddProblem;
