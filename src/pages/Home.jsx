import React from "react";
import YtCard from "../components/YtCard";
import YtShortVideoCard from "../components/YtShortVideoCard";

function HomePage() {
  const videos = [
    {
      id: "Ge0MSjDG_g4",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      chanelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know",
      views: "4.3K",
      uploadedTime: "20 hours ago",
      chanelName: "Radhika Chopra",
    },
    {
      id: "bQNT4L9uGaU",
      thumbnail:
        "https://i.ytimg.com/vi/XRzRGNPaGt8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVXklirC8nEHYxLcmAUppieY6nng",
      chanelLogo:
        "https://yt3.ggpht.com/AclQ892JKT07_-02ZRSJQIKWtG7deb9eyMmd8_sQNyb-zGcG7gxthnzOIepf7jnTLhreWAdm=s68-c-k-c0x00ffffff-no-rj",
      title:
        "I Open-Sourced My Failed Chrome Extension… But Did Not Expect This",
      views: "39K",
      uploadedTime: "3 days ago",
      chanelName: "Anna Codes",
    },
    {
      id: "_CWcBWSKItk",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      chanelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know",
      views: "4.3K",
      uploadedTime: "20 hours ago",
      chanelName: "Radhika Chopra",
    },
    {
      id: "6xk1g20qdVw",
      thumbnail:
        "https://i.ytimg.com/vi/XRzRGNPaGt8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVXklirC8nEHYxLcmAUppieY6nng",
      chanelLogo:
        "https://yt3.ggpht.com/AclQ892JKT07_-02ZRSJQIKWtG7deb9eyMmd8_sQNyb-zGcG7gxthnzOIepf7jnTLhreWAdm=s68-c-k-c0x00ffffff-no-rj",
      title:
        "I Open-Sourced My Failed Chrome Extension… But Did Not Expect This",
      views: "39K",
      uploadedTime: "3 days ago",
      chanelName: "Anna Codes",
    },
    {
      id: "C7RBGKwEWhc",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      chanelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know",
      views: "4.3K",
      uploadedTime: "20 hours ago",
      chanelName: "Radhika Chopra",
    },
  ];

  const tabs = [
    "All",
    "Programming",
    "System Design",
    "CSE",
    "Coding",
    "Music",
    "Dance",
    "Gaming",
    "Comedy",
    "Movie",
    "Sports",
    "Eductaion",
    "News",
    "Life Style",
    "Vlog",
    "Wedding",
  ];

  return (
    <>
      <section className="flex overflow-hidden gap-1.5 px-3 py-3 fixed w-full bg-neutral-950">
        {tabs.map((tab) => (
          <button className="text-sm bg-neutral-700 px-3 py-1 rounded-md text-nowrap">
            {tab}
          </button>
        ))}
      </section>
      <section className="p-3 mt-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-3">
          {videos.map((video) => (
            <YtCard videoDetails={video} />
          ))}
        </div>

        <section className="border-t border-t-neutral-100/10 pb-3">
          <h3 className="text-lg font-semibold my-3">Shorts</h3>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-3">
            {videos.map((video) => (
              <YtShortVideoCard videoDetails={video} />
            ))}
          </section>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 border-t border-t-neutral-100/10">
          {videos.map((video) => (
            <YtCard videoDetails={video} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;