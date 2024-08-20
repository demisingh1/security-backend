// const Option = require("../Models/OptionModel")
const Ques = require("../Models/QuesModel")


const ShowQues = async (req,res)=>{
    try {
        const allQuestions = await Ques.find({})
        res.status(200).json({message:allQuestions}); 
    } catch (error) {
        res.status(400).json({message:error})
    }
}
const InsertQues = async(req, res) =>{
    try {
        let question = {...req.body}
        console.log(question)
        // const question = 
        let number1 = await Ques.create({
            question:question.question,
            ans1:question.ans1,
            ans2:question.ans2,
            ans3:question.ans3,
            ans4:question.ans4,
            correct:question.correct
        })
        
        console.log(number1);
        res.status(200).json({message:number1})
    } catch (error) {
        res.status(400).json({message:error})
    }
}
module.exports = {ShowQues,InsertQues}