"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShowEndpoint = (req, res, next) => {
    console.log(`Endpoint:: ${req.originalUrl}`);
    // On to the next middleware
    return next();
};
exports.ShowRequestMethod = (req, res, next) => {
    console.log(`Method:: ${req.method}`);
    // On to the next middleware
    return next();
};
// Build the enpdoint
exports.WhereAmIEndpoint = [
    ShowEndpoint,
    exports.ShowRequestMethod,
    (req, res) => {
        return res.status(200).json({
            success: true
        });
    }
];
//# sourceMappingURL=show-endpoint.js.map