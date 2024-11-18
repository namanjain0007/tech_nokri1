const Page404 = () => {
  return (
    <>
      <center>
        <div className="pag-error-error">
          <div className="pag-error-container">
            <div className="pag-error-content centered">
              <img
                style={{ width: "500px" }}
                src="https://www.technokri.com/htdocs_error/something-lost.png"
              />
              <h1>Oops, looks like the page is lost.</h1>
              <p
                style={{ fontSize: "22px" }}
                className="pag-error-sub-header-text-block-narrow"
              >
                This is not a fault, just an accident that was not intentional.
              </p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Page404;
