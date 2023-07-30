import React from "react";

import TitleBanner from "../components/TitleBanner"
import FBPost from "../components/FBPost"

const Clients = () => {

  return (

    <div className="row">
    <TitleBanner text="Clients" />
      <div className="row">
        <div className="col-lg-6">
        <FBPost height="700px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjordan.sakkas%2Fposts%2Fpfbid0GZGaBr7S2U6nxPLdKNwGtR1qzW96BYu5GkzRNZzLJZ1aBdVKUM8uMpc4dNysU686l&show_text=true&width=500" />
        </div>
        <div className="col-lg-6">
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsue.johns.7374%2Fposts%2Fpfbid01MqMa7eRA5TLG85XfCYrKuPQemz89Wx3wuVDFrMf5EeDejDcQqRAtUMVC5wLnnXYl&show_text=true&width=500" />
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeniewkcss%2Fposts%2Fpfbid0qpuLQ2AREGS8iCrB9qxrZTjFTBoS4WKJqrv9CMHfHaVRDq7u9c5fMgU2WQRRZZral&show_text=true&width=500" />
        
        </div>
        <div className="col-md-6">

        </div>
      </div>
    
    
      {/* <NameValueTable data={clientData}/> */}
    </div>
  );
}

export default Clients;