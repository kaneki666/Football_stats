import  React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
        <div>
            {datas.map(data => (
                <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">December</ListSubheader>
                  </GridListTile>
                  {tileData.map(tile => (
                    <GridListTile key={data.img}>
                      <img src={tile.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        subtitle={<span>by: {tile.author}</span>}
                        actionIcon={
                          <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
              </div>
            ))}
        </div>
    )
}

export default Team;
