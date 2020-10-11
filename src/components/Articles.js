import React, { Component } from 'react';

class Articles extends Component {

    renderArticles = () => {
        const { articles } = this.props;
        return articles.map(article => {
            return <tr key={`${article.title}`}>
                <td data-testid="article-title">{article.title}</td>
                <td data-testid="article-upvotes">{article.upvotes}</td>
                <td data-testid="article-date">{article.date}</td>
            </tr>
        })
    }

    render() {
        return (
            <div className="card w-50 mx-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Upvotes</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderArticles()}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Articles;
