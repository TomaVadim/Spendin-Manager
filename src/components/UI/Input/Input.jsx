import style from './Input.module.scss';

export const Input = ({type, placeholder, value, changeInput}) => {
  return (
  <input 
    type={type}
    placeholder={placeholder}
    className={style.input}
    value={value}
    onChange={changeInput} 
  /> 
  );
};