
import {datas} from "/data/index.js"

function injectToDom() {

    const Article = document.querySelector("main section:nth-child(2)");
    const sectionArticle = document.createElement("article");
    const titre = document.createElement("h2");
    const titre2 = document.createElement("h3");
    const titre3 = document.createElement("h3");

    const para = document.createElement("p");

    para.textContent = datas.section.multiFish.para.p[0]+" "+ datas.section.multiFish.para[1];


    titre.textContent = datas.section.title[0]+' '+datas.section.title[1];
    titre3.textContent = datas.section.crustyFish.title;
    titre2.textContent = datas.section.multiFish.title;


    titre2.style.margin = "30px";
    titre3.style.margin = "30px";

    console.log(titre2.textContent)

    sectionArticle.style.width = "100%";
    Article.append(sectionArticle)

   
    sectionArticle.append(titre);
    sectionArticle.append(titre3);
    sectionArticle.append(para);
    sectionArticle.append(titre2);



}


injectToDom();

