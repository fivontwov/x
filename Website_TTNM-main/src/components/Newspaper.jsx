import "../pages/News.css";
// import "./Book.css";
import book8 from "../assets/book/book8.mp3";

import Article from "./Article";
import Book from "./Book";
import { Grid } from "@mui/material";

import React, { useState, useEffect } from "react";

const Newspaper = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const articles = [
        {
          title:
            "1. Kỳ nghỉ lễ 30/4 năm nay có thể là kỳ nghỉ lễ 30/4 nóng nhất lịch sử khi nhiệt độ miền Bắc nhiều nơi ghi nhận trên 41 độ, miền Trung nhiều nơi trên 42 độ, riêng tại Tương Dương (Nghệ An) trên 43 độ. Dự báo nắng nóng gay gắt còn bao trùm cả nước đến hết ngày 30/4.",
          description:
            "Ngày hôm qua (27/4) – ngày bắt đầu kỷ nghỉ lễ 30/4 năm nay, khu vực Sơn La, Hòa Bình và các tỉnh/thành phố từ Thanh Hóa đến Phú Yên có nắng nóng đặc biệt gay gắt với nhiệt độ cao nhất phổ biến 39-42 độ, có nơi trên 42 độ như Tĩnh Gia (Thanh Hóa) 42.8 độ, Tương Dương (Nghệ An) 43.2 độ, Hà Tĩnh 42.4 độ, Đồng Hới (Quảng Bình) 42.6 độ, Đông Hà (Quảng Trị) 42.9 độ, TP Huế (T.T.Huế) 42.4 độ. Các tỉnh miền Bắc hôm qua cũng có nắng nóng gay gắt và đặc biệt gay gắt với nhiệt độ cao nhất phổ biến 38-40 độ, có nơi trên 41 độ như TP Lào Cai (Lào Cai) 41.7 độ, Minh Đài (Phú Thọ) 41.2 độ, Phủ Lý (Hà Nam) 41.8 độ. Tại thủ đô Hà Nội, nhiệt độ ghi nhận tại trạm Láng là 41.5 độ. Tây Nguyên và Nam Bộ hôm qua cũng có nắng nóng gay gắt, có nơi đặc biệt gay gắt với nhiệt độ cao nhất phổ biến 36-38 độ, có nơi trên 39 độ như Ayunpa (Gia Lai) 40.0 độ, Đồng Phú (Bình Phước) 40.2 độ, Tp Tây Ninh (Tây Ninh) 39.3 độ, Long Khánh (Đồng Nai) 39.2 độ.",
          date: "28/04/2024",
          audioUrl: book8,
          audioTitle: "",
        },
        {
          title:
            "2. Tài liệu hỏi - đáp một số vấn đề về đạo lạ, tà đạo ở nước ta hiện nay",
          description:
            "Bạn có biết tà đạo hay đạo lạ ở nước ta hiện nay chưa? Đã hiểu rõ về tín ngưỡng, tôn giáo và sự khác nhau với đạo tà, đạo lạ chưa? Nếu chưa, tài liệu này là dành cho bạn. “Tài liệu hỏi – đáp một số vấn đề về đạo lạ, tà đạo ở nước ta hiện nay”  được biên soạn trên cơ sở nội dung cuốn sách “Một số vấn đề về đạo lạ, tà đạo ở nước ta hiện nay” gồm những câu hỏi và trả lời liên quan đến nhận thức về đạo lạ, tà đạo; phân biệt đạo lạ, tà đạo với tín ngưỡng, tôn giáo; những chủ trương, chính sách, pháp luật của Đảng, Nhà nước. Cùng lắng nghe để phân biệt và nâng cao kiến thức về tà đạo, đạo lạ ở nước ta hiện nay.",
          date: "05/12/2023",
          audioUrl: book8,
          audioTitle: "",
        },
        {
          title:
            "3. Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh (Phần 1)",
          description:
            "Nhắc đến chủ tịch Hồ Chí Minh, chúng ta không quên nhắc đến những đóng góp, hi sinh của người vì độc lập, tư do, hạnh phúc của người dân Việt Nam. Ở người hộ tụ những phẩm chất, đạo đức, phong cách quý giá để mỗi chúng ta học tập, làm theo và rèn luyện để hoàn thiện mình. Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh (phần 1) với 15 mẫu chuyện hay về Bác, với cách cách giải quyết vấn đề khoa học và nhân văn của Người .... Lắng nghe Tài liệu để cùng học tập và làm theo tư tưởng, đạo đức và phong cách Hồ Chí Minh!",
          date: "05/12/2023",
          audioUrl: book8,
          audioTitle: "",
        },
        {
          title:
            "4. Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh (Phần 2)",
          description:
            "Tiếp nối phần một của Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh, Phần 2 này tuyển chọn 25 mẩu chuyện về tấm gương đạo đức Hồ Chí Minh, nhằm góp phần nâng cao nhận thức cho nhân dân về giá trị to lớn của tấm gương đạo đức Hồ Chí Minh, tạo ra những chuyển biến trong ý thức tu dưỡng, rèn luyện và hành động theo tấm gương đạo đức của Người, góp phần đẩy lùi sự suy thoái về chính trị, đạo đức, lối sống, xây dựng Đảng trong sạch, vững mạnh. Lắng nghe Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh (Phần 2) để tự rèn luyện, giáo dục và hướng tới chân, thiện, mỹ.",
          date: "05/12/2023",
          audioUrl: book8,
          audioTitle: "",
        },
        {
          title:
            "5. Tài liệu Chiến lược bảo vệ chủ quyền biển, đảo và phát triển bền vững kinh tế biển Việt Nam",
          description:
            "Việt Nam là quốc gia hình chữ S với đường biển dài từ Bác vào Nam. Sự phân hóa tự nhiên đã tạo nên tính đa dạng về cảnh quan, tài nguyên biển và tiềm năng phát triển các lĩnh vực kinh tế biển, đảo; tạo tiền đề cho bảo đảm an ninh, quốc phòng đất nước từ phía biển. Song song với đó là vấn đề bảo vệ chủ quyền biển, đảo và phát triển bền vững kinh tế Biển. “Tài liệu Chiến lược bảo vệ chủ quyền biển, đảo và phát triển bền vững kinh tế biển Việt Nam” đã được xuất bản, phát hành để giúp chúng ta hiểu thêm về Chiến lược của Việt Nam về bảo vệ chủ quyền trên biển, đảo, và chiến lược phát triển kinh tế biển một cách bền vững. Lắng nghe để nâng cao nhận thức về vai trò, vị trí chiến lược của biển, đảo.",
          date: "05/12/2023",
          audioUrl: book8,
          audioTitle: "",
        },
        {
          title: "6. Một số câu hỏi - đáp về biển, đảo Việt Nam",
          description:
            "Nếu Tài liệu Chiến lược bảo vệ chủ quyền biển, đảo và phát triển bền vững kinh tế biển Việt Nam giúp bạn nhận thức vai trò, vị trí chiến lược của biển, đảo thì Tài liệu “Một số câu hỏi - đáp về biển, đảo Việt Nam” là cẩm nang giúp bạn giải đáp các thắc mắc liên quan đến biển, đảo, chủ quyền biển, đảo Việt Nam. Nội dung của sách nói “Một số câu hỏi - đáp về biển, đảo Việt Nam” được kế thừa nội dung cuốn sách 99 câu hỏi - đáp về biển. Lắng nghe để khái quát về vị trí, vai trò và tiềm năng của biển, đảo Việt Nam, về các vấn đề liên quan đến các quyền và bảo vệ quyền của Việt Nam ở Biển Đông, về xây dựng và phát triển các lĩnh vực liên quan đến biển, đảo Việt Nam.",
          date: "05/12/2023",
          audioUrl: book8,
          audioTitle: "",
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
        article.audioUrl = data2.async;
        return article;
      });
      const updatedArticles = await Promise.all(articlePromises);
      setArticles(updatedArticles);
    };
    getArticles();
  }, []);

  return (
    <div>
      <div className="all__news">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Newspaper;
