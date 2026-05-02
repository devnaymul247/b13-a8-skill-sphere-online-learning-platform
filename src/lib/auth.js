import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MongoDB_URI);
const db = client.db('SkillSphere');

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
    google: {
      enabled: true,
      clientId: process.env.Google_Client_ID,
      clientSecret: process.env.Google_Client_Secret,
    },
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});