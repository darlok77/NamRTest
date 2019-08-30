import React from 'react'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'

import { login } from '../actions'

const getModalStyle = () => {
  const top = 50
  const left = 50
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: '#000'
  }
}))

const Login = () => {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    const username = document.querySelector('#inputLoginName').value
    const pwd = document.querySelector('#inputLoginPwd').value
    login(username, pwd)
    handleClose()
  }

  return (
    <div>
      <div onClick={handleOpen}>Login</div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Login</h2>
          <div id="simple-modal-description">
            <input id="inputLoginName" name="username" type="text" />
            <input id="inputLoginPwd" name="pwd" type="text" />
            <input id="btnLogin" type="submit" value="LOGIN" onClick={handleSubmit} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Login
