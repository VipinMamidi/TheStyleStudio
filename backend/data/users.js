import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "thestylestudio6150@gmail.com",
    password: bcrypt.hashSync("pass123", 12),
    isAdmin: true,
    isConfirmed: true,
    avatar: "/images/icon_user.png",
  },
  {
    name: "Urvi",
    email: "urviaryamane@gmail.com",
    password: bcrypt.hashSync("pass123", 12),
    isConfirmed: true,
    avatar: "/images/icon_user.png",
  },
];

export default users;
