import classes from '../components/container.module.css';

const Container = (props) => {
    return <>
        <div className={classes.ui_container}>
            {props.children}
        </div>
    </>
}

export default Container