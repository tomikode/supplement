import main from '../../database/connection';
import Test from '../../database/schema';

export default async function(req, res) {

  main().catch(err => console.log(err))

  const create = new Test({ name: "John" })
  await create.save()
  res.status(200).json(create)

}