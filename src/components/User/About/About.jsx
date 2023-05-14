import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/About.css";
import Image from "react-bootstrap/Image";
import { Get_website_detailes } from "../scripts/website";
function About() {
  const website_info = Get_website_detailes();
  if (website_info.status === "loading") {
    return <div></div>;
  } else
    return (
      <Container className="pe-5 ps-5">
        <h1 className="text-center  ">קצת עלינו</h1>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={7}
            lg={9}
            xl={10}
            className="bg-success text-white h-25  mb-3 rounded"
          >
            <p id="about_text" className=" text-center mt-3 hei ">
              בתדהר אנחנו מתכננים ובונים דירות, משרדים ומרחבי מחיה.
              <br />
              כחברה יזמית ובונה, אנחנו אחראים על כל התהליך ומלווים את לקוחותינו
              בכל השלבים - הייזום, התכנון, הבניה
              <br />
              והמסירה, ומעניקים את השירות הטוב ביותר בישראל. עבורנו זו אחריות
              גדולה וגאווה עצומה.
              <br />
              כשאתם בוחרים בנו, בתדהר, אתם רוכשים דירה או שוכרים משרד מאנשים
              המחויבים לאיכות, מקצועיות, אמינות, שקיפות ושירותיות.
              <br />
              אנשים, שבונים בשביל אנשים. ויש לנו שיטה הייחודית רק לנו, שיטת תדהר
              <br />
              ב-29 השנים מאז היווסדנו, פיתחנו את שיטת תדהר, המבטיחה שתקבלו בדיוק
              את דירת החלומות או המשרד שבחרתם, באיכות הגבוהה ביותר ובזמן אליו
              התחייבנו. בשיטת תדהר, אנו מתחילים בהקשבה לצרכים ולהעדפות שלכם,
              ויחד אנחנו מתחילים בפיתוח התוכנית.
              <br />
              באמצעות תכנון הנדסי חכם, מידול דיגיטלי תלת ממדי המתייחס גם לאילוצי
              השטח, נוצרת התוכנית לביצוע ומתחיל הליך הבנייה.
              <br />
              לכל אורכו של התהליך אנו מקפידים על רמת האיכות הגבוהה ביותר,
              המובטחת על-ידי יישום תהליך בקרת איכות פנימי. כך אנחנו מבטיחים
              שהבית או המשרד שלכם יהיו בדיוק כפי שחלמתם עליהם.
              <br />
            </p>
          </Col>
          <Col className="text-center  me-3 ms-3 ">
            <Image
              alt="logo"
              src={process.env.REACT_APP_API_URL + website_info.data.logo}
              className="rounded-circle border"
              fluid
            />
          </Col>
        </Row>
      </Container>
    );
}

export default About;
