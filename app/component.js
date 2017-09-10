export default (text = 'Hello world') => {
    const element = document.createElement('div');

    element.innerHTML = text;
    element.className = 'redButton';

    return element;
};
