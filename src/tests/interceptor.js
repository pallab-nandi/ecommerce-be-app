module.exports = {
    mockRequest : () => {
        const req = {};
        req.body = jest.fn().mockReturnValue(req);
        req.params = jest.fn().mockReturnValue(req);
        return req;
    },
    mockResponse : () => {
        const res = {};
        res.setHeader = jest.fn().mockReturnValue(res)
        res.writeHead = jest.fn().mockImplementation((status) => res.status = status);
        res.end = jest.fn().mockImplementation((json) => res.body = json);
        res.status = jest.fn().mockReturnValue(res);
        res.body = jest.fn().mockReturnValue(res);
        return res;
    }
}