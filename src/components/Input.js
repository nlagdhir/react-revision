import clsx from 'clsx';

const Input = (props) => {
    const {children, className, type, ...rest} = props;

    const classDetails = clsx('ui-textfield',className);

    return <input type={(type)? type : 'text'} className={classDetails} {...rest} />
}

export default Input;