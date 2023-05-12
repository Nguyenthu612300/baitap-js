const ProfileCard = ({image,title,handle,des}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={image}
            alt="pda logo"
          />
        </figure>
      </div>

      <div className="media-content">
      <div class="media-content">
        <p class="title is-4">{title}</p>
        <p class="subtitle is-6">{handle}</p>
      </div>
        <div className="content">{des}</div>
      </div>
    </div>
  );
};
export default ProfileCard;
