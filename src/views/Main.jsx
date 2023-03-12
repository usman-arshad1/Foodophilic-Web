import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Main() {
    return (
        // <div className='background'>
            <div className="search">
                <IconButton  aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    // sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                />
                <IconButton type="button" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
        /* </div> */
    )
}

export default Main
