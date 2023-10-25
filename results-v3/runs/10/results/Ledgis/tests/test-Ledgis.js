const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisWZb6JEP = await Ledgis.new({from: accounts[2]});
		const uintOVyVtcz = BigInt("625")
		const addressbLYXvlt = accounts[0]
		const address59SjHr = accounts[1]
		const boolDLJzwk = await LedgisWZb6JEP.transferFrom.call(address59SjHr, addressbLYXvlt, uintOVyVtcz, {from: accounts[0]});
		await LedgisWZb6JEP.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisWZb6JEP.transferFrom.call(address59SjHr, addressbLYXvlt, uintOVyVtcz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYzQ7bzg = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPpVQuxI = BigInt("1622")
		const address1QWypI = accounts[4]
		const uintcCiTKuy = BigInt("1392")
		const uintxQthbd = BigInt("1317")
		const addressbKs52eu = accounts[0]
		const uint256BB8YQv = await LedgisYzQ7bzg.currentTime.call({from: accounts[4]});
		await LedgisYzQ7bzg.renounceOwnership.call({from: accounts[4]});
		const addressYjx9Mbg = await LedgisYzQ7bzg.burn.call(address1QWypI, uintPpVQuxI, {from: accounts[3]});
		const boolKnFk7mt = await LedgisYzQ7bzg.transferWithLock.call(addressbKs52eu, uintxQthbd, uintcCiTKuy, {from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgisPghQzX = await Ledgis.new({from: accounts[3]});
		await LedgisPghQzX.pause.call({from: accounts[4]});
		await LedgisPghQzX.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisPghQzX.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHLV4MB6 = await Ledgis.new({from: accounts[1]});
		const uintki5f8Cu = BigInt("55")
		const addressRqntiLm = accounts[3]
		const addressOnDekF7 = accounts[3]
		const uintZNP7hWA = BigInt("1176")
		const addressvcaY6rO = accounts[0]
		const addressk4XONFB = "0x0000000000000000000000000000000000000001"
		const uint256L0dmoH = await LedgisHLV4MB6.totalSupply.call({from: accounts[2]});
		const boolTsWePvC = await LedgisHLV4MB6.decreaseAllowance.call(addressRqntiLm, uintki5f8Cu, {from: accounts[2]});
		const uint256gaOdPmJ = await LedgisHLV4MB6.lockCount.call(addressOnDekF7, {from: accounts[0]});
		const boolXKA7Cw7 = await LedgisHLV4MB6.transferFrom.call(addressk4XONFB, addressvcaY6rO, uintZNP7hWA, {from: accounts[3]});

		assert.equal(uint256L0dmoH, BigInt("10000000000000"))
		await expect(LedgisHLV4MB6.decreaseAllowance.call(addressRqntiLm, uintki5f8Cu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressQy5k5Nh = accounts[0]
		const uintIyiMSZ = BigInt("1989")
		const addressUv8o86 = accounts[3]
		const uintUrXQQu0 = BigInt("398")
		const addressTMHHD3G = accounts[5]
		const uintRCiogs = BigInt("463")
		const address9Vo887 = accounts[4]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressQy5k5Nh, {from: accounts[2]});
		await LedgisAiUwr6t.renounceOwnership.call({from: accounts[5]});
		const boolzPUHYr = await LedgisAiUwr6t.decreaseAllowance.call(addressUv8o86, uintIyiMSZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolF8p2R7W = await LedgisAiUwr6t.approve.call(addressTMHHD3G, uintUrXQQu0, {from: accounts[0]});
		const addressupUEP8G = await LedgisAiUwr6t.unlock.call(address9Vo887, uintRCiogs, {from: accounts[2]});

		assert.equal(uint256rmFP5cA, BigInt("0"))
		await expect(LedgisAiUwr6t.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisWZb6JEP = await Ledgis.new({from: accounts[2]});
		const addresswoutXyV = accounts[5]
		const uint2567y23Qa = await LedgisWZb6JEP.lockCount.call(addresswoutXyV, {from: accounts[3]});
		await LedgisWZb6JEP.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2567y23Qa, BigInt("0"))
		await expect(LedgisWZb6JEP.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressxYZYTS3 = accounts[0]
		const uintOvAxAEC = BigInt("528")
		const addressArCOXTs = accounts[1]
		const uintmBcr65R = BigInt("1989")
		const addressflZubAJ = accounts[3]
		const uintTEnkjjL = BigInt("414")
		const address8UuKWu = accounts[5]
		const uinttirGyAK = BigInt("463")
		const addressmYtxUoU = accounts[4]
		const uinte0pyB3O = BigInt("1550")
		const address3CSZOq = accounts[0]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressxYZYTS3, {from: accounts[2]});
		const boolRKCXNDN = await LedgisAiUwr6t.approve.call(addressArCOXTs, uintOvAxAEC, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisAiUwr6t.whenNotPaused.call({from: accounts[4]});
		await LedgisAiUwr6t.renounceOwnership.call({from: accounts[5]});
		const boolzPUHYr = await LedgisAiUwr6t.decreaseAllowance.call(addressflZubAJ, uintmBcr65R, {from: "0x0000000000000000000000000000000000000001"});
		const boolF8p2R7W = await LedgisAiUwr6t.approve.call(address8UuKWu, uintTEnkjjL, {from: accounts[0]});
		const addressupUEP8G = await LedgisAiUwr6t.unlock.call(addressmYtxUoU, uinttirGyAK, {from: accounts[2]});
		const boolf9PPmD = await LedgisAiUwr6t.increaseAllowance.call(address3CSZOq, uinte0pyB3O, {from: accounts[4]});

		assert.equal(boolRKCXNDN, true)
		assert.equal(uint256rmFP5cA, BigInt("0"))
		await expect(LedgisAiUwr6t.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisWZb6JEP = await Ledgis.new({from: accounts[2]});
		const uintoGnmxJz = BigInt("794")
		const addressUfz2JnR = "0x0000000000000000000000000000000000000001"
		const uintRxwqwEB = BigInt("713")
		const addressymW0fDW = accounts[0]
		const addresseKmjlj7 = accounts[1]
		const boolXfp7Ev = await LedgisWZb6JEP.increaseAllowance.call(addressUfz2JnR, uintoGnmxJz, {from: accounts[3]});
		const boolDLJzwk = await LedgisWZb6JEP.transferFrom.call(addresseKmjlj7, addressymW0fDW, uintRxwqwEB, {from: accounts[0]});

		assert.equal(boolXfp7Ev, true)
		await expect(LedgisWZb6JEP.transferFrom.call(addresseKmjlj7, addressymW0fDW, uintRxwqwEB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressmqFBFL = accounts[1]
		const addressiZ0txDm = "0x0000000000000000000000000000000000000001"
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressmqFBFL, {from: accounts[2]});
		const boolKpFZHHB = await LedgisAiUwr6t.isFrozen.call(addressiZ0txDm, {from: accounts[0]});

		assert.equal(boolKpFZHHB, false)
		assert.equal(uint256rmFP5cA, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressP9vDrMj = accounts[1]
		const uintRBvSRGH = BigInt("1176")
		const addressMAlR3xy = accounts[2]
		const uintUqq6XR8 = BigInt("291")
		const addressS62hOGv = accounts[4]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressP9vDrMj, {from: accounts[2]});
		const boolh8x3uJD = await LedgisAiUwr6t.transfer.call(addressMAlR3xy, uintRBvSRGH, {from: accounts[0]});
		await LedgisAiUwr6t.lockState.call(addressS62hOGv, uintUqq6XR8, {from: accounts[2]});

		assert.equal(uint256rmFP5cA, BigInt("10000000000000"))
		await expect(LedgisAiUwr6t.transfer.call(addressMAlR3xy, uintRBvSRGH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisi8ft2vw = await Ledgis.new({from: accounts[0]});
		const uinty7g3j0Z = BigInt("1568")
		const addressmyz0ZZP = accounts[3]
		const uint8WF39q = BigInt("1582")
		const addressf7jTLmI = accounts[0]
		const addressBICDyJ2 = accounts[2]
		const uintbx2P4v = BigInt("103")
		const addresswDtOwQW = accounts[5]
		const uinteXeMMb = BigInt("1458")
		const addressXXQu5fm = accounts[2]
		const boolZgroYTl = await Ledgisi8ft2vw.mint.call(addressmyz0ZZP, uinty7g3j0Z, {from: accounts[0]});
		const boolReOfGH4 = await Ledgisi8ft2vw.transferFrom.call(addressBICDyJ2, addressf7jTLmI, uint8WF39q, {from: accounts[4]});
		const boolu6tNX8M = await Ledgisi8ft2vw.increaseAllowance.call(addresswDtOwQW, uintbx2P4v, {from: accounts[5]});
		const boolZFdm72v = await Ledgisi8ft2vw.transfer.call(addressXXQu5fm, uinteXeMMb, {from: accounts[2]});

		assert.equal(boolZgroYTl, true)
		await expect(Ledgisi8ft2vw.transferFrom.call(addressBICDyJ2, addressf7jTLmI, uint8WF39q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressj23SuXg = accounts[0]
		const addressrxY4wg = accounts[1]
		const addressVlNhgKi = accounts[2]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressj23SuXg, {from: accounts[2]});
		const uint256OVLrAkF = await LedgisAiUwr6t.allowance.call(addressVlNhgKi, addressrxY4wg, {from: accounts[4]});

		assert.equal(uint256OVLrAkF, BigInt("0"))
		assert.equal(uint256rmFP5cA, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const uintE1jpGTK = BigInt("13")
		const addresskVvBkmo = accounts[0]
		const addressEydFWn = accounts[1]
		await LedgisAiUwr6t.lockState.call(addresskVvBkmo, uintE1jpGTK, {from: accounts[3]});
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressEydFWn, {from: accounts[2]});

		await expect(LedgisAiUwr6t.lockState.call(addresskVvBkmo, uintE1jpGTK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressh8kQBYC = accounts[0]
		const uinth5i8HTm = BigInt("1940")
		const addressMgK3bTR = accounts[3]
		const uint256mSwlnLs = await LedgisAiUwr6t.currentTime.call({from: accounts[3]});
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressh8kQBYC, {from: accounts[2]});
		const boolkq7k1WQ = await LedgisAiUwr6t.mint.call(addressMgK3bTR, uinth5i8HTm, {from: accounts[2]});
		const uint256QIOXC4 = await LedgisAiUwr6t.currentTime.call({from: accounts[3]});

		assert.equal(uint256mSwlnLs, BigInt("1630230060"))
		assert.equal(uint256rmFP5cA, BigInt("0"))
		await expect(LedgisAiUwr6t.mint.call(addressMgK3bTR, uinth5i8HTm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressJk8qrWs = accounts[1]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressJk8qrWs, {from: accounts[2]});
		await LedgisAiUwr6t.unpause.call({from: accounts[1]});
		await LedgisAiUwr6t.pause.call({from: accounts[1]});
		await LedgisAiUwr6t.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256rmFP5cA, BigInt("10000000000000"))
		await expect(LedgisAiUwr6t.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const uintcfzvy04 = BigInt("1162")
		const addressjU4bjg = accounts[2]
		const addressXQpl0tW = accounts[0]
		const addressv4Qn9LW = await LedgisAiUwr6t.unlock.call(addressjU4bjg, uintcfzvy04, {from: accounts[1]});
		await LedgisAiUwr6t.onlyOwner.call({from: accounts[1]});
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressXQpl0tW, {from: accounts[2]});

		await expect(LedgisAiUwr6t.unlock.call(addressjU4bjg, uintcfzvy04, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisWZb6JEP = await Ledgis.new({from: accounts[2]});
		const uintolDwl93 = BigInt("1323")
		const uintxSjBURU = BigInt("1794")
		const addressUnbCyiF = accounts[4]
		const uintRalvyuY = BigInt("730")
		const addressiRJIXRv = accounts[0]
		const addressIMSwwyS = accounts[1]
		const boolUtMbaoA = await LedgisWZb6JEP.transferWithLockAfter.call(addressUnbCyiF, uintxSjBURU, uintolDwl93, {from: accounts[2]});
		await LedgisWZb6JEP.unpause.call({from: accounts[3]});
		const boolDLJzwk = await LedgisWZb6JEP.transferFrom.call(addressIMSwwyS, addressiRJIXRv, uintRalvyuY, {from: accounts[0]});

		assert.equal(boolUtMbaoA, true)
		await expect(LedgisWZb6JEP.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const uintWUipneP = BigInt("1568")
		const uintd7wkjtH = BigInt("558")
		const addressm06JCTX = "0x0000000000000000000000000000000000000001"
		const addressD4aPSRJ = accounts[1]
		const uintOYrH6GF = BigInt("729")
		const boolOa5Zrq = await LedgisAiUwr6t.transferWithLockAfter.call(addressm06JCTX, uintd7wkjtH, uintWUipneP, {from: accounts[1]});
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressD4aPSRJ, {from: accounts[2]});
		const uint256UvO4j9 = await LedgisAiUwr6t.afterTime.call(uintOYrH6GF, {from: accounts[1]});

		assert.equal(boolOa5Zrq, true)
		assert.equal(uint256UvO4j9, BigInt("1630230785"))
		assert.equal(uint256rmFP5cA, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const uintwzEBrTM = BigInt("2000")
		const addressKGPdJK = accounts[0]
		const addressnEpeX47 = accounts[4]
		const addresswaNN9Uf = accounts[1]
		const uintTI32t2k = BigInt("339")
		const uintj4eSx1J = BigInt("836")
		const addressebXWQLp = accounts[4]
		const uintLCJSnZm = BigInt("1586")
		const boolN55KPt9 = await LedgisAiUwr6t.increaseAllowance.call(addressKGPdJK, uintwzEBrTM, {from: accounts[3]});
		const addressQVkQo0a = await LedgisAiUwr6t.transferOwnership.call(addressnEpeX47, {from: accounts[1]});
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addresswaNN9Uf, {from: accounts[2]});
		const boolNYOrR9 = await LedgisAiUwr6t.transferWithLockAfter.call(addressebXWQLp, uintj4eSx1J, uintTI32t2k, {from: accounts[1]});
		const uint256cd5vlW9 = await LedgisAiUwr6t.afterTime.call(uintLCJSnZm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolN55KPt9, true)
		assert.equal(boolNYOrR9, true)
		assert.equal(uint256cd5vlW9, BigInt("1630231651"))
		assert.equal(uint256rmFP5cA, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const uintkwpx5zr = BigInt("2006")
		const uintoCdJ7ue = BigInt("506")
		const addressB9YYyF8 = accounts[2]
		const addressw9rmkR = accounts[4]
		const addressDJDmQ8k = await LedgisAiUwr6t.lockAfter.call(addressB9YYyF8, uintoCdJ7ue, uintkwpx5zr, {from: accounts[1]});
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressw9rmkR, {from: accounts[2]});
		await LedgisAiUwr6t.pause.call({from: accounts[2]});

		await expect(LedgisAiUwr6t.lockAfter.call(addressB9YYyF8, uintoCdJ7ue, uintkwpx5zr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressT5OSNFW = accounts[2]
		const uintCrHpxsn = BigInt("1065")
		const uintNJxkar = BigInt("1484")
		const addresspmnLbiL = accounts[4]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressT5OSNFW, {from: accounts[2]});
		const addressYCrHQhP = await LedgisAiUwr6t.lock.call(addresspmnLbiL, uintNJxkar, uintCrHpxsn, {from: accounts[1]});

		assert.equal(uint256rmFP5cA, BigInt("0"))
		await expect(LedgisAiUwr6t.lock.call(addresspmnLbiL, uintNJxkar, uintCrHpxsn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addresszXLOv5 = accounts[1]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addresszXLOv5, {from: accounts[2]});
		await LedgisAiUwr6t.pause.call({from: accounts[1]});
		await LedgisAiUwr6t.whenPaused.call({from: accounts[2]});

		assert.equal(uint256rmFP5cA, BigInt("10000000000000"))
		await expect(LedgisAiUwr6t.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressMOk9ATV = accounts[1]
		const addressQvwix5k = accounts[0]
		const uintv3ol2ct = BigInt("1672")
		const addressrTIDKIx = accounts[1]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressMOk9ATV, {from: accounts[2]});
		const uint256ZR312VR = await LedgisAiUwr6t.balanceOf.call(addressQvwix5k, {from: accounts[3]});
		const addressVjM0TXj = await LedgisAiUwr6t.burn.call(addressrTIDKIx, uintv3ol2ct, {from: accounts[1]});
		await LedgisAiUwr6t.whenNotPaused.call({from: accounts[4]});

		assert.equal(uint256ZR312VR, BigInt("0"))
		assert.equal(uint256rmFP5cA, BigInt("10000000000000"))
		await expect(LedgisAiUwr6t.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressYKRqdqV = accounts[2]
		const addressqRnLGGk = accounts[4]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressYKRqdqV, {from: accounts[2]});
		const addressr0BpbU = await LedgisAiUwr6t.freeze.call(addressqRnLGGk, {from: accounts[1]});

		assert.equal(uint256rmFP5cA, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressSlyS8Nw = accounts[0]
		const uintAP4hsEv = BigInt("59")
		const uinthtEtmW4 = BigInt("1708")
		const addressvzuo01S = accounts[1]
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressSlyS8Nw, {from: accounts[2]});
		const boolqTiSCi7 = await LedgisAiUwr6t.transferWithLock.call(addressvzuo01S, uinthtEtmW4, uintAP4hsEv, {from: accounts[1]});

		assert.equal(boolqTiSCi7, true)
		assert.equal(uint256rmFP5cA, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisJpdSryd = await Ledgis.new({from: accounts[2]});
		const uintKT6hBB8 = BigInt("537")
		const uintWQFQqjk = BigInt("844")
		const addresssmjDyzS = accounts[2]
		const uintP5pEGj0 = BigInt("724")
		const addressc5rSa4V = accounts[4]
		const uintwY7jR2p = BigInt("789")
		const addressuhwLjq8 = accounts[0]
		const boolOLYzjhW = await LedgisJpdSryd.transferWithLockAfter.call(addresssmjDyzS, uintWQFQqjk, uintKT6hBB8, {from: accounts[2]});
		await LedgisJpdSryd.renounceOwnership.call({from: accounts[2]});
		const boolC2bZsgC = await LedgisJpdSryd.transfer.call(addressc5rSa4V, uintP5pEGj0, {from: accounts[0]});
		const boolAvWiwH = await LedgisJpdSryd.approve.call(addressuhwLjq8, uintwY7jR2p, {from: accounts[4]});

		assert.equal(boolOLYzjhW, true)
		await expect(LedgisJpdSryd.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAiUwr6t = await Ledgis.new({from: accounts[1]});
		const addressYcGabS = accounts[4]
		const uintW6SJq5q = BigInt("910")
		const uintxRmwxjd = BigInt("675")
		const addressjGrHXrZ = accounts[1]
		const uintHs6VnR = BigInt("1850")
		const uintR96GhfK = BigInt("449")
		const addressEWXwcQ = accounts[3]
		const addressgtWosm8 = accounts[1]
		const addressYk961p = await LedgisAiUwr6t.unfreeze.call(addressYcGabS, {from: accounts[1]});
		const addressXDdsnZa = await LedgisAiUwr6t.lockAfter.call(addressjGrHXrZ, uintxRmwxjd, uintW6SJq5q, {from: accounts[1]});
		const addressFjJN4f4 = await LedgisAiUwr6t.lock.call(addressEWXwcQ, uintR96GhfK, uintHs6VnR, {from: accounts[1]});
		const uint256rmFP5cA = await LedgisAiUwr6t.balanceOf.call(addressgtWosm8, {from: accounts[2]});

		await expect(LedgisAiUwr6t.lock.call(addressEWXwcQ, uintR96GhfK, uintHs6VnR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})