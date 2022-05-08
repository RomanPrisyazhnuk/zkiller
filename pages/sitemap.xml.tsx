import React from 'react';
import { seoPages } from '../constants/seoConstants';
import map from 'lodash/map';
import { getQuestions } from '../firebase/firebase';
import getApiClient from '../api';
import config from '../api/urls/url-config.json';

const getSitemap = (questions: any, articles: any) =>
  `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${seoPages.baseUrl}</loc>
    <lastmod>2021-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${seoPages.baseUrl}/articles</loc>
    <lastmod>2021-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
   ${map(
     questions,
     (question) => `<url>
    <loc>${seoPages.baseUrl}/question/${question.id}</loc>
    <priority>0.8</priority>
  </url>`
   )} 
  ${map(
    articles,
    (article) => `<url>
    <loc>${seoPages.baseUrl}/article/${article.id}</loc>
    <priority>0.7</priority>
  </url>`
  )}
</urlset>`.replace(/,/gi, '');

class Sitemap extends React.Component {
  public static async getInitialProps({ res }: any) {
    res.setHeader('Content-Type', 'text/xml');
    const questions = await getQuestions();
    const articles = await getApiClient(config.production).articles.getArticles();
    res.write(getSitemap(questions, articles));
    res.end();
  }
}

export default Sitemap;
