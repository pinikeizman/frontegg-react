import { Loader, omitProps, RendererFunction, useT } from '@frontegg/react-core';
import React, { FC, ReactElement } from 'react';


export interface RedirectToSSOProps {
  renderer?: RendererFunction<RedirectToSSOProps, RedirectToSSOProps, ReactElement>
}

export const RedirectToSSO: FC<RedirectToSSOProps> = (props: RedirectToSSOProps) => {
  if (props.renderer) {
    return props.renderer(omitProps(props, ['renderer', 'components']));
  }
  const { t } = useT();
  return <>
    <div className='fe-center'>{t('auth.login.redirect-to-sso-message')}</div>
    <Loader center/>
  </>;
};