import "./../styles/main.css";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Main() {
    return (
        <div className='background'>
            <div className="search">
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
            <div className="post">
                <Button variant="text" >
                    <AddCircleOutlineOutlinedIcon color='action'/>
                    <span>Create</span>
                </Button>
            </div>
        </div>
    );
}

export default Main
