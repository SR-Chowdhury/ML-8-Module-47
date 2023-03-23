import './App.css';

// Passing props to a component in React
function FriendCompnent (props) {
    const {name, profession} = props;
    return (
        <div className='container'>
            <h3>Name: {name}</h3>
            <p>Profession: {profession}</p>
        </div>
    );
}

export default FriendCompnent;