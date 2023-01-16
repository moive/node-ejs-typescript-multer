import { Request, Response, Router } from "express";

const router = Router();
router.get("/", (req: Request, res: Response) => {
	res.send({ message: "Welcome to the Home page!" });
});

export { router as uploadRouter };
