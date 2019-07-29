import Photon from '@generated/photon'

const photon = new Photon()

;(async () => {
  await photon.users.findOne({ where: { id: 'test' }})
})()