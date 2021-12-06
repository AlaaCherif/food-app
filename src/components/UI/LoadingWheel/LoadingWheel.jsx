import classes from './loading.module.css'
const LoadingWheel = () => {
       return (<div className={classes['lds-ring']}><div></div><div></div><div></div><div></div></div>)
}
export default LoadingWheel;