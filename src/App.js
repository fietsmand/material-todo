import React from 'react';
import { Grid, AppBar, Paper, withStyles, Toolbar, Typography, Chip, Avatar, TextField, Button, List, ListItem, ListItemText, Divider, ListItemIcon, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Done, Archive, Undo } from '@material-ui/icons'

const styles = theme => ({
    background: {  
        height: '100vh',
    },
    root: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
    },    
    backgroundPaper: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 73%)',
        height: '50vh',
        backgroundColor: theme.palette.background.background2,
        borderBottom:  '25px solid '+ theme.palette.background.background2,


    },
    paper: {
        width: '25rem',
        minHeight: '30rem',
        margin: 'auto',
        marginTop: '-75vh',
        marginBottom: '2rem'
    },
    chip: {
        margin: theme.spacing.unit,
        width: '10rem'
    },
    navbar: {
        // borderRadius: '5%'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        height: '40%',
        borderRadius: 'inherit inherit 0 0 ',
        padding: theme.spacing.unit * 2,
        // display: 'flex',
        // // alignItems: 'center',
        // justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        // margin: theme.spacing.unit
    }
})

class App extends React.Component {

    state = {
        // todos: [
        //     {
        //         text: 'Finish creating this app',
        //         status: 0
        //     },
        //     {
        //         text: 'Code at starbucks',
        //         status: 0
        //     },
        //     {
        //         text: 'Drink something at starbucks',
        //         status: 1
        //     },{
        //         text: 'Have breakfast',
        //         status: 2
        //     },
        // ],
        inProgress: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 0).length : 0,
        done: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 1).length : 0,
        archived: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 2).length : 0,
        todo: ''
    }

    addTodo = (todo) => {
        if(!localStorage.getItem('todos')) {
            const todos = []
            todos.push({
                text: todo,
                status: 0
            })
            localStorage.setItem('todos',  JSON.stringify(todos))
        }else{
            const todos = JSON.parse(localStorage.getItem('todos'));
            todos.push({
                text: todo,
                status: 0
            })
            localStorage.setItem('todos', JSON.stringify(todos))
        }

        console.log(this.state);
        
        this.setState({
            todo: '',
            inProgress: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 0).length : 0,
        })
    }
    
    markAsDone = (todo, i) => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.splice(i, 1, {
            text: todo.text,
            status: 1
        })
        localStorage.setItem('todos', JSON.stringify(todos))
        
        this.setState({
            todo: '',
            inProgress: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 0).length : 0,
            done: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 1).length : 0,
            archived: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 2).length : 0,
       
        })
    }
        
    markAsUnDone = (todo, i) => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.splice(i, 1, {
            text: todo.text,
            status: 0
        })
        localStorage.setItem('todos', JSON.stringify(todos))
        
        this.setState({
            todo: '',
            inProgress: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 0).length : 0,
            done: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 1).length : 0,
            archived: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 2).length : 0,
       
        })
    }
        
    archive = (todo, i) => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.splice(i, 1, {
            text: todo.text,
            status: 2
        })
        localStorage.setItem('todos', JSON.stringify(todos))
        
        this.setState({
            todo: '',
            inProgress: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 0).length : 0,
            done: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 1).length : 0,
            archived: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).filter(i => i.status === 2).length : 0,
       
        })
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    render() {

        const { classes } = this.props


        return (
            <div>
                <div className={classes.background}>
                    <div className={classes.root}>
                        <div className={classes.backgroundPaper} >
                        </div>
                    </div>  
                </div>
                <div>

                <Paper className={classes.paper} elevation={3}>
                    <Paper className={classes.inputField}>
                    <form 
                        className={classes.form}
                        onSubmit={e => {
                            e.preventDefault();
                            this.addTodo(this.state.todo)
                        }}
                        >                            
                        <TextField 
                                label="Start typing here..."
                                multiline
                                name="todo"
                                className={classes.textField}
                                onChange={this.handleChange}
                                value={this.state.todo}
                                fullWidth
                            />
                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
                    </Paper>
                    <AppBar position="static" className={classes.navbar}>
                        <Toolbar className={classes.toolbar}>
                            {/* <Typography >
                                TODO'S
                            </Typography> */}
                            {
                                this.state.inProgress > 0 ? 
                                    <Chip avatar={<Avatar>{this.state.inProgress}</Avatar>} label="In progress" className={classes.chip} />  : ''     
                            } 
                            {
                                this.state.done  > 0 ?  
                                    <Chip avatar={<Avatar>{this.state.done}</Avatar>} label="Finished" className={classes.chip} /> : ''
                            }
                            {
                                this.state.archived > 0 ? 
                                   <Chip avatar={<Avatar>{this.state.archived}</Avatar>} label="Archived" className={classes.chip} /> : ''
                            }
                        </Toolbar>
                    </AppBar>
                    <List>
                        {
                            localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).map((todo, i) => {
                                if(todo.status === 0) return (
                                    <div key={i}>
                                        <ListItem>
                                            <ListItemText primary={todo.text} />
                                            <ListItemSecondaryAction>
                                                <IconButton aria-label="Done" onClick={e => {
                                                    this.markAsDone(todo, i)
                                                }}>
                                                    <Done />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <Divider />
                                    </div>
                                )
                            }) : ''
                        }
                    </List>
                    <List>
                        {
                            localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).map((todo, i) => {
                                if(todo.status === 1) return (
                                    <div key={i}>
                                        <ListItem disabled>
                                            <ListItemText primary={todo.text} />
                                            <ListItemSecondaryAction>
                                                <IconButton aria-label="Done" onClick={e => {
                                                    this.markAsUnDone(todo, i)
                                                }}>
                                                    <Undo />
                                                </IconButton>
                                                <IconButton aria-label="Done" onClick={e => {
                                                    this.archive(todo, i)
                                                }}>
                                                    <Archive />
                                                </IconButton>
                                                
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <Divider />
                                    </div>
                                )
                            }) : ''
                        }
                    </List>
                </Paper>
                </div>

            </div>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)