const ImageKit = require("imagekit");

const authenticateImageKit = (req, res, next) => {
  const imagekit = new ImageKit({
    urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
    publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
  });

  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};

module.exports = authenticateImageKit;
