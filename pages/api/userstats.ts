import { getSession } from "@auth0/nextjs-auth0";

const handler = async (req, res) => {
  try {
    const session = getSession(req, res);
    res.json(session);
  } catch (err) {
    res.json(null);
  }
};
export default handler;
