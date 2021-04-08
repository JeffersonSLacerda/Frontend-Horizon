import './style.scss'

const ScrollableContainer = (props: any) => (
    <div id='scrollable'>
        
        <div className='scroll' id={`${props.id}`}>
            {
                props.children
            }
        </div>
    </div>
)
export default ScrollableContainer