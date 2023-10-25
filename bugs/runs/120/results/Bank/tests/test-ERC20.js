const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractbXD5AOc = await ERC20.new({from: accounts[1]});
		const addedValueJvDYNV = BigInt("1711")
		const spender2q0G7k = accounts[3]
		const valuei9Ldbpb = BigInt("1851")
		const spendergSpss55 = accounts[1]
		const nullwEsZiMQ = await contractbXD5AOc.increaseAllowance.call(spender2q0G7k, addedValueJvDYNV, {from: accounts[2]});
		const nullBpDsKo9 = await contractbXD5AOc.approve.call(spendergSpss55, valuei9Ldbpb, {from: accounts[3]});
		const nullaVZXDDF = await contractbXD5AOc.totalSupply.call({from: accounts[2]});

		assert.equal(nullBpDsKo9, true)
		assert.equal(nullaVZXDDF, 0)
		assert.equal(nullwEsZiMQ, true)
	});

	it('test for ERC20', async () => {
		const contractl8DIpsc = await ERC20.new({from: accounts[2]});
		const valueq4Grk51 = BigInt("935")
		const spenderm4SeUlw = accounts[3]
		const valueptfbXNv = BigInt("1308")
		const spenderVLbhWTy = accounts[0]
		const valuejdmczD8 = BigInt("519")
		const tom6M8tyz = accounts[1]
		const fromuwbFl98 = accounts[2]
		const addedValueqKcx7pz = BigInt("318")
		const spendertB4gbzx = accounts[2]
		const valuegII84mi = BigInt("334")
		const toTanQJrg = accounts[2]
		const fromHK8MBif = accounts[2]
		const nullFKQoRJ2 = await contractl8DIpsc.approve.call(spenderm4SeUlw, valueq4Grk51, {from: accounts[0]});
		const nullecf7i6X = await contractl8DIpsc.approve.call(spenderVLbhWTy, valueptfbXNv, {from: accounts[3]});
		const nullw90fII = await contractl8DIpsc.transferFrom.call(fromuwbFl98, tom6M8tyz, valuejdmczD8, {from: accounts[4]});
		const nullJqvkZSu = await contractl8DIpsc.increaseAllowance.call(spendertB4gbzx, addedValueqKcx7pz, {from: accounts[2]});
		const nullFD6EsTN = await contractl8DIpsc.transferFrom.call(fromHK8MBif, toTanQJrg, valuegII84mi, {from: accounts[1]});

		assert.equal(nullFKQoRJ2, true)
		assert.equal(nullecf7i6X, true)
		await expect(contractl8DIpsc.transferFrom.call(fromuwbFl98, tom6M8tyz, valuejdmczD8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractuL8x4ld = await ERC20.new({from: accounts[4]});
		const valuemG3qoqL = BigInt("780")
		const spenderoGmIxhr = "0x0000000000000000000000000000000000000001"
		const ownerwMcNVPm = accounts[3]
		const valueC911i6C = BigInt("399")
		const toruhEgry = accounts[3]
		const fromx5ZoFYN = accounts[0]
		const null8YzuKg = await contractuL8x4ld.approve.call(spenderoGmIxhr, valuemG3qoqL, {from: accounts[0]});
		const nullHqQxkPd = await contractuL8x4ld.balanceOf.call(ownerwMcNVPm, {from: accounts[1]});
		const nullVTwxuJs = await contractuL8x4ld.transferFrom.call(fromx5ZoFYN, toruhEgry, valueC911i6C, {from: accounts[4]});

		assert.equal(null8YzuKg, true)
		assert.equal(nullHqQxkPd, 0)
		await expect(contractuL8x4ld.transferFrom.call(fromx5ZoFYN, toruhEgry, valueC911i6C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractYUZbKKP = await ERC20.new({from: accounts[2]});
		const valuegQWUz7k = BigInt("590")
		const spenderBvFEpgo = accounts[2]
		const valueiGS4Ywu = BigInt("1805")
		const toJL2PTqD = accounts[0]
		const addedValuetYvk9y7 = BigInt("1867")
		const spenderxil3TC = accounts[0]
		const ownersL2Rxhq = accounts[3]
		const valuexfwil6Y = BigInt("161")
		const spenderZP82ypC = accounts[4]
		const spenderTrHE8Vf = accounts[3]
		const owneravzE9s3 = "0x0000000000000000000000000000000000000001"
		const nulllQMlL7o = await contractYUZbKKP.approve.call(spenderBvFEpgo, valuegQWUz7k, {from: accounts[3]});
		const nullLN6JhI9 = await contractYUZbKKP.transfer.call(toJL2PTqD, valueiGS4Ywu, {from: accounts[5]});
		const nullniWQApW = await contractYUZbKKP.increaseAllowance.call(spenderxil3TC, addedValuetYvk9y7, {from: accounts[0]});
		const nullz01YffY = await contractYUZbKKP.balanceOf.call(ownersL2Rxhq, {from: accounts[5]});
		const nullbZ4KH2F = await contractYUZbKKP.approve.call(spenderZP82ypC, valuexfwil6Y, {from: "0x0000000000000000000000000000000000000001"});
		const nullVngTdys = await contractYUZbKKP.allowance.call(owneravzE9s3, spenderTrHE8Vf, {from: accounts[1]});

		assert.equal(nulllQMlL7o, true)
		await expect(contractYUZbKKP.transfer.call(toJL2PTqD, valueiGS4Ywu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractsz3Izfv = await ERC20.new({from: accounts[3]});
		const spenderHkfQxuv = accounts[2]
		const ownerfAalWyQ = accounts[4]
		const subtractedValueVcgTPY = BigInt("499")
		const spenderZyjo6ce = accounts[5]
		const valuertpVqqa = BigInt("552")
		const tolmqZTi3 = accounts[4]
		const valueMabQEAZ = BigInt("267")
		const to7utNPM = accounts[3]
		const fromh5ddz7N = accounts[0]
		const nullD7dJzGX = await contractsz3Izfv.allowance.call(ownerfAalWyQ, spenderHkfQxuv, {from: accounts[2]});
		const nulle383Z7i = await contractsz3Izfv.decreaseAllowance.call(spenderZyjo6ce, subtractedValueVcgTPY, {from: accounts[4]});
		const nullMD5bvzn = await contractsz3Izfv.totalSupply.call({from: accounts[4]});
		const nullqY4lTn = await contractsz3Izfv.transfer.call(tolmqZTi3, valuertpVqqa, {from: accounts[0]});
		const nullNN8hND = await contractsz3Izfv.transferFrom.call(fromh5ddz7N, to7utNPM, valueMabQEAZ, {from: accounts[0]});

		assert.equal(nullD7dJzGX, 0)
		await expect(contractsz3Izfv.decreaseAllowance.call(spenderZyjo6ce, subtractedValueVcgTPY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractqQYtOg = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerwsLHP02 = accounts[0]
		const valueVfebTg8 = BigInt("1589")
		const touuAUWBd = accounts[1]
		const fromoZQRGg = accounts[0]
		const valueKmFCqZh = BigInt("1930")
		const spenderj2Rb2To = accounts[2]
		const valueuG3886W = BigInt("717")
		const toYmWfOax = accounts[0]
		const fromcGsIJ8Q = accounts[0]
		const spenderLZ5jprS = accounts[0]
		const ownerk0Hpnva = accounts[0]
		const nullCTor6an = await contractqQYtOg.balanceOf.call(ownerwsLHP02, {from: accounts[3]});
		const nullTfPfrkw = await contractqQYtOg.transferFrom.call(fromoZQRGg, touuAUWBd, valueVfebTg8, {from: accounts[0]});
		const nullxpfXOoI = await contractqQYtOg.approve.call(spenderj2Rb2To, valueKmFCqZh, {from: accounts[2]});
		const nullaIqwrhQ = await contractqQYtOg.transferFrom.call(fromcGsIJ8Q, toYmWfOax, valueuG3886W, {from: accounts[4]});
		const nullka3zcJc = await contractqQYtOg.allowance.call(ownerk0Hpnva, spenderLZ5jprS, {from: accounts[0]});
	});
})