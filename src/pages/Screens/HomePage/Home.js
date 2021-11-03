import React, { useState, useEffect } from "react";

import { Route, Router, Switch } from "react-router";
import { Link } from "react-router-dom";
import { deletePerson, getPerson } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const member = useSelector((state) => state.member);
  const { persons } = member;
  console.log(persons);
  const [members, setMembers] = useState(() => {
    const per = JSON.parse(localStorage.getItem("member"));
    console.log(per);
    return per;
  });
  console.log(member)
  useEffect(() => {
    console.log("EF run");
    if (persons && persons.length !== 0) {
      console.log("run i");
      setMembers(persons);
    }
  }, [persons]);
  const [edit, setEdit] = useState(false);

  const handleDelete = (index) => {
    dispatch(deletePerson(index));
    console.log(index)
  };
  const handleEdit = async (index) => {
    setEdit(index);
  };

  return (
    <div className="home-container">
      <div className="grid">
        <div className="home-nav">
          <span>List Member</span>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <button className="home-nav__buttom">Add Member</button>
          </Link>
        </div>
        <div className="home-table">
          <table className="table-header">
            <tr>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>address</th>
              <th>position</th>
              <th>sex</th>
              <th>Action</th>
            </tr>
            {members &&
              members.length > 0 &&
              members.map((item, index) => (
                <tr key={index}>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>{item.phone}</p>
                  </td>
                  <td>
                    <p>{item.email}</p>
                  </td>
                  <td>
                    <p>{item.address}</p>
                  </td>
                  <td>
                    <p>{item.position}</p>
                  </td>
                  <td>
                    <p>{item.sex}</p>
                  </td>
                  <td>
                    <Link to="/create" style={{ textDecoration: "none" }}>
                      <button
                        className="list-button__edit"
                        onClick={() => handleEdit(index)}
                      >
                        EDIT
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(index)}
                      className="list-button__delete"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}
