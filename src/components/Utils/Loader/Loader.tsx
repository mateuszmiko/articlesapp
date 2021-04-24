import BeatLoader from 'react-spinners/BeatLoader';
import React from 'react';

type LoaderPropsType = {
  loading: boolean;
};

const Loader = ({ loading }: LoaderPropsType) => <BeatLoader color={'var(--primary-color)'} css={'margin: 15px'} loading={loading} size={15} />;

export default Loader;
