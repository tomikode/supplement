import connect from '../../database/connection';
import Test from '../../database/schema';
import jwt from 'jsonwebtoken';

export default async function(req, res) {

  const token = req.headers.authorization
  const decodedToken = jwt.verify(token, 'secret')
  console.log(decodedToken)

  connect().catch(err => console.log(err))

  const create = new Test({ name: "John" })
  await create.save()
  res.status(200).json(create)
}