import React, { useEffect, useState, useCallback } from "react";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import "./list.css";

const List = () => {
  const [userWithImages, setUserWithImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async (page) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://randomuser.me/api/?results=10&page=${page}`
      );
      const data = await res?.json();
      const users = data?.results;

      const imageUrls = users?.map(
        (_, index) => `https://robohash.org/${page}-${index}`
      );

      const newUsersWithImages = users?.map((user, index) => ({
        ...user,
        imageUrl: imageUrls[index],
      }));

      setUserWithImages((prevUsers) => [...prevUsers, ...newUsersWithImages]);
    } catch (error) {
      console.error("Error fetching users: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  const filteredUsers = userWithImages.filter(
    (user) =>
      (user?.name?.first + " " + user?.name?.last)
        .toLowerCase()
        .includes(searchTerm?.toLowerCase()) ||
      user?.email?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="container">
      <input
        className="search-field"
        type="text"
        placeholder="Search Robo Here"
        onChange={handleSearch}
        value={searchTerm || ""}
      />
      <div className="card-container">
        <Card datas={filteredUsers || []} />
        {(!filteredUsers?.length && searchTerm) || !userWithImages?.length ? (
          <>No Robots Found</>
        ) : (
          <></>
        )}

        {loading && <Loader />}
      </div>
    </div>
  );
};

export default List;
