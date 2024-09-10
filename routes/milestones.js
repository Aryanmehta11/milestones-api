const express=require('express')
const router=express.Router();
const Milestone=require('../models/milestones')

router.post('/',async(req,res)=>{
    try{
        const milestone=new Milestone(req.body)
        await milestone.save()
        res.status(201).send(milestone)
    }catch(err){
        res.status(400).send(error)
    }
})

router.get('/',async(req,res)=>{
    try{
        const milestones=await Milestone.find()
        res.status(200).send(milestones)
    }catch(err){
        res.status(500).send(error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
      const milestone = await Milestone.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!milestone) {
        return res.status(404).send();
      }
      res.send(milestone);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const milestone = await Milestone.findByIdAndDelete(req.params.id);
      if (!milestone) {
        return res.status(404).send();
      }
      res.send(milestone);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  module.exports = router;