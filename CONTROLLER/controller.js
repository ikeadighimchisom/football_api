import foot from "../model/module.js"
export const allplayer = async(req, res) => {
  try{
    const ball = await foot.findAll();
    if(ball.length === 0){
        res.status(404).json({
            message: "no table found"
        });
        console.log("table not successful")
    } else {
        res.status(200).json({
            message: "table is created successfully",
            data: ball
        })
    }

  } catch(err){
    console.log(err)
  }
}

// get a single player
export const singleplayer = async(req, res) => {
    try{
        const id = req.params.id;
        const ball = await foot.findAll({
            where: {id:id}
        });
        if(ball.length === 0) {
            res.status(404).json({
                message: `no such id: ${id}`
            });
            console.log(ballTable [0].id)
        } else{
            res.status(200).json({
                data: ball
            })
        }
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

// update a single player
export const updateplayer = async(req, res) => {
    try{
        const id = req.params.id;
        let body = req.body.numberOfPlayer
        const updateball= await foot.update(req.body, {where: {id: id}})
        if(updateball[0]=== 1 && body>=22 && body <=25) {
            res.status(200).json({
                message: 'sucessfully updated',
                data: updateball
            });
        } else{
            res.status(404).json({
                message: 'unable to update'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

// delet a single sale
export const deleteplayer = async(req, res) => {
    try{
        const id = req.params.id;
        const removeplayer = foot.destroy({
            where: {id:id}
        });
        if(removeplayer.length == 0) { 
        res.status(404).json({
            message: `no such id: ${id}`
        });
        console.log(removeplayer)
        } else {
            res.status(200).json({
                message: "successfully deleted",
                data: removeplayer
            });
        }
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}