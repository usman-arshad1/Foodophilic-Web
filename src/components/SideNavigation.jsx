import "./../styles/sideNavigation.css";

const SideNavigation = ({json}) => {
  const {name, gender} = json;

  return (
    <div className="side-navigation">
      <a href="">{name}</a>
      <a>{gender}</a>
      <a>Recipes</a>
      <a>Messages</a>
      <a>Reviews</a>
    </div>
  )
}

export { SideNavigation }