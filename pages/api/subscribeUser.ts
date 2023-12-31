import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse<{ error: string }>) => {
  const { email } = req.body;

  console.log({ email });

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    const data = {
      email_address: email,
      status: "subscribed"
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    ).then((res) => res.json());

    if (response.status >= 400) {
      return res.status(400).json({
        // error: `There was an error subscribing to the newsletter:
        // Hit me up via Instagram and I'll add you the old fashioned way :(.`
        error: `${response.title}: ${response.detail}`
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
