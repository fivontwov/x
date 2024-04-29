import "./Book.css";
import Article from "./Article";
import React, { useState, useEffect, useContext } from "react";
import ReadMoreButton from "./Card/ReadMoreButton/ReadMoreButton";
import Book from "./Book";
import { NewsContext } from "./NewsContext"; // Import context
import "./Card/card.css";

import book8 from "../assets/book/book8.mp3";
import { Grid } from "@mui/material";

const Allbooks = () => {
  const [articles, setArticles] = useState([]);
  // const { data } = useContext(NewsContext);

  useEffect(() => {
    const getArticles = async () => {
      const articles = [
        {
          title:
            "1. Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng",
          description:
            "“Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng” được biên soạn dựa trên nội dung cuốn sách cùng tên là “Hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng”. Tài liệu là chuỗi các câu hỏi – đáp về các kiến thức về môi trường, vệ sinh lao động, các vấn đề về nguyên nhân, tình trạng ô nhiễm môi trường, cách xử lý rác thải, cách sử dụng thuốc bảo vệ thực vật an toàn, .... Đây là các kiến thức cơ bản, hữu ích dành cho mỗi tổ chức, cá nhân. Cùng lắng nghe để hiểu và biết cách bảo vệ môi trường sống cho chính mình và những người xung quanh, vì một môi trường xanh sạch đẹp.",
          date: "05/12/2023",
          audioUrl: book8,
          img: "https://bazaarvietnam.vn/wp-content/uploads/2023/03/BZ-nu-than-tuong-am-nhac-ao-Ann-3.jpg",
          audioTitle: "",
          name: "xyz",
        },
        {
          title:
            "1. Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng",
          description:
            "“Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng” được biên soạn dựa trên nội dung cuốn sách cùng tên là “Hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng”. Tài liệu là chuỗi các câu hỏi – đáp về các kiến thức về môi trường, vệ sinh lao động, các vấn đề về nguyên nhân, tình trạng ô nhiễm môi trường, cách xử lý rác thải, cách sử dụng thuốc bảo vệ thực vật an toàn, .... Đây là các kiến thức cơ bản, hữu ích dành cho mỗi tổ chức, cá nhân. Cùng lắng nghe để hiểu và biết cách bảo vệ môi trường sống cho chính mình và những người xung quanh, vì một môi trường xanh sạch đẹp.",
          date: "05/12/2023",
          audioUrl: book8,
          img: "https://bazaarvietnam.vn/wp-content/uploads/2023/03/BZ-nu-than-tuong-am-nhac-ao-Ann-3.jpg",
          audioTitle: "",
          name: "xyz",
        },
        {
          title:
            "1. Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng",
          description:
            "“Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng” được biên soạn dựa trên nội dung cuốn sách cùng tên là “Hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng”. Tài liệu là chuỗi các câu hỏi – đáp về các kiến thức về môi trường, vệ sinh lao động, các vấn đề về nguyên nhân, tình trạng ô nhiễm môi trường, cách xử lý rác thải, cách sử dụng thuốc bảo vệ thực vật an toàn, .... Đây là các kiến thức cơ bản, hữu ích dành cho mỗi tổ chức, cá nhân. Cùng lắng nghe để hiểu và biết cách bảo vệ môi trường sống cho chính mình và những người xung quanh, vì một môi trường xanh sạch đẹp.",
          date: "05/12/2023",
          audioUrl: book8,
          img: "https://bazaarvietnam.vn/wp-content/uploads/2023/03/BZ-nu-than-tuong-am-nhac-ao-Ann-3.jpg",
          audioTitle: "",
          name: "xyz",
        },
        {
          title:
            "1. Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng",
          description:
            "“Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng” được biên soạn dựa trên nội dung cuốn sách cùng tên là “Hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng”. Tài liệu là chuỗi các câu hỏi – đáp về các kiến thức về môi trường, vệ sinh lao động, các vấn đề về nguyên nhân, tình trạng ô nhiễm môi trường, cách xử lý rác thải, cách sử dụng thuốc bảo vệ thực vật an toàn, .... Đây là các kiến thức cơ bản, hữu ích dành cho mỗi tổ chức, cá nhân. Cùng lắng nghe để hiểu và biết cách bảo vệ môi trường sống cho chính mình và những người xung quanh, vì một môi trường xanh sạch đẹp.",
          date: "05/12/2023",
          audioUrl: book8,
          img: "https://bazaarvietnam.vn/wp-content/uploads/2023/03/BZ-nu-than-tuong-am-nhac-ao-Ann-3.jpg",
          audioTitle: "",
          name: "xyz",
        },
      ];
      // setArticles(articles);
      const url = "https://api.fpt.ai/hmi/tts/v5";
      const headers = new Headers({
        "Content-Type": "application/json",
        "api-key": "u6PXADUPP0luylzHNLJaVYYN1kT7ltP7",
        speed: "",
        voice: "banmai",
      });

      const articlePromises = articles.map(async (article) => {
        const response1 = await fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ text: article.title }),
        });
        const response2 = await fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ text: article.content }), // send the article content to the API
        });

        const data1 = await response1.json();
        const data2 = await response2.json();
        // replace the article's audioUrl with the API response
        article.audioTitle = data1.async; // replace 'async' with the actual property from the API response
        // article.audioUrl = data2.async;
        return article;
      });
      const updatedArticles = await Promise.all(articlePromises);
      setArticles(updatedArticles);
    };
    getArticles();
  }, []);
  // console.log(data);

  return (
    <div>
      <div className="all_books ">
        {/* <Grid
          container
          rowSpacing={1}
          columnSpacing={4}
          className="flex justify-center"
        > */}
        {articles.map((article, index) => (
          <div className="card">
            <div className="card-img">
              <img src={article.img} alt={article.name} />
              tf article.img
            </div>
            <div className="body">
              <h5>{article.name}</h5>
            </div>
            <ReadMoreButton id={index} book={article} />
          </div>
        ))}
        {/* </Grid> */}
      </div>
    </div>
  );
};

export default Allbooks;
