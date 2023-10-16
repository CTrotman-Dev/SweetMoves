import React from "react";

import TitleBanner from "../components/TitleBanner"
import FBPost from "../components/FBPost"
import Seo from "../components/Seo";

const Clients = () => {
  const metaData = [
    {
      name: "keywords",
      content: "reviews,services, removals, home, office, packing, unpacking, assembly,Dismantling, reassembly, furniture, loading, un-loading, cleaning",
    },
  ];
  return (

    <div className="row">
                <Seo
                title="SweetMoves Reviews"
                description="The Reviews page for SweetMoves which lists and explains all services provided."
                meta={metaData} />
    <TitleBanner text="Reviews" />
      <div className="row fb-comments">
        <div className="col-lg-6">
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsue.johns.7374%2Fposts%2Fpfbid01MqMa7eRA5TLG85XfCYrKuPQemz89Wx3wuVDFrMf5EeDejDcQqRAtUMVC5wLnnXYl&show_text=true&width=500" />
        <FBPost height="700px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjordan.sakkas%2Fposts%2Fpfbid0GZGaBr7S2U6nxPLdKNwGtR1qzW96BYu5GkzRNZzLJZ1aBdVKUM8uMpc4dNysU686l&show_text=true&width=500" />
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeniewkcss%2Fposts%2Fpfbid0qpuLQ2AREGS8iCrB9qxrZTjFTBoS4WKJqrv9CMHfHaVRDq7u9c5fMgU2WQRRZZral&show_text=true&width=500" />
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgermaine.jones.180%2Fposts%2Fpfbid0XHdADfoM4J13Xsc72JVaAXFNdDDjkVk3bndghiQHXxcftVFRmCosDKtHTKPzk5vLl&show_text=true&width=500" />
        </div>
        <div className="col-lg-6">
        
        
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flouise.hewlett%2Fposts%2Fpfbid02GCjw6sieTTRDMBJVjNoikR3WHQyM4jd9sAYRg5bEcQZiBuRPjgZqn497RvvkefqWl&show_text=true&width=500" />
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsue.johns.7374%2Fposts%2Fpfbid019ArxC8fhbrT2GHvYU28UKDVTmx1xctUaYvyg8M5DmwsAVtUdpybYzFxtzpFUAD8l&show_text=true&width=500" />
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02L27L3gZpG9yjr5Yueh4JBahp2upNSzeKcYV7cfy4ZqsbTewd6UX4BWbe4eYqSU8wl%26id%3D1029782751&show_text=true&width=500" />
        <FBPost height="250px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fangela1reeves%2Fposts%2Fpfbid0UMUXF9ZaVpjYsoSYiUB9ea36gDRKaZsjoFAinNxCqFkEpa1iR6X2YBwJJxxkxiAwl&show_text=true&width=500" />
        <FBPost height="300px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclaire.hewlett.58%2Fposts%2Fpfbid02W82GEEMnobXq1HtKssuUVjRQT4YVouDC6whS8WHiWRQ4mjFSSErT9UWEjRwEbkcZl&show_text=true&width=500" />
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhayley.ford.184%2Fposts%2Fpfbid0aXaJ2ThUnKn6pw1hNmSNS8nRL3t37sbr9MnL2MaFeV6HvTBpTKMho6zhtWiw38T7l&show_text=true&width=500" />
        
        </div>
      </div>
    </div>
  );
}

export default Clients;