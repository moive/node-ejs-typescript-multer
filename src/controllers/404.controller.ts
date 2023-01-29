import type { Request, Response } from 'express';

const get404 = (req: Request, res: Response): any => {
  res.render('404', {
    title: 'Not Found',
    error: 'I am sorry',
    optsLink: {
      url: '/',
      text: 'Go Home'
    }
  });
};

export { get404 };
