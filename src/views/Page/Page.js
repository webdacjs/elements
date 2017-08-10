import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import './Page.css';

class Page extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.getContent(this.props);
  }

  getContent(props) {
    const params = props.match.params;
    const components = props.store.components.pages;
    const component = components.find(item => item.slug === params.slug);

    this.setState({ component, variants: [] });

    component.content.then(twig => {
      this.setState({ content: twig.render(window.data) });
    });
  }

  render() {
    return (<h1>hello page truc</h1>);
  }
}

Page.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Page));
