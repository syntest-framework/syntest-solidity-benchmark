const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringERxc5qx = "S1jt2TaH8DXSxjJlFiHJa9nee2fbVKGxIUmW44zvfAR9rHYYrHLCrzKaMAcM9MqRpwDMHLX5pSFMweNHRvtmOip32c"
		const stringTPw5sY = "bd3FIToEBgRCI7yo2cFHTPbBWva1COdmRIi"
		const uintkvGSARX = BigInt("14")
		const WheatFarmMQyO2So = await WheatFarm.new(stringERxc5qx, stringTPw5sY, uintkvGSARX, {from: accounts[3]});
		const uintoaQ07Hw = BigInt("1553")
		const addresseploJoc = accounts[2]
		const uintRiBo6Td = BigInt("1108")
		const addressGChpTPO = accounts[0]
		const uintz1vOAS = BigInt("1003")
		const addressv3PEAup = accounts[3]
		const stringHXF6EDJ = await WheatFarmMQyO2So.name.call({from: accounts[2]});
		const boolSDB6Ai1 = await WheatFarmMQyO2So.transfer.call(addresseploJoc, uintoaQ07Hw, {from: accounts[0]});
		const booleXnoeL = await WheatFarmMQyO2So.transfer.call(addressGChpTPO, uintRiBo6Td, {from: accounts[1]});
		const booldSIE4q5 = await WheatFarmMQyO2So.transfer.call(addressv3PEAup, uintz1vOAS, {from: accounts[3]});

		assert.equal(stringHXF6EDJ, "S1jt2TaH8DXSxjJlFiHJa9nee2fbVKGxIUmW44zvfAR9rHYYrHLCrzKaMAcM9MqRpwDMHLX5pSFMweNHRvtmOip32c")
		await expect(WheatFarmMQyO2So.transfer.call(addresseploJoc, uintoaQ07Hw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringp4V7ihv = "I6UKNlEuvKEQXJfhomxKgWaFmuv9J9PO8fNU4ykNrgs8p8WYYqa6Zr9FJ1R6CSPqREHxFS3Xybpj"
		const stringUepUCoU = "0oiIO8yr8qz7UyOJbeoCnS61YBYwDB6ib1rxHcQZLE6HyK7vtMf4kPGPznNaDzJUr8686Hp1pKkqwXypYHR"
		const uintSeWfqgg = BigInt("186")
		const WheatFarmYC85w8W = await WheatFarm.new(stringp4V7ihv, stringUepUCoU, uintSeWfqgg, {from: accounts[2]});
		const uintIg0irkj = BigInt("656")
		const address9br4we = accounts[4]
		const uintyfuXjoD = BigInt("1450")
		const addressZnDnLUy = accounts[1]
		const uintIWSj1ym = BigInt("233")
		const addressXL2B7ER = accounts[3]
		const addressKj1Lbu = "0x0000000000000000000000000000000000000001"
		const uintrZG6AH = BigInt("1771")
		const addressdXncmQ2 = accounts[4]
		const boolJFMsqU0 = await WheatFarmYC85w8W.increaseAllowance.call(address9br4we, uintIg0irkj, {from: accounts[3]});
		const boolXp049W = await WheatFarmYC85w8W.increaseAllowance.call(addressZnDnLUy, uintyfuXjoD, {from: accounts[1]});
		const boolvbahWZR = await WheatFarmYC85w8W.transferFrom.call(addressKj1Lbu, addressXL2B7ER, uintIWSj1ym, {from: accounts[1]});
		const boolYYM4Lfm = await WheatFarmYC85w8W.approve.call(addressdXncmQ2, uintrZG6AH, {from: accounts[0]});

		await expect(WheatFarmYC85w8W.increaseAllowance.call(address9br4we, uintIg0irkj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringQX1wdA = "REyw3odPyRMERTjqglwXAlBGf1YQOTQdS3IlasbPHUoKYibHM7yqXv7oV"
		const stringxl0lhLz = "VsDMAPPzo"
		const uintBhNfUw = BigInt("1918")
		const WheatFarmHTWTcm = await WheatFarm.new(stringQX1wdA, stringxl0lhLz, uintBhNfUw, {from: accounts[0]});
		const uintfAP161V = BigInt("1862")
		const addressFgFND8e = "0x0000000000000000000000000000000000000001"
		const addressytFQVQq = accounts[3]
		const addressjHQnD1E = accounts[3]
		const uint9jibIJ = BigInt("182")
		const addressjtaaxt6 = accounts[2]
		const uint8tM6ZUhI = await WheatFarmHTWTcm.decimals.call({from: accounts[0]});
		const boolh9C2O3M = await WheatFarmHTWTcm.approve.call(addressFgFND8e, uintfAP161V, {from: accounts[0]});
		const uintd9aIhDR = await WheatFarmHTWTcm.allowance.call(addressjHQnD1E, addressytFQVQq, {from: accounts[3]});
		const boolbkGvDU = await WheatFarmHTWTcm.approve.call(addressjtaaxt6, uint9jibIJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbkGvDU, true)
		assert.equal(boolh9C2O3M, true)
		assert.equal(uint8tM6ZUhI, BigInt("18"))
		assert.equal(uintd9aIhDR, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringeubCh7m = "18UDVGnJ7HaFAMwPvVal8Jwyyrh2UYzKCPAy8oXkpmQCDxYhKBXrNf2oZCYn7DTHKmTHd59wHi2jDLy74mJn5MKAwWu"
		const stringMr9vYpT = "xMgjK4cG"
		const uintFNQNp5u = BigInt("139")
		const WheatFarmahnm5kj = await WheatFarm.new(stringeubCh7m, stringMr9vYpT, uintFNQNp5u, {from: accounts[0]});
		const addressOkTMNVl = accounts[0]
		const uintl3PowjX = BigInt("566")
		const addressDBNOUp = accounts[0]
		const addressKKAzlWg = accounts[3]
		const addressei2C3e = accounts[1]
		const uintggGmSoU = await WheatFarmahnm5kj.balanceOf.call(addressOkTMNVl, {from: "0x0000000000000000000000000000000000000001"});
		const boolfJacccW = await WheatFarmahnm5kj.transfer.call(addressDBNOUp, uintl3PowjX, {from: accounts[2]});
		const uintlSIoeMk = await WheatFarmahnm5kj.allowance.call(addressei2C3e, addressKKAzlWg, {from: accounts[0]});
		const uint8rHLhFEc = await WheatFarmahnm5kj.decimals.call({from: accounts[2]});

		assert.equal(uintggGmSoU, BigInt("139000000000000000000"))
		await expect(WheatFarmahnm5kj.transfer.call(addressDBNOUp, uintl3PowjX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringkpDGwfx = "WQ"
		const stringD7T72P = "kp78aYD1cxsNONxewp5FZMH"
		const uintPhopKFq = BigInt("244")
		const WheatFarmGvaFNKc = await WheatFarm.new(stringkpDGwfx, stringD7T72P, uintPhopKFq, {from: accounts[1]});
		const addressM10J9yb = "0x0000000000000000000000000000000000000001"
		const uintaxSIDX = BigInt("832")
		const addressGzniGyp = accounts[1]
		const uintA7KK2eM = BigInt("1956")
		const addressVT7oRRO = accounts[0]
		const uinteF2vDSD = BigInt("1241")
		const addressXeo8L9X = accounts[2]
		const uintJ3kzck3 = await WheatFarmGvaFNKc.balanceOf.call(addressM10J9yb, {from: accounts[0]});
		const boollmla9fp = await WheatFarmGvaFNKc.transfer.call(addressGzniGyp, uintaxSIDX, {from: accounts[1]});
		const boolxjEbHdg = await WheatFarmGvaFNKc.approveAndCall.call(addressVT7oRRO, uintA7KK2eM, {from: accounts[3]});
		const boolf4xUKwg = await WheatFarmGvaFNKc.decreaseAllowance.call(addressXeo8L9X, uinteF2vDSD, {from: accounts[4]});

		assert.equal(boollmla9fp, true)
		assert.equal(uintJ3kzck3, BigInt("0"))
		await expect(WheatFarmGvaFNKc.approveAndCall.call(addressVT7oRRO, uintA7KK2eM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringtToVqDs = "QpKpiCzYE4qpVR0VyDLaECTPktGmdz4V3uBqFlRxWhtECSA4ytgRS8aJ9EpkYgFaLk57NkuhJ"
		const stringEo30mYv = "pYiIGrEldf1Ycu8dse3OlkPtThjZYbtA0VOdsVapnueUUQI3VxgZ1d8R5ADkEGt3Mp5mSWNMs"
		const uinttwSPLy = BigInt("1294")
		const WheatFarmXLcUTsI = await WheatFarm.new(stringtToVqDs, stringEo30mYv, uinttwSPLy, {from: accounts[1]});
		const uintMNcykZs = BigInt("113")
		const addressnzOYQCt = accounts[5]
		const addressZJSOsYw = accounts[2]
		const uintvCLu7Ai = BigInt("2034")
		const addressT6pkei = accounts[4]
		const addressYTLDsxo = accounts[5]
		const boolA2Iinwg = await WheatFarmXLcUTsI.approveAndCall.call(addressnzOYQCt, uintMNcykZs, {from: accounts[1]});
		const uint8nZAmsvV = await WheatFarmXLcUTsI.decimals.call({from: accounts[5]});
		const uintwzJl8TE = await WheatFarmXLcUTsI.balanceOf.call(addressZJSOsYw, {from: accounts[0]});
		const boolNNFhjTJ = await WheatFarmXLcUTsI.increaseAllowance.call(addressT6pkei, uintvCLu7Ai, {from: accounts[2]});
		const uintgBLJcdp = await WheatFarmXLcUTsI.balanceOf.call(addressYTLDsxo, {from: accounts[2]});

		assert.equal(boolA2Iinwg, true)
		assert.equal(uint8nZAmsvV, BigInt("18"))
		assert.equal(uintwzJl8TE, BigInt("0"))
		await expect(WheatFarmXLcUTsI.increaseAllowance.call(addressT6pkei, uintvCLu7Ai, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringL1rEd3H = "VgxDl8HGIhHnS0kdNsYFT4Mz96fdubmIYRt3kZle"
		const stringKNMi1nI = "KHw4bnPti3kI2TzuvvwfMQ8q3YGFWSbHc3ejxg8Y14GnWSu3G"
		const uintADMxff = BigInt("8")
		const WheatFarmekw3LB3 = await WheatFarm.new(stringL1rEd3H, stringKNMi1nI, uintADMxff, {from: accounts[2]});
		const addressExCWbzb = accounts[4]
		const uintODyVUyl = BigInt("249")
		const addressNnfvjod = accounts[5]
		const boolaDMYl4D = await WheatFarmekw3LB3.transferownership.call(addressExCWbzb, {from: accounts[2]});
		const boolUjhwp2Z = await WheatFarmekw3LB3.transfer.call(addressNnfvjod, uintODyVUyl, {from: accounts[3]});

		assert.equal(boolaDMYl4D, true)
		await expect(WheatFarmekw3LB3.transfer.call(addressNnfvjod, uintODyVUyl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringUiWDx8N = "goBL8mcrWQ7IGWiU4edwz1YHnLdSMelrl8ijsO7UzITjs5CuUsMwVcOGPtT35ogA4qQh"
		const stringdCt1TUU = "rOwkX7f6w0pTlvIDmJBfu43hgj1NPaN48JaHwaiU75vu5TFNJA7Ys3JRjJRFcnPowo01gHyRKTQR42ss7CmMW8asE67"
		const uintmOhSv7c = BigInt("59")
		const WheatFarmmo7EWyP = await WheatFarm.new(stringUiWDx8N, stringdCt1TUU, uintmOhSv7c, {from: "0x0000000000000000000000000000000000000001"});
		const uintNReaphe = BigInt("932")
		const addressSgO8lNh = accounts[3]
		const uintYiMk6c = BigInt("682")
		const addresszekCUGt = accounts[0]
		const uintdZU0sz = BigInt("693")
		const addressWCtjy6h = "0x0000000000000000000000000000000000000001"
		const addressPoHhBSx = accounts[1]
		const uint8LeVHo6 = await WheatFarmmo7EWyP.decimals.call({from: accounts[0]});
		const booldJO2bpY = await WheatFarmmo7EWyP.approve.call(addressSgO8lNh, uintNReaphe, {from: accounts[0]});
		const boolNH3PwlO = await WheatFarmmo7EWyP.approve.call(addresszekCUGt, uintYiMk6c, {from: accounts[2]});
		const boolZnOiOVl = await WheatFarmmo7EWyP.transferFrom.call(addressPoHhBSx, addressWCtjy6h, uintdZU0sz, {from: accounts[0]});
		const uint8oY7qQ8x = await WheatFarmmo7EWyP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WheatFarm', async () => {
		const stringL1rEd3H = "VgxDl8HGIhHnS0kdNsYFT4Mz96fdubmIYRt3kZle"
		const stringKNMi1nI = "KHw4bnPti3kI2TzuvvwfMQ8q3YGFWSbHc3ejxg8Y14GnWSu3G"
		const uintidCOoms = BigInt("8")
		const WheatFarmekw3LB3 = await WheatFarm.new(stringL1rEd3H, stringKNMi1nI, uintidCOoms, {from: accounts[2]});
		const uintU6IE0pu = BigInt("0")
		const addresswHddXej = accounts[2]
		const uintRLYFYXZ = BigInt("359")
		const addressLvxrBnK = accounts[3]
		const uintqr9WzVN = BigInt("241")
		const addressEHAvkym = accounts[5]
		const uintgp6acJB = await WheatFarmekw3LB3.totalSupply.call({from: accounts[0]});
		const boolPISDkFS = await WheatFarmekw3LB3.transfer.call(addresswHddXej, uintU6IE0pu, {from: accounts[4]});
		const boolzBW05Fn = await WheatFarmekw3LB3.approve.call(addressLvxrBnK, uintRLYFYXZ, {from: accounts[0]});
		const boolUjhwp2Z = await WheatFarmekw3LB3.transfer.call(addressEHAvkym, uintqr9WzVN, {from: accounts[3]});

		assert.equal(boolPISDkFS, true)
		assert.equal(boolzBW05Fn, true)
		assert.equal(uintgp6acJB, BigInt("8000000000000000000"))
		await expect(WheatFarmekw3LB3.transfer.call(addressEHAvkym, uintqr9WzVN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})