import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import star from '../../ico/star.png'
import filledStar from '../../ico/filled-star.png'
import styled from 'styled-components'

const ImgContainer = styled.img`
  width: 13px;
  heigth: 13px;
`
const Button = styled.button`
  width: 14px;
  heigth: 14px;
  border: 0px;
`

const JobItem = ({ id, title }) => {
  const [fuckingStar, setFuckingStar] = useState(false)

  return (
    <div>
      <Link to={`/positions/${id}`}>{title}</Link>
      <Button disabled={fuckingStar} onClick={() => setFuckingStar(true)}>
        <ImgContainer src={fuckingStar ? filledStar : star} alt="star" />
      </Button>
    </div>
  )
}

export default JobItem
