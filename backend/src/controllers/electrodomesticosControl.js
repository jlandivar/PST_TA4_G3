const electroControl = {};
electroControl.get10Electrodomesticos = (req,res)=>res.send('<h1>Los 10 electrodomesticos que mas consumen</h1>');
module.exports = electroControl;