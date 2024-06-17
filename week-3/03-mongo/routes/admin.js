const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    //check if user with this username already exists
    Admin.create({
        username:username,
        password:password
    })
          //wait for it to call
    res.json({
        message:"Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', (req, res) => {
    // Implement fetching all courses logic
    console.log("hi there")
    res.json({
        msg:"hi there"
    })
});

module.exports = router;