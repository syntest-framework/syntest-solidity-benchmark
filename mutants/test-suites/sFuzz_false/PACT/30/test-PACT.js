const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTkyzb5zs = await PACT.new({from: accounts[1]});
		const uintPnlAOFO = BigInt("279")
		const addressdonl2hx = accounts[1]
		const uintTBkxvZf = BigInt("1462")
		const addressHnNvE5B = accounts[1]
		const addressmwn3a6v = accounts[5]
		const addressZqBAcca = "0x0000000000000000000000000000000000000001"
		const uintwzQxFb = BigInt("336")
		const addressMl2voza = accounts[2]
		const addressHsLCBqK = accounts[0]
//		const boolidKhSx8 = await PACTkyzb5zs.transfer.call(addressdonl2hx, uintPnlAOFO, {from: accounts[2]});
//		const stringvdmhguM = await PACTkyzb5zs.name.call({from: accounts[0]});
//		const boolBFKUL7L = await PACTkyzb5zs.transferFrom.call(addressmwn3a6v, addressHnNvE5B, uintTBkxvZf, {from: accounts[2]});
//		const stringbkWscbu = await PACTkyzb5zs.name.call({from: accounts[2]});
//		const boolADnGvwi = await PACTkyzb5zs.setupBasePool.call(addressZqBAcca, {from: accounts[4]});
//		const boolzMjYcOd = await PACTkyzb5zs.transferFrom.call(addressHsLCBqK, addressMl2voza, uintwzQxFb, {from: accounts[1]});

		await expect(PACTkyzb5zs.transfer.call(addressdonl2hx, uintPnlAOFO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT0y7clX = await PACT.new({from: accounts[0]});
		const addressLky9ukW = accounts[2]
		const addressw3uG2rT = accounts[4]
		const uintpQhd7jj = await PACT0y7clX.balanceOf.call(addressLky9ukW, {from: accounts[3]});
		const uintXV5MRp2 = await PACT0y7clX.balanceOf.call(addressw3uG2rT, {from: accounts[2]});
		const stringFtRyCAI = await PACT0y7clX.name.call({from: accounts[4]});

		assert.equal(stringFtRyCAI, "P2PB2B community token")
		assert.equal(uintXV5MRp2, BigInt("0"))
		assert.equal(uintpQhd7jj, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTj1lHEu4 = await PACT.new({from: accounts[3]});
		const uints75agxK = BigInt("477")
		const addressVFlwFui = accounts[0]
		const addresshheIuHT = accounts[0]
		const uintMK0rZ9N = BigInt("1138")
		const addressDcR0ki = accounts[4]
		const uintx8RzEuf = BigInt("1876")
		const addressMEU1gW = accounts[2]
//		const boolm0Ixr5 = await PACTj1lHEu4.burn.call(addressVFlwFui, uints75agxK, {from: accounts[0]});
//		const boolTQrYEGi = await PACTj1lHEu4.setupRewards.call(addresshheIuHT, {from: accounts[1]});
//		const boolhJ9GbsV = await PACTj1lHEu4.burn.call(addressDcR0ki, uintMK0rZ9N, {from: accounts[2]});
//		const boolNWRZgdO = await PACTj1lHEu4.approve.call(addressMEU1gW, uintx8RzEuf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTj1lHEu4.burn.call(addressVFlwFui, uints75agxK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTXe1cbv5 = await PACT.new({from: accounts[1]});
		const addressPHeCFjf = accounts[2]
		const uint8CnJWfxS = await PACTXe1cbv5.decimals.call({from: accounts[3]});
		const uintUsNc9Xe = await PACTXe1cbv5.balanceOf.call(addressPHeCFjf, {from: accounts[1]});
		const uint8nMcdutL = await PACTXe1cbv5.decimals.call({from: accounts[2]});

		assert.equal(uint8CnJWfxS, BigInt("18"))
		assert.equal(uint8nMcdutL, BigInt("18"))
		assert.equal(uintUsNc9Xe, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTfpFnKdB = await PACT.new({from: accounts[3]});
		const uintDvn6BR = BigInt("1824")
		const addressnWr6jGB = accounts[1]
		const addressbe2QMeF = accounts[1]
		const addressrea7N5c = accounts[0]
		const stringNNbLsD = await PACTfpFnKdB.symbol.call({from: accounts[1]});
//		const boolTFr4ncv = await PACTfpFnKdB.transferFrom.call(addressbe2QMeF, addressnWr6jGB, uintDvn6BR, {from: accounts[5]});
//		const stringHt6cw0h = await PACTfpFnKdB.symbol.call({from: accounts[3]});
//		const uintO9vTATf = await PACTfpFnKdB.balanceOf.call(addressrea7N5c, {from: accounts[4]});

		assert.equal(stringNNbLsD, "PACT")
		await expect(PACTfpFnKdB.transferFrom.call(addressbe2QMeF, addressnWr6jGB, uintDvn6BR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTZ76ibcF = await PACT.new({from: accounts[1]});
		const addressY0Fp9kL = accounts[2]
		const addressnSBWBdX = "0x0000000000000000000000000000000000000001"
		const addressbKCbz50 = accounts[4]
		const addressM5E6vOK = accounts[4]
		const uintXc051bm = await PACTZ76ibcF.allowance.call(addressnSBWBdX, addressY0Fp9kL, {from: accounts[0]});
//		const boolWIL6Ty1 = await PACTZ76ibcF.setupTeam.call(addressbKCbz50, {from: accounts[3]});
//		const stringbftBxr = await PACTZ76ibcF.name.call({from: accounts[3]});
//		const boolBl07A1b = await PACTZ76ibcF.setupBasePool.call(addressM5E6vOK, {from: accounts[4]});
//		const uintuAO308 = await PACTZ76ibcF.totalSupply.call({from: accounts[4]});

		assert.equal(uintXc051bm, BigInt("0"))
		await expect(PACTZ76ibcF.setupTeam.call(addressbKCbz50, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTJEHFrN = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYkJIRj4 = accounts[0]
		const addresspiCny7V = accounts[4]
		const stringSln9r2D = await PACTJEHFrN.symbol.call({from: accounts[0]});
		const uint8eiiGZQi = await PACTJEHFrN.decimals.call({from: accounts[5]});
		const boolgQk6tMA = await PACTJEHFrN.setupTeam.call(addressYkJIRj4, {from: accounts[4]});
		const booljeJoGDm = await PACTJEHFrN.setupTeam.call(addresspiCny7V, {from: accounts[4]});
		const stringCoM2Vbi = await PACTJEHFrN.symbol.call({from: accounts[1]});
	});

	it('test for PACT', async () => {
		const PACTz5pgLGi = await PACT.new({from: accounts[1]});
		const addressDetKrXK = accounts[1]
		const addressJYTkE4k = "0x0000000000000000000000000000000000000001"
		const uintaIcpGh = BigInt("1090")
		const addressnICia5q = accounts[1]
//		const boolWNDQO6U = await PACTz5pgLGi.setupRewards.call(addressDetKrXK, {from: accounts[3]});
//		const uintl7awbYx = await PACTz5pgLGi.balanceOf.call(addressJYTkE4k, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfHFqlSc = await PACTz5pgLGi.approve.call(addressnICia5q, uintaIcpGh, {from: accounts[2]});

		await expect(PACTz5pgLGi.setupRewards.call(addressDetKrXK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT0y7clX = await PACT.new({from: accounts[0]});
		const addressWhCelZh = accounts[2]
		const addressoSI927w = accounts[3]
		const addressDMARwDg = accounts[4]
		const uint8neLxAmN = await PACT0y7clX.decimals.call({from: accounts[5]});
		const uintpQhd7jj = await PACT0y7clX.balanceOf.call(addressWhCelZh, {from: accounts[3]});
//		const boolPZkfq6S = await PACT0y7clX.setupBasePool.call(addressoSI927w, {from: accounts[5]});
//		const uintXV5MRp2 = await PACT0y7clX.balanceOf.call(addressDMARwDg, {from: accounts[2]});
//		const stringFtRyCAI = await PACT0y7clX.name.call({from: accounts[4]});

		assert.equal(uint8neLxAmN, BigInt("18"))
		assert.equal(uintpQhd7jj, BigInt("0"))
		await expect(PACT0y7clX.setupBasePool.call(addressoSI927w, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT0y7clX = await PACT.new({from: accounts[0]});
		const addressFKYm20C = accounts[3]
		const addressn0nhpIf = accounts[4]
		const addressj0rLLsj = accounts[0]
		const addressgxA0mH2 = "0x0000000000000000000000000000000000000001"
		const uintpQhd7jj = await PACT0y7clX.balanceOf.call(addressFKYm20C, {from: accounts[3]});
		const uintXV5MRp2 = await PACT0y7clX.balanceOf.call(addressn0nhpIf, {from: accounts[2]});
//		const booleuI6pcc = await PACT0y7clX.setupReserve.call(addressj0rLLsj, {from: accounts[3]});
//		const booljCnQSoX = await PACT0y7clX.setupBasePool.call(addressgxA0mH2, {from: accounts[0]});
//		const stringFtRyCAI = await PACT0y7clX.name.call({from: accounts[4]});

		assert.equal(uintXV5MRp2, BigInt("0"))
		assert.equal(uintpQhd7jj, BigInt("0"))
		await expect(PACT0y7clX.setupReserve.call(addressj0rLLsj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT0y7clX = await PACT.new({from: accounts[0]});
		const address2I7GQZ = accounts[2]
		const uintE8DFQ5o = BigInt("663")
		const addresssxByDCM = accounts[0]
		const addresskiafp7f = "0x0000000000000000000000000000000000000001"
		const addressczfu9Tq = accounts[5]
		const uintpQhd7jj = await PACT0y7clX.balanceOf.call(address2I7GQZ, {from: accounts[3]});
		const bool6x3Arp = await PACT0y7clX.approve.call(addresssxByDCM, uintE8DFQ5o, {from: accounts[3]});
//		const boolLYBaPPI = await PACT0y7clX.setupBasePool.call(addresskiafp7f, {from: accounts[3]});
//		const uintXV5MRp2 = await PACT0y7clX.balanceOf.call(addressczfu9Tq, {from: accounts[2]});

		assert.equal(bool6x3Arp, true)
		assert.equal(uintpQhd7jj, BigInt("0"))
		await expect(PACT0y7clX.setupBasePool.call(addresskiafp7f, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTE2YxG70 = await PACT.new({from: accounts[1]});
		const uintzCSg0TU = await PACTE2YxG70.totalSupply.call({from: accounts[5]});
		const uintZm6Bd2d = await PACTE2YxG70.totalSupply.call({from: accounts[2]});

		assert.equal(uintZm6Bd2d, BigInt("1000000000000000000000000000"))
		assert.equal(uintzCSg0TU, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACT0y7clX = await PACT.new({from: accounts[0]});
		const addressVEJvxJZ = accounts[3]
		const addressBfF2QOn = accounts[0]
		const uintpQhd7jj = await PACT0y7clX.balanceOf.call(addressVEJvxJZ, {from: accounts[3]});
		const uint8ob1yOPm = await PACT0y7clX.decimals.call({from: accounts[2]});
//		const boolHdV3f5 = await PACT0y7clX.setupFarming.call(addressBfF2QOn, {from: accounts[5]});

		assert.equal(uint8ob1yOPm, BigInt("18"))
		assert.equal(uintpQhd7jj, BigInt("0"))
		await expect(PACT0y7clX.setupFarming.call(addressBfF2QOn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})