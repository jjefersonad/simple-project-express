import { Router } from 'express';
import ClientsController from './controllers/clients-controller';

class Routes {
    static define(router: Router): Router {
        router.use('/clients', ClientsController);

        return router;
    }
}

export default Routes.define(Router());