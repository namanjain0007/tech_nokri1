const Image = ({ title }) => {
  return (
    <>
      <div>
        <div className="main-container">
          <div className="title">
            <h2>{title !== "" ? title : "Ayush"}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
