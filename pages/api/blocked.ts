import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    error:
      "We love that you want to keep trying us out! Subscribe now, or share with 3 friends for a free 1 month subscription.",
  });
  return res.end();
}
