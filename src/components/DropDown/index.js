import classNames from 'classnames/bind';

import styles from './DropDown.module.scss';

const cx = classNames.bind(styles);

function DropDown({ attrs, text }) {
    return (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <div className={cx('drop-down')}>{text}</div>
        </div>
    );
}

export default DropDown;
