import React from "react";
import { Banner } from "../components/Banner";
import { MovieTray } from "../components/MovieTray";
import { useSelector } from "react-redux";

export const Homepage = () => {
  const wishlistData = useSelector((state) => state.wishlist.data);

  const movieData = [
    {
      id: "movie1",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie2",
      title: "10 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie3",
      title: "11 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie4",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie5",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie6",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie7",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie8",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie9",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie10",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie11",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie12",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie13",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie14",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie15",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
    {
      id: "movie16",
      title: "9 Hours",
      subtitle: "Drama, Thriller, Hotstar Specials",
      description:
        "In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove",
    },
  ];

  return (
    <div className="homepage">
      <Banner />
      {wishlistData.length > 0 && (
        <MovieTray
          heading="Wishlist"
          isCarousel={false}
          type="wishlist"
          movieData={wishlistData}
        />
      )}
      <MovieTray
        heading="Latest & Trending"
        isCarousel={true}
        movieData={movieData}
      />
      <MovieTray
        heading="Popular Shows"
        isCarousel={true}
        movieData={movieData}
      />
    </div>
  );
};
