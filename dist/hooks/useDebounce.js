import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    useEffect(function () {
        var handler = window.setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        // *清除副作用：return就可以清除，並且會在下一個effect前清除
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
export default useDebounce;
