
import {datas} from "/data/index.js"

function injectToDom() {

    const Article = document.querySelector("main section:nth-child(2)");
    const sectionArticle = document.createElement("article");
    const titre = document.createElement("h2");
    const titre2 = document.createElement("h2")
    titre.textContent = datas.section.title[0]+' '+datas.section.title[1];
    titre2.textContent = datas.multiFish.title;

    console.log(titre2.textContent)

    sectionArticle.style.width = "100%";
    Article.append(sectionArticle)
    sectionArticle.append(titre)

    sectionArticle.appendChild(titre2)


    console.log(Article)


}


injectToDom();

