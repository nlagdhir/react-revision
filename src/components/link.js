import clsx from 'clsx';

const Link = (props) => {

    const {children, className, ...rest} = props;

    const classDetails = clsx('ui-link',className)

    return <a className={classDetails} {...rest}>{props.children}</a>
}   

export default Link;