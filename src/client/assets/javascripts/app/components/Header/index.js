import React from 'react';
import SearchBar from '../SearchBar';
import './Header.css';

import { FileUpload } from 'redux-file-upload';

const Header = ({searchValue, onChange, handleSubmit}) => {
  return (
    <div>
      <SearchBar onChange={onChange} searchValue={searchValue} handleSubmit={handleSubmit} />

      <FileUpload
        allowedFileTypes={['jpg', 'jpeg']}
        data={{
          type: 'picture',
          user: 'james',
          hashtag: searchValue
        }}
        dropzoneId="fileUpload"
        url="http:/localhoust/newpost"
      >
        <button>
          +
        </button>
      </FileUpload>


    </div>
  );
};

export default Header;

Header.propTypes = {
  searchValue: React.PropTypes.string,
  onChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
};
