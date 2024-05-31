import { findUserById } from "./auth.service";
import validateJwtToken from "./jwt/validate-jwt-token";

export function authGuard(req, res, next) {
  async function validate() {
    const authorizationHeader = req.headers.authorization;

    // if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    //   return res
    //     .status(401)
    //     .json({ message: "Authorization header missing or malformed" });
    // }

    const accessToken = authorizationHeader.split(" ")[1];
    try {
      const payload = validateJwtToken(accessToken);
      const user = await findUserById(payload.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      req.user = user; // Ensure user is attached to req
      next();
    } catch (error) {
      console.error("Error in authGuard:", error); // Log the error for debugging
      return res.status(403).json({ message: "Invalid or expired token" });
    }
  }

  return validate().catch(next);
}
