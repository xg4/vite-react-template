import classNames from 'classnames';

function Home() {
  return (
    <div className={classNames('flex text-ellipsis text-left text-xs text-red-500')}>
      home
      <br />
      {__VERSION__}
      <br />
      {__DATE__}
      <br />
      {__ENV__}
    </div>
  );
}

export default Home;
