const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Manejar errores específicos
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: err.errors.map(e => e.message)
      });
    }
  
    if (err.message === 'Pokemon not found') {
      return res.status(404).json({
        success: false,
        message: err.message
      });
    }
  
    if (err.message === 'Pokemon not found in PokeAPI') {
      return res.status(404).json({
        success: false,
        message: err.message
      });
    }
  
    // Error por defecto
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  };
  
  module.exports = errorHandler;