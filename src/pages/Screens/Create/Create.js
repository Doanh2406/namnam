import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'
import { newPerson } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export default function Create() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [result, setResult] = useState("");
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [sex, setSex] = useState('male');

  const dispatch = useDispatch();
  const history = useHistory()

  const onSubmit = (data) => setResult(JSON.stringify(data));
  const handleAdd = async () => {
    // e.preventDefault()
    // const dat = {name, phone, email, address, position, sex};
    // console.log(dat)
    await dispatch(newPerson(name, phone, email, address, position, sex))
    history.goBack();
  }

  return (
    <div className="container-create grid">
      <Link to='/'>
        <div className="back">
          <IoIosArrowBack color="#333" />
          <span >Back to Home</span>
        </div>
      </Link>
      <span className="create-title">Create a new Member profile</span>
      <form className="create-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <label className="form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            // {...register("name")} 
            placeholder="Ex: Nguyen Van A"
            className="form-control" />
          <span className="form-masage"></span>
        </div>
        <div className="form-input">
          <label className="form-label">Phone :</label>
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            // {...register("Phone")} 
            placeholder="Ex: 0334772234"
            className="form-control" />
          <span className="form-masage"></span>
        </div>
        <div className="form-input">
          <label className="form-label">Email :</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            // {...register("Email")} 
            placeholder="Ex: nva@gmail.com"
            className="form-control" />
          <span className="form-masage"></span>
        </div>
        <div className="form-input">
          <label className="form-label">Address :</label>
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            // {...register("Address")} 
            placeholder="Ex: Tan Lien, Huong Hoa, Quang Tri"
            className="form-control" />
          <span className="form-masage"></span>
        </div>
        <div className="form-input">
          <label className="form-label">Position :</label>
          <input
            type="text"
            value={position}
            onChange={e => setPosition(e.target.value)}
            // {...register("Position")} 
            placeholder="Intern Developer"
            className="form-control" />
          <span className="form-masage"></span>
        </div>
        <div className="form-input">
          <label className="form-label">Sex :</label>
          <select value={sex}
            onChange={e => setSex(e.target.value)}
            // {...register("gender")}
            className="form-select">
            <option value="male">Male</option>
            <option value="female">FeMale</option>
            <option value="other">Other</option>
          </select>
          <span className="form-masage"></span>
        </div>
        <p>{result}</p>
        <button className="form-submit" onClick={() => handleAdd()} >Submit</button>
      </form>
    </div>
  );
}
