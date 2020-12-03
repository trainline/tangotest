import { Request, Response } from 'express';

import { Station } from '../../shared/interfaces';
import stations from '../fixtures/stations.json';

/**
 * A simple request handler example, returning the entire list of mocked stations.
 */
export default (_req: Request, res: Response<Station[]>) => res.json(stations);