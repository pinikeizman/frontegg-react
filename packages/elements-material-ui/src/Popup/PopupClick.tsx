import React, { useCallback, forwardRef, useState, useEffect, useImperativeHandle, useRef } from 'react';
import { Popover, Box } from '@material-ui/core';
import classnames from 'classnames';
import { useStyles } from './styles';
import { IPopoverProps } from './types';

export const PopupClick = forwardRef<HTMLElement, IPopoverProps>((props, ref) => {
  const { trigger, content, anchorOrigin, transformOrigin, mountNode } = props;
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  useImperativeHandle<any, any>(ref, () => ({
    closePopup: () => handleClose(),
  }));

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setOpen(false);
    props.onClose?.();
  }, []);

  useEffect(() => {
    if (open) {
      props.onOpen?.();
    }
  }, [open]);

  useEffect(() => {
    if (props.open != null) {
      setOpen(props.open);
    }
  }, [props.open]);

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleClick, ref: ref })}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={mountNode}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <Box className={classnames(classes.box, 'fe-m-popup-content')}>{content}</Box>
      </Popover>
    </>
  );
});
