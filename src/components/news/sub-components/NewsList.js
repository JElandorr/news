import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ArticleMini from "./ArticleMini";

const NewsList = () => {
    const articles = [
        {
            id: 1,
            title: "Lorem ipsum blog post",
            date: "12 April, 2024",
            comments: 4,
            image: "/assets/img/blog/blog-9.jpg",
            description:
                "Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem nibh id penatibus",
        },
        {
            id: 2,
            title: "New collection of our shop",
            date: "13 April, 2024",
            comments: 4,
            image: "/assets/img/blog/blog-8.jpg",
            description:
                "Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem nibh id penatibus",
        },
        {
            id: 3,
            title: "Ipsum blog post two",
            date: "14 April, 2024",
            comments: 4,
            image: "/assets/img/blog/blog-7.jpg",
            description:
                "Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem nibh id penatibus",
        },
        {
            id: 4,
            title: "New shop collection",
            date: "15 April, 2024",
            comments: 4,
            image: "/assets/img/blog/blog-6.jpg",
            description:
                "Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem nibh id penatibus",
        },
        {
            id: 5,
            title: "Lorem blog post four",
            date: "16 April, 2024",
            comments: 4,
            image: "/assets/img/blog/blog-5.jpg",
            description:
                "Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem nibh id penatibus",
        },
        {
            id: 6,
            title: "Ipsum blog post five",
            date: "17 April, 2024",
            comments: 4,
            image: "/assets/img/blog/blog-4.jpg",
            description:
                "Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem nibh id penatibus",
        },
    ];
    return (
        <Fragment>
            {articles.map((article) => (
                <ArticleMini key={article.id} article={article} />
            ))}
        </Fragment>
    );
};

export default NewsList;
