import React, { FC } from 'react';
import { Button, Grid, Icon, Input, useT } from '@frontegg/react-core';
import { prefixCls } from '../constants';
import { useApiTokensActions, useApiTokensState } from '../hooks';

export const ApiTokensTableToolbar: FC = () => {
  const { setApiTokensState } = useApiTokensActions();
  const { searchValue } = useApiTokensState(({ searchValue }) => ({ searchValue }));

  const { t } = useT();

  return (
    <>
      <div className={`${prefixCls}__table-toolbar`}>
        <Grid container>
          <Grid item md={4} xs={6}>
            <Input
              fullWidth
              value={searchValue}
              onChange={(e) => setApiTokensState({ searchValue: e.target.value })}
              prefixIcon={<Icon name='search' />}
              placeholder={`${t('common.search')}...`}
            />
          </Grid>
          <Grid item md={8} xs={6} className='fe-text-align-end'>
            <Button variant='primary' size='large' onClick={() => setApiTokensState({ showAddTokenDialog: true })}>
              {t('auth.apiTokens.addNewToken')}
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};