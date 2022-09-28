import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ text }) {
    return (
        <button className={cx('btn')}>
            <span>{text}</span>
        </button>
    );
}

export default Button;
