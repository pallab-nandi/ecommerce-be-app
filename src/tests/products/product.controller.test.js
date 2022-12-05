const db = require('../../models/index.model');
const productModel = db.product;
const productController = require('../../controllers/product.controller');
const { mockRequest, mockResponse } = require('../interceptor');

describe('productController create test callback', () => {

    beforeEach(() => {
        console.log('Calling');
        req = mockRequest();
        res = mockResponse();
    })

    const testPayload = {
        categoryID : 2,
        name : 'Asus ROG',
        description : 'Asus ROG is the best gaming laptop in the market',
        cost : '150000'
    }

    const resTestPayload = {
        message : 'New Product created successfully',
        product : testPayload
    }

    it('Should return success message with product details', async () => {
        let spy = jest.spyOn(productModel, 'create').mockImplementation(
            (payload) => new Promise((res, rej) => {
                let obj = {};
                obj.dataValues = payload;
                res(obj);
            })
        );

        req.body = testPayload;

        await productController.createProduct(req, res);

        expect(spy).toHaveBeenCalled();
        expect(res.status).toEqual(201);
        expect(res.body).toEqual(JSON.stringify(resTestPayload));
    });

    it('Should return error message', async () => {
        let spy = jest.spyOn(productModel, 'create').mockImplementation(
            (payload) => new Promise((res, rej) => {
                rej('Error creating data')
            })
        )

        req.body = testPayload;

        await productController.createProduct(req, res);

        expect(spy).toHaveBeenCalled();
        expect(res.status).toEqual(500);
        expect(res.body).toEqual(JSON.stringify({
            'message' : 'Error while creating product'
        }))
    })
})