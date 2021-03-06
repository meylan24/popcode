import React from 'react';
import map from 'lodash/map';
import partial from 'lodash/partial';
import i18n from 'i18next-client';
import ErrorItem from './ErrorItem';

function ErrorSublist(props) {
  if (props.errors.state === 'passed') {
    return false;
  }

  const errors = map(props.errors.items, (error) => (
    <ErrorItem
      {...error}
      key={[error.reason, error.row]}
      onClick={partial(
        props.onErrorClick,
        props.language
      )}
    />
  ));

  const errorMessage = i18n.t(
    'errors.notice',
    {count: props.errors.items.length, language: props.language}
  );

  return (
    <div>
      <h2 className="error-list__header">
        {errorMessage}
      </h2>
      <ul className="error-list__errors">
        {errors}
      </ul>
    </div>
  );
}

ErrorSublist.propTypes = {
  errors: React.PropTypes.object.isRequired,
  language: React.PropTypes.oneOf(['html', 'css', 'javascript']).isRequired,
  onErrorClick: React.PropTypes.func.isRequired,
};

export default ErrorSublist;
