import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
