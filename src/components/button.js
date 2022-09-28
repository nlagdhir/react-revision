import clsx from 'clsx';

const Button = (props) => {

    console.log(props);

    const {className, children, ...rest} = props;

    const classDetails = clsx('ui-button',className)

    return <>
        <button className={classDetails} {...rest}>{children}</button>
    </>
}

export default Button;