import { Request, Response, Router } from "express";

const router = Router();
router.get("/", (req: Request, res: Response) => {
	// res.send({ message: "Welcome to the Home page!" });
	res.render("index");
});

export { router as uploadRouter };
