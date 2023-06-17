const mongoose = require('mongoose');

const ScoreSchmea=mongoose.Schema(
    {
        scores_id:{
            required: true,
            type: String
        },
        individual_id:{
            required: true,
            type: String
        }
    }
)
const ScoresModel=mongoose.model('score',ScoreSchmea);

module.exports=ScoresModel;