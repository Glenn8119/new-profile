import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'
import useStopScroll from '../../hooks/useStopScroll'
import Hint from './Hint'
import Layer from './Layer'
import { fadeOut } from './animation'
import { theme } from '../../theme'
import { useNavigate } from 'react-router-dom'


const LockerContainer = styled.div`
	width: 250px;
	height: 65px;
	border-radius: 999px;
	background-color: rgba(255, 255, 255, 0.85);
	overflow-x: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	/* https://styled-components.com/docs/api#css */
	animation: ${(props) =>
		props.isEnd ? css`.6s ${fadeOut} ease-out .4s forwards` : ''};
`

const LockerTrack = styled.div`
	width: 435px;
	height: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
`

const Lock = styled.div`
	width: 55px;
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme.body};
	border: 1px solid rgba(${(props) => props.theme.textRgba}, 0.2);
	border-radius: 999px;
	transform: translateX(-190px);
`

const Locker = () => {
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState('')
	const [scrollLeft, setScrollLeft] = useState('')
	const [isLayerShow, setIsLayerShow] = useState(false)
	const [isSecondLayerShow, setIsSecondLayerShow] = useState(false)
	const [isEnd, setIsEnd] = useState(false)

	const navigate = useNavigate()

	const containerRef = useRef(null)

	const { disableScroll, enableScroll } = useStopScroll()

	useEffect(() => {
		disableScroll()

		return enableScroll
	}, [])

	useEffect(() => {
		if (containerRef) containerRef.current.scrollLeft = 190
	}, [containerRef])

	useEffect(() => {
		if (!isEnd) {
			if (isDragging) containerRef.current.scrollLeft = scrollLeft || 190
			else {
				containerRef.current.scrollLeft = 190
				setScrollLeft(190)
			}
		}
	}, [scrollLeft, isDragging])

	useEffect(() => {
		if (isLayerShow) {
			setTimeout(() => {
				console.log(123)
				navigate('/about')
			}, 1000)
		}
	}, [isLayerShow])

	const handleMouseDown = (e) => {
		if (isEnd) return
		e.stopPropagation()
		setIsDragging(true)
		setStartX(e.pageX)
	}
	const handleMouseLeave = () => {
		setIsDragging(false)
	}
	const handleMouseUp = () => {
		setIsDragging(false)
	}
	const handleMouseMove = (e) => {
		if (!isDragging) return
		setScrollLeft(190 - (e.pageX - startX))
		if (190 - (e.pageX - startX) <= 0) {
			setIsEnd(true)
			containerRef.current.scrollLeft = 0
			setTimeout(() => setIsLayerShow(true), 1000)
			setTimeout(() => setIsSecondLayerShow(true), 1200)
			}
	}

	return (
		<>
			<Hint isEnd={isEnd}/>
			<LockerContainer ref={containerRef} className='test' isEnd={isEnd}>
				<LockerTrack>
					<Lock
						onMouseDown={(e) => handleMouseDown(e)}
						onMouseMove={(e) => handleMouseMove(e)}
						onMouseLeave={handleMouseLeave}
						onMouseUp={handleMouseUp}
					>
						<FontAwesomeIcon icon={isEnd ? faLockOpen : faLock} style={{ height: '50%' }} />
					</Lock>
				</LockerTrack>
			</LockerContainer>
			<Layer isLayerShow={isLayerShow} backgroundColor={theme.layer}/>
			<Layer isLayerShow={isSecondLayerShow} backgroundColor={theme.body}/>
		</>
	)
}

export default Locker
