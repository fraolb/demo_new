import React from "react";
import { Link } from "react-router-dom";
import Souls from "./../../assets/souls.png";
import Church1 from "./../../assets/church1.png";
import Church2 from "./../../assets/church2.png";
import Church3 from "./../../assets/church3.png";
import Church4 from "./../../assets/church4.png";
import Kebron from "./../../assets/Kebron.png"
import IRcouncil from "./../../assets/inter_religious_council.png"
import Layout from "../../components/Layout";

import {news} from '../../data/data'
import CardNews from "../../components/card";
import "./Home.css";

const Home = () => {
  console.log(news)
  return (
    <Layout>
      <div className="Home">
        <div className="homeBack">
          <div className="homeLeft">
            <div className="homeLeftWord">
              <h3>የኢትዮጵያ ወንጌል አማኞች አብያተ ክርስትያናት ካውንስል </h3>
              <h5>መዝሙር 23 ፡ 1-6</h5>
              <h6>
                እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም። በለመለመ መስክ ያሳድረኛል፤ በዕረፍት ውኃ ዘንድ
                ይመራኛል። ነፍሴን መለሳት፥ ስለ ስሙም በጽድቅ መንገድ መራኝ። በሞት ጥላ መካከል እንኳ ብሄድ አንተ
                ከእኔ ጋር ነህና ክፉን አልፈራም፤ በትርህና ምርኵዝህ እነርሱ ያጸናኑኛል። በፊቴ ገበታን አዘጋጀህልኝ
                በጠላቶቼ ፊት ለፊት ራሴን በዘይት ቀባህ፥ ጽዋዬም የተረፈ ነው። ቸርነትህና ምሕረትህ በሕይወቴ ዘመን
                ሁሉ ይከተሉኛል፥ በእግዚአሔርም ቤት ለዘላለም እኖራለሁ።
              </h6>
              <div className="btnH">
                {/* <Link to="/form1">
                  <button> Register </button>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="homeRight"></div>
        </div>
        <div className="homeFront">
          <div className="homeFrontShape">
            <div className="homeFrontShapeLeft"></div>
            <div className="homeFrontShapeRight"></div>
          </div>
        </div>
        <div className="homeMiddle">
          <div className="partnersTop">Partnership</div>
          <div className="partners">
            <img src={Kebron} height="150px" />
            <img src={IRcouncil} height="200px" />
            <img src={Souls} height="100px" />
          </div>
        </div>
        <div className="homeBottom">
          {
            news.map((val)=> <CardNews img={val.img} title={val.title} body={val.body}/>)
          }
        
        </div>
        <div className="ourClients">
          <div className="partnersTop">Our Clients</div>
          <div className="partners">
            <img src={Church1} height="100px" />
            <img src={Church2} height="100px" />
            <img src={Church3} height="100px" />
            <img src={Church4} height="100px" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;



{/* <div className="homeBottomSet">
<div className="bottomHeader"></div>
<div className="homeBottomBox">
  Easy እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም። በለመለመ መስክ ያሳድረኛል፤ በዕረፍት ውኃ ዘንድ
  ይመራኛል። ነፍሴን መለሳት፥ ስለ ስሙም በጽድቅ መንገድ መራኝ። በሞት ጥላ መካከል እንኳ ብሄድ አንተ
  ከእኔ ጋር ነህና ክፉን አልፈራም፤ በትርህና ምርኵዝህ እነርሱ ያጸናኑኛል። በፊቴ ገበታን አዘጋጀህልኝ
  በጠላቶቼ ፊት ለፊት ራሴን በዘይት ቀባህ፥ ጽዋዬም የተረፈ ነው።{" "}
</div>
</div>
<div className="homeBottomSet">
<div className="bottomHeader"></div>
<div className="homeBottomBox">
  Fast እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም። በለመለመ መስክ ያሳድረኛል፤ በዕረፍት ውኃ ዘንድ
  ይመራኛል። ነፍሴን መለሳት፥ ስለ ስሙም በጽድቅ መንገድ መራኝ። በሞት ጥላ መካከል እንኳ ብሄድ አንተ
  ከእኔ ጋር ነህና ክፉን አልፈራም፤ በትርህና ምርኵዝህ እነርሱ ያጸናኑኛል። በፊቴ ገበታን አዘጋጀህልኝ
  በጠላቶቼ ፊት ለፊት ራሴን በዘይት ቀባህ፥ ጽዋዬም የተረፈ ነው።{" "}
</div>

</div>
<div className="homeBottomSet">
<div className="bottomHeader"></div>
<div className="homeBottomBox">
  Secure እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም። በለመለመ መስክ ያሳድረኛል፤ በዕረፍት ውኃ
  ዘንድ ይመራኛል። ነፍሴን መለሳት፥ ስለ ስሙም በጽድቅ መንገድ መራኝ። በሞት ጥላ መካከል እንኳ ብሄድ
  አንተ ከእኔ ጋር ነህና ክፉን አልፈራም፤ በትርህና ምርኵዝህ እነርሱ ያጸናኑኛል። በፊቴ ገበታን
  አዘጋጀህልኝ በጠላቶቼ ፊት ለፊት ራሴን በዘይት ቀባህ፥ ጽዋዬም የተረፈ ነው።{" "}
</div>
</div> */}