import React, { useState } from 'react'
import {InputBase ,Container, Stack,Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import MultiCarousel from '../components/MultiCarousel';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(22, 21, 27, 0.9)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const StyledButton =  styled('button')({
    border: '1px solid rgb(22, 21, 27, 0.8)',
    backgroundColor: 'rgb(22, 21, 27, 0.8)', 
    paddingBottom: 12, 
    paddingTop: 12, 
    fontWeight: 700, 
    width: 100,
    color:'white',
    cursor:'pointer',
    borderRadius: 7
})
  
const StyledInputBase = styled(InputBase)(() => ({
    color: 'inherit',
    border: '1px solid rgb(22, 21, 27, 0.8)',
    paddingTop:4,
    paddingBottom:4,
    paddingLeft: 12,
    borderRadius: 7,
    width: '50%',
}));

const Search = () => {
    var [movieName, setmovieName] = useState();
    var [result, setResult] = useState([]);
    var [isTableDisplay, setTableDisplay] = useState(false);

    const onValueChange = (e) => {
        setmovieName(movieName => ({
            ...movieName, [e.target.name]: e.target.value 
        }))
    }
    const searchMovie = () => {
        setTableDisplay( isTableDisplay = false);
        axios.post("http://localhost:8000/api/searchMovie", movieName)
        .then((res) =>{
            setResult(result = res.data);
            if (result.length > 0) {
                setTableDisplay(isTableDisplay = true);
            } else{
                alert("No movies found");
            }
        })
    } 
    const id = isTableDisplay ? 'search-result' : 'no-search-result';

  return (
    <div className='main-wrapper'>
        <Container maxWidth="xl">
            <Typography sx={{textAlign:'center', mb:3, fontSize:30, fontWeight:700}} gutterBottom variant="h5" component="div">
                Search Your Favourite Movie</Typography>
            <Stack direction="row" justifyContent="center"  alignItems="center">
                <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }} name="mName" onChange={(e) => onValueChange(e)}
                />
                <StyledButton onClick={searchMovie}>Search</StyledButton>
            </Stack>
            <div id={id}>
                <TableContainer sx={{mt:5}} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Movie Name</StyledTableCell>
                            <StyledTableCell>Director</StyledTableCell>
                            <StyledTableCell>Producer</StyledTableCell>
                            <StyledTableCell>Actor</StyledTableCell>
                            <StyledTableCell>Actress</StyledTableCell>
                            <StyledTableCell>Language</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {result.map((value, index) => (
                            <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {value.mName}
                            </StyledTableCell>
                            <StyledTableCell >{value.director}</StyledTableCell>
                            <StyledTableCell >{value.producer}</StyledTableCell>
                            <StyledTableCell >{value.actor}</StyledTableCell>
                            <StyledTableCell>{value.actress}</StyledTableCell>
                             <StyledTableCell>{value.language}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            
        </Container>
        
        <Container maxWidth="xl" sx={{mt:7}}>
            <MultiCarousel/>
        </Container>
    </div>
  )
}

export default Search