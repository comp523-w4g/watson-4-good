import React from 'react';
import scrollToElement from 'scroll-to-element';
import { isUri } from 'valid-url';
import Input from './Input.jsx';
import Output from './Output/Output.jsx';
import { analyzeWithAllFeatures } from './utils/request';

// eslint-disable-next-line
const DEFAULT_TEXT = 'Enter Hashtags here...';
// const DEFAULT_URL = 'http://www.forbes.com/sites/alexkonrad/2016/01/29/new-ibm-watson-chief-david-kenny-talks-his-plans-for-ai-as-a-service-and-the-weather-company-sale/';
export default React.createClass({
  displayName: 'Demo',

  getInitialState() {
    return {
      loading: false,
      error: null,
      data: null,
      disableButton: false,
      query: {},
    };
  },

  enableButton(event) {
    const disabled = event ? event.target.value.length < 1 : false;
    this.setState({ disableButton: disabled });
  },

  onSubmitClick(value) {
    const query = isUri(value) ? { url: value } : { text: value };
    this.setState({
      query,
      disableButton: true,
      loading: true,
    });

    setTimeout(() => { scrollToElement('#anchor', { duration: 300 }, 100); }, 0);

    // Send the request to NLU
    analyzeWithAllFeatures(query)
      .then(data => this.setState({ data, loading: false, error: null }))
      .catch(error => this.setState({ error, loading: false }))
      .then(() =>
        setTimeout(() => { scrollToElement('#anchor', { duration: 300 }, 100); }, 0),
      );
  },

  render() {
    return (
      <div className="_container _container_large">
        <Input
          text={DEFAULT_TEXT}
          // url={DEFAULT_URL}
          error={this.state.error}
          language={this.state.data ? this.state.data.results.language : null}
          disableButton={this.state.disableButton}
          onSubmit={this.onSubmitClick}
          onTabChange={this.enableButton}
          onInputChange={this.enableButton}
        />
        <div id="anchor" style={{ marginTop: '0rem' }} />
        { !this.state.error ? (
          <Output
            loading={this.state.loading}
            data={this.state.data}
            query={this.state.query}
            language={this.state.data ? this.state.data.results.language : null}
          />) : null
        }
      </div>
    );
  },
});
