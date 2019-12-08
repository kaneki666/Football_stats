import  React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


const Team = () => {

    useEffect(() => {
        fetchData();
    },[])

    const [datas, setData] = useState([]);

    const fetchData = async () => {
        const result  = await fetch(
            'https://soccer.sportmonks.com/api/v2.0/countries?api_token=Uo54hUkdjI4xtWn36YZDmbUOVSIJh7IELX23sYqLOtxqSPoRrBZHWfJphTZ8')
        const foundData = await result.json();
        console.log(foundData);
        setData(foundData.data);

    }

    const classes = useStyles();
    
    return(
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {datas.map(data => (
          <GridListTile key={data.id}>
            <img src={data.image_path} alt={data.name} />
            <GridListTileBar
              title={data.name}
              actionIcon={
                <IconButton aria-label={`info about `} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Team;
