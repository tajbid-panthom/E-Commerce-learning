import { useEffect, useState } from "react";
interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}
const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const authorsData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isfollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorsData);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchData();
  });

  const handleFollowClick = (index: number) => {
    setAuthors((prevAuthor) =>
      prevAuthor?.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div className="p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
      <h2 className="text-xl font-bold mb-5">Top Sellers</h2>
      <ul>
        {authors?.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex justify-center items-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-[25%] h-[25%] justify-center rounded-full"
              />
              <span className="ml-4">{author.name}</span>
            </section>
            <button
              onClick={() => {
                handleFollowClick(index);
              }}
              className={`py-4 px-3 ${
                author.isFollowing ? "bg-gray-200" : "bg-blue-500 text-white"
              } rounded cursor-pointer`}
            >
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
