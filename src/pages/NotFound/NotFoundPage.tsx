import css from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <>
      <div className={css.container}>
        <h1>404 Page Not Found</h1>
        <p>The page you are looking for could not be found.</p>
        <a href="/">Return to Home Page</a>
      </div>
    </>
  );
}

export default NotFoundPage;
