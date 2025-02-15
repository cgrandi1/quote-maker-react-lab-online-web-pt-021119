import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {

  renderQuotes = () => this.props.quotes.map((quote) => <QuoteCard key={quote.id} quote={quote} removeQuote={ this.props.removeQuote } upvoteQuote={ this.props.upvoteQuote } downvoteQuote={ this.props.downvoteQuote }/>)
  


  render() {
    console.log(this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}
const mapDispatchToProps = dispatch => ({
  removeQuote: quoteId => { dispatch(removeQuote(quoteId)) },
  upvoteQuote: quoteId => { dispatch(upvoteQuote(quoteId)) },
  downvoteQuote: quoteId => { dispatch(downvoteQuote(quoteId)) }
});

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
