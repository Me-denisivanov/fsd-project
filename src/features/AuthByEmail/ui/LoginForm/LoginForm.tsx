import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { email, password, error, isLoading } = useSelector(getLoginState);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByEmail({ email, password }));
  }, [dispatch, password, email]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        onChange={onChangeEmail}
        autoFocus
        placeholder={t('Введите email')}
        type="text"
        className={cls.input}
        value={email}
      />
      <Input
        onChange={onChangePassword}
        placeholder={t('Введите пароль')}
        type="Введите пароль"
        className={cls.input}
        value={password}
      />
      <Button onClick={onLoginClick} disabled={isLoading} className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
});
