const current = async (req, res) => {
    try {
      res.json(req.user)
  
    } catch (error) {
      throw new Error('error :>> ', error);
    }
    
}

module.exports = current
