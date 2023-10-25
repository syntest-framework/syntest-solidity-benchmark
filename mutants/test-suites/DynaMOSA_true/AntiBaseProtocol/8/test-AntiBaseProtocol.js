const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringZRwIwiD = "wt8Ito7bc4eJObPRjNDRJXbqqF1sJbzlnlxDG1h65LFd2vv3dX8fUNPIQ"
		const stringHHjiORG = "ylXVMSr4s46CjcKqHD52SQTpizLEg91IcphaarTgHt4kB2Deawk4mA3aXvfkt0kiHE6vRyrL"
		const uintLohMLG6 = BigInt("244")
		const AntiBaseProtocolUTneAAX = await AntiBaseProtocol.new(stringZRwIwiD, stringHHjiORG, uintLohMLG6, {from: accounts[0]});
		const uintKMdV5vP = BigInt("1900")
		const addressqTVBCq5 = accounts[5]
		const addressMCUwEAq = accounts[2]
		const addressSZDtuj = accounts[1]
		const addresswd6v8s = await AntiBaseProtocolUTneAAX._mint.call(addressqTVBCq5, uintKMdV5vP, {from: accounts[1]});
		const addressaFjL7n8 = await AntiBaseProtocolUTneAAX.transferOwnership.call(addressMCUwEAq, {from: accounts[3]});
		const addressssO8dZW = await AntiBaseProtocolUTneAAX._transferOwnership.call(addressSZDtuj, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintuO21LXH = BigInt("274")
		const uintBQrzDkR = BigInt("922")
		const addresse2ixAsy = accounts[4]
		const addressSjtr84O = accounts[5]
		const addressp0Rang7 = accounts[2]
		const addressicZcHzT = accounts[5]
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintuO21LXH, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressSjtr84O, addresse2ixAsy, uintBQrzDkR, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressicZcHzT, addressp0Rang7, {from: accounts[5]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressSjtr84O, addresse2ixAsy, uintBQrzDkR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolANsmD3J = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmAzHsar = BigInt("1306")
		const addressGHtNd6M = accounts[2]
		const uintpCvIdi4 = BigInt("693")
		const uintyB6VSVp = BigInt("209")
		const addressLgo84l0 = accounts[4]
		const address69gTNO = accounts[1]
		const addressi3DBRxQ = accounts[1]
		const addressBIgP3wC = accounts[3]
		const uintSzDFId7 = BigInt("1525")
		const boolnNY11M = await AntiBaseProtocolANsmD3J.decreaseAllowance.call(addressGHtNd6M, uintmAzHsar, {from: accounts[1]});
		const uint256FftQzY7 = await AntiBaseProtocolANsmD3J.burn.call(uintpCvIdi4, {from: accounts[0]});
		const boolCeHa4Wt = await AntiBaseProtocolANsmD3J.transferFrom.call(address69gTNO, addressLgo84l0, uintyB6VSVp, {from: accounts[2]});
		const uint256RiGrIXg = await AntiBaseProtocolANsmD3J.allowance.call(addressBIgP3wC, addressi3DBRxQ, {from: accounts[0]});
		const uint256NWcwdpr = await AntiBaseProtocolANsmD3J.findBurnFee.call(uintSzDFId7, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxXmlo1E = await AntiBaseProtocol.new({from: accounts[0]});
		const addressvYzHERr = accounts[0]
//		await AntiBaseProtocolxXmlo1E.renounceOwnership.call({from: accounts[2]});
//		const uint8nvcuzcP = await AntiBaseProtocolxXmlo1E.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressSey3m3m = await AntiBaseProtocolxXmlo1E._transferOwnership.call(addressvYzHERr, {from: accounts[5]});
//		const stringm5ZSKkQ = await AntiBaseProtocolxXmlo1E.name.call({from: accounts[5]});
//		await AntiBaseProtocolxXmlo1E.onlyOwner.call({from: accounts[3]});
//		const uint8Z5MJE8j = await AntiBaseProtocolxXmlo1E.decimals.call({from: accounts[2]});

		await expect(AntiBaseProtocolxXmlo1E.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBLadJOA = await AntiBaseProtocol.new({from: accounts[3]});
		const uintOAhAW5h = BigInt("256")
		const addressGv7wtSW = accounts[4]
		const uintmplXxeR = BigInt("1884")
		const addressRVC83Jh = accounts[0]
//		const addresskEOQWo = await AntiBaseProtocolBLadJOA._burnFrom.call(addressGv7wtSW, uintOAhAW5h, {from: accounts[3]});
//		await AntiBaseProtocolBLadJOA.renounceOwnership.call({from: accounts[2]});
//		const uint256E1Uv5Z = await AntiBaseProtocolBLadJOA.burn.call(uintmplXxeR, {from: accounts[0]});
//		const addressNXE8kyh = await AntiBaseProtocolBLadJOA._transferOwnership.call(addressRVC83Jh, {from: accounts[0]});

		await expect(AntiBaseProtocolBLadJOA._burnFrom.call(addressGv7wtSW, uintOAhAW5h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressajRmAx = accounts[3]
		const addressNkUKuJX = accounts[2]
		const uintq4XVCtI = BigInt("1877")
		const uint8mgc1X = BigInt("274")
		const uintjajUCEW = BigInt("922")
		const addressq3TCTmC = accounts[4]
		const addressANWf1V2 = accounts[5]
		const addresszSQVw7Q = accounts[2]
		const addressjDGRh4o = accounts[5]
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressNkUKuJX, addressajRmAx, {from: accounts[4]});
		const uint256PROlpo = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintq4XVCtI, {from: accounts[1]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uint8mgc1X, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressANWf1V2, addressq3TCTmC, uintjajUCEW, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressjDGRh4o, addresszSQVw7Q, {from: accounts[5]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256PROlpo, BigInt("95"))
		assert.equal(uint256VmIaQY4, BigInt("0"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressANWf1V2, addressq3TCTmC, uintjajUCEW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressCkS6aaX = accounts[3]
		const addressZEzj2ug = accounts[2]
		const uintXJt1L58 = BigInt("1468")
		const addressW806Skl = accounts[5]
		const uintNJ50Mfg = BigInt("1921")
		const uinth5huAp3 = BigInt("274")
		const uintFscXeQd = BigInt("922")
		const addressaTXg0p3 = accounts[4]
		const addressObJBXp7 = accounts[5]
		const addressBz3vBc7 = accounts[2]
		const addressmvgTqSO = accounts[5]
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressZEzj2ug, addressCkS6aaX, {from: accounts[4]});
		const bool0uZs9w = await AntiBaseProtocolM4n1OLQ.approve.call(addressW806Skl, uintXJt1L58, {from: accounts[5]});
		const uint256PROlpo = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintNJ50Mfg, {from: accounts[1]});
		const stringymLLIi = await AntiBaseProtocolM4n1OLQ.name.call({from: accounts[2]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uinth5huAp3, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressObJBXp7, addressaTXg0p3, uintFscXeQd, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressmvgTqSO, addressBz3vBc7, {from: accounts[5]});
//		await AntiBaseProtocolM4n1OLQ.requestGas.call({from: accounts[1]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(bool0uZs9w, true)
		assert.equal(stringymLLIi, "https://t.me/antibaseprotocol")
		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256PROlpo, BigInt("100"))
		assert.equal(uint256VmIaQY4, BigInt("0"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressObJBXp7, addressaTXg0p3, uintFscXeQd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintFWsa4pV = BigInt("261")
		const uintdDp6USn = BigInt("276")
		const addressqKeaRuI = accounts[3]
		const addressxN4n0OR = accounts[2]
		const addresswoZWXc = accounts[6]
		const addressLyMdoCa = accounts[3]
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintFWsa4pV, {from: accounts[2]});
//		const boolRJfRX6 = await AntiBaseProtocolM4n1OLQ.decreaseAllowance.call(addressqKeaRuI, uintdDp6USn, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addresswoZWXc, addressxN4n0OR, {from: accounts[5]});
//		const uint256MwGsOZd = await AntiBaseProtocolM4n1OLQ.balanceOf.call(addressLyMdoCa, {from: accounts[3]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		await expect(AntiBaseProtocolM4n1OLQ.decreaseAllowance.call(addressqKeaRuI, uintdDp6USn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintmzlOQsH = BigInt("290")
		const addressMGvnqE = accounts[0]
		const addresscXGe5Fg = accounts[2]
		const uintARPTAvU = BigInt("1259")
		const uintmLKIoJV = BigInt("274")
		const uintt2BvxVT = BigInt("922")
		const addressfMWN5uX = accounts[4]
		const addressGKmFWP3 = accounts[5]
		const uintwp8z0CI = BigInt("1565")
		const addressrycFM6g = "0x0000000000000000000000000000000000000002"
		const addressO64ZQU = accounts[2]
		const addressq0Dmo7 = accounts[6]
		const uintEXyQN4s = BigInt("290")
//		const boolGAafJIh = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addresscXGe5Fg, addressMGvnqE, uintmzlOQsH, {from: accounts[4]});
//		const uint256BFXf270 = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintARPTAvU, {from: accounts[5]});
//		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintmLKIoJV, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressGKmFWP3, addressfMWN5uX, uintt2BvxVT, {from: accounts[1]});
//		const boolqHJDLgC = await AntiBaseProtocolM4n1OLQ.increaseAllowance.call(addressrycFM6g, uintwp8z0CI, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressq0Dmo7, addressO64ZQU, {from: accounts[5]});
//		const uint256t50JO0d = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintEXyQN4s, {from: "0x0000000000000000000000000000000000000001"});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addresscXGe5Fg, addressMGvnqE, uintmzlOQsH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintwMlxNJ = BigInt("274")
		const uintKZqo75K = BigInt("922")
		const addressUioP98 = accounts[5]
		const addressjtomylB = accounts[5]
		const uintdy26wt3 = BigInt("647")
		const address2Fzbjr = accounts[2]
		const addressrEjRNjp = accounts[5]
		const stringZUehdmS = await AntiBaseProtocolM4n1OLQ.symbol.call({from: accounts[3]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintwMlxNJ, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressjtomylB, addressUioP98, uintKZqo75K, {from: accounts[1]});
//		const uint256wqraSj7 = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintdy26wt3, {from: accounts[2]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressrEjRNjp, address2Fzbjr, {from: accounts[5]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(stringZUehdmS, "ABASE")
		assert.equal(uint256BO0kwMR, BigInt("15"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressjtomylB, addressUioP98, uintKZqo75K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressPnWyonZ = accounts[3]
		const addressxl2lQf = accounts[2]
		const uintufdOvQY = BigInt("1877")
		const uintUirjVA = BigInt("274")
		const uintCPPMMmM = BigInt("39")
		const addressFiJx4ny = accounts[4]
		const addressJ14CxD4 = accounts[5]
		const addressM6Jk1gF = accounts[2]
		const addressVEFi1jd = accounts[5]
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressxl2lQf, addressPnWyonZ, {from: accounts[4]});
		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
		const uint256PROlpo = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintufdOvQY, {from: accounts[1]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintUirjVA, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressJ14CxD4, addressFiJx4ny, uintCPPMMmM, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressVEFi1jd, addressM6Jk1gF, {from: accounts[5]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256PROlpo, BigInt("95"))
		assert.equal(uint256VmIaQY4, BigInt("0"))
		assert.equal(uint256xFmYy6t, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressJ14CxD4, addressFiJx4ny, uintCPPMMmM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressC1ifEw = accounts[3]
		const addressdvYSBG = accounts[2]
		const uintz7m6u8 = BigInt("1777")
		const addressCXshXuv = accounts[0]
		const uintQIUcq7C = BigInt("289")
		const uintU39esLP = BigInt("1206")
		const uintBvEILmY = BigInt("39")
		const addressgwHzTY7 = accounts[4]
		const addressOvK5sO9 = accounts[5]
		const addressvhHem45 = accounts[2]
		const addressz69pw9c = accounts[5]
		const uintxCESqvL = BigInt("1017")
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressdvYSBG, addressC1ifEw, {from: accounts[4]});
		const boollNRwYHF = await AntiBaseProtocolM4n1OLQ.approve.call(addressCXshXuv, uintz7m6u8, {from: accounts[3]});
		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintQIUcq7C, {from: accounts[2]});
//		const uint256IkKvw5m = await AntiBaseProtocolM4n1OLQ.burn.call(uintU39esLP, {from: accounts[1]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressOvK5sO9, addressgwHzTY7, uintBvEILmY, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressz69pw9c, addressvhHem45, {from: accounts[5]});
//		const uint256GRAoO9u = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintxCESqvL, {from: accounts[1]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(boollNRwYHF, true)
		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256VmIaQY4, BigInt("0"))
		assert.equal(uint256xFmYy6t, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolM4n1OLQ.burn.call(uintU39esLP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressoBS9wRQ = accounts[4]
		const addressnf0MthQ = accounts[2]
		const uintrR1w9GR = BigInt("1877")
		const uintWXZDdEV = BigInt("274")
		const addressoVUKSij = accounts[2]
		const addressmNUNg3i = accounts[5]
		const uint8dEdwK06 = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[3]});
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressnf0MthQ, addressoBS9wRQ, {from: accounts[4]});
		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
		const uint256PROlpo = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintrR1w9GR, {from: accounts[1]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintWXZDdEV, {from: accounts[2]});
		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressmNUNg3i, addressoVUKSij, {from: accounts[5]});
		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256PROlpo, BigInt("95"))
		assert.equal(uint256VmIaQY4, BigInt("0"))
		assert.equal(uint256ssupm1, BigInt("0"))
		assert.equal(uint256xFmYy6t, BigInt("31250000000000000000"))
		assert.equal(uint88xm6CB, BigInt("18"))
		assert.equal(uint8dEdwK06, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolrBTwWG2 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintbN2TBT = BigInt("446")
		const addressSP6gkEa = accounts[1]
		const uintdZMkeG5 = BigInt("1604")
		const addressuNaHE0F = accounts[2]
		const uintfhkMkLq = BigInt("1853")
		const boolZQE4Ord = await AntiBaseProtocolrBTwWG2.increaseAllowance.call(addressSP6gkEa, uintbN2TBT, {from: "0x0000000000000000000000000000000000000001"});
//		const addressf156GZh = await AntiBaseProtocolrBTwWG2.burnFrom.call(addressuNaHE0F, uintdZMkeG5, {from: accounts[3]});
//		const uint256yjgZ5pM = await AntiBaseProtocolrBTwWG2.findRewardFee.call(uintfhkMkLq, {from: accounts[0]});

		assert.equal(boolZQE4Ord, true)
		await expect(AntiBaseProtocolrBTwWG2.burnFrom.call(addressuNaHE0F, uintdZMkeG5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressj0d70PW = accounts[3]
		const addressG69W70j = accounts[2]
		const uintESmi4Dt = BigInt("1")
		const addressZbGVSby = accounts[1]
		const uintLDb9sar = BigInt("289")
		const uintrgRARa = BigInt("39")
		const addressakZi9C2 = accounts[4]
		const addressg1ZTkh3 = accounts[5]
		const addressIFAUOMB = accounts[2]
		const addresswBihN4y = accounts[5]
		const uintiycHUEa = BigInt("1017")
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressG69W70j, addressj0d70PW, {from: accounts[4]});
		const stringW4dIFbm = await AntiBaseProtocolM4n1OLQ.name.call({from: accounts[0]});
		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
//		const boolBXnRVG = await AntiBaseProtocolM4n1OLQ.transfer.call(addressZbGVSby, uintESmi4Dt, {from: accounts[4]});
//		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintLDb9sar, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressg1ZTkh3, addressakZi9C2, uintrgRARa, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addresswBihN4y, addressIFAUOMB, {from: accounts[5]});
//		const uint256GRAoO9u = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintiycHUEa, {from: accounts[1]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(stringW4dIFbm, "https://t.me/antibaseprotocol")
		assert.equal(uint256VmIaQY4, BigInt("0"))
		assert.equal(uint256xFmYy6t, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolM4n1OLQ.transfer.call(addressZbGVSby, uintESmi4Dt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressF4NbiP = accounts[3]
		const addressMmxjOj = accounts[2]
		const addressUoJpXRH = accounts[1]
		const uintyNaF7SG = BigInt("289")
		const uintWxrX4kM = BigInt("39")
		const addressnx0dntb = accounts[4]
		const addressK3MEXjX = accounts[5]
		const addresssOGgHXa = accounts[2]
		const addressxlLdyfD = accounts[5]
		const uint7K8yc9 = BigInt("1017")
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressMmxjOj, addressF4NbiP, {from: accounts[4]});
		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
		const uint256LBkXMwM = await AntiBaseProtocolM4n1OLQ.balanceOf.call(addressUoJpXRH, {from: accounts[0]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintyNaF7SG, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressK3MEXjX, addressnx0dntb, uintWxrX4kM, {from: accounts[1]});
//		await AntiBaseProtocolM4n1OLQ.renounceOwnership.call({from: accounts[0]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressxlLdyfD, addresssOGgHXa, {from: accounts[5]});
//		const uint256GRAoO9u = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uint7K8yc9, {from: accounts[1]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256LBkXMwM, BigInt("0"))
		assert.equal(uint256VmIaQY4, BigInt("0"))
		assert.equal(uint256xFmYy6t, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressK3MEXjX, addressnx0dntb, uintWxrX4kM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addresshB9suUf = accounts[3]
		const addressWmTMuDb = accounts[2]
		const addressV7flKu = accounts[5]
		const addressYQt2k0K = accounts[3]
		const uintOnlJNkD = BigInt("0")
		const addressghJkhcj = accounts[1]
		const uintGPsK6qU = BigInt("289")
		const uintd4NFMDp = BigInt("39")
		const addressuoXpMXV = accounts[4]
		const addresszlCMrlq = accounts[5]
		const addressPyI8ECZ = accounts[2]
		const addresso2dTQb = accounts[5]
		const uintUkqFpL6 = BigInt("1017")
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressWmTMuDb, addresshB9suUf, {from: accounts[4]});
		const stringW4dIFbm = await AntiBaseProtocolM4n1OLQ.name.call({from: accounts[0]});
		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
		const uint256qIaMHtQ = await AntiBaseProtocolM4n1OLQ.allowance.call(addressYQt2k0K, addressV7flKu, {from: accounts[1]});
		const boolBXnRVG = await AntiBaseProtocolM4n1OLQ.transfer.call(addressghJkhcj, uintOnlJNkD, {from: accounts[4]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintGPsK6qU, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addresszlCMrlq, addressuoXpMXV, uintd4NFMDp, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addresso2dTQb, addressPyI8ECZ, {from: accounts[5]});
//		const uint256GRAoO9u = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintUkqFpL6, {from: accounts[1]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(boolBXnRVG, true)
		assert.equal(stringW4dIFbm, "https://t.me/antibaseprotocol")
		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256VmIaQY4, BigInt("0"))
		assert.equal(uint256qIaMHtQ, BigInt("0"))
		assert.equal(uint256xFmYy6t, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addresszlCMrlq, addressuoXpMXV, uintd4NFMDp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressHNEcHWg = accounts[3]
		const addresszgQta5A = accounts[2]
		const uintvmp05yL = BigInt("1868")
		const addressjTtUvdH = accounts[3]
		const uintOSZri2W = BigInt("42")
		const addressDHuqg3Z = accounts[2]
		const uintWnzmH8Y = BigInt("1")
		const addresso1OrkKB = accounts[1]
		const uintdF998GX = BigInt("289")
		const uintVdi9p5 = BigInt("39")
		const addresszbouH8G = accounts[4]
		const addresscCW0Sdc = accounts[5]
		const uintjCc2yG = BigInt("763")
		const addressyBclXtW = accounts[2]
		const uintMGO5XZU = BigInt("1017")
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addresszgQta5A, addressHNEcHWg, {from: accounts[4]});
		const stringW4dIFbm = await AntiBaseProtocolM4n1OLQ.name.call({from: accounts[0]});
		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
		const boolhENHnBt = await AntiBaseProtocolM4n1OLQ.approve.call(addressjTtUvdH, uintvmp05yL, {from: accounts[2]});
//		const addressfOrXpyk = await AntiBaseProtocolM4n1OLQ.burnFrom.call(addressDHuqg3Z, uintOSZri2W, {from: accounts[4]});
//		const boolBXnRVG = await AntiBaseProtocolM4n1OLQ.transfer.call(addresso1OrkKB, uintWnzmH8Y, {from: accounts[4]});
//		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintdF998GX, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addresscCW0Sdc, addresszbouH8G, uintVdi9p5, {from: accounts[1]});
//		const addressRIc9QtD = await AntiBaseProtocolM4n1OLQ._mint.call(addressyBclXtW, uintjCc2yG, {from: accounts[4]});
//		const uint256GRAoO9u = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintMGO5XZU, {from: accounts[1]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(boolhENHnBt, true)
		assert.equal(stringW4dIFbm, "https://t.me/antibaseprotocol")
		assert.equal(uint256VmIaQY4, BigInt("0"))
		assert.equal(uint256xFmYy6t, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolM4n1OLQ.burnFrom.call(addressDHuqg3Z, uintOSZri2W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressvprp6hf = accounts[3]
		const addressawJpPKN = accounts[2]
		const addressBB7m8Ox = accounts[5]
		const addressro4XjkR = accounts[3]
		const uintPHPYuGd = BigInt("0")
		const addressH3JRDu = accounts[1]
		const uintfLYOWbq = BigInt("289")
		const uintnYkUFtK = BigInt("39")
		const addressp8tQW3u = accounts[4]
		const addressYpaKDme = accounts[5]
		const addressbVau02p = accounts[2]
		const addresszrF5BSp = accounts[5]
		const uintardTGj3 = BigInt("1017")
//		await AntiBaseProtocolM4n1OLQ.renounceOwnership.call({from: accounts[2]});
//		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressawJpPKN, addressvprp6hf, {from: accounts[4]});
//		const stringW4dIFbm = await AntiBaseProtocolM4n1OLQ.name.call({from: accounts[0]});
//		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
//		const uint256qIaMHtQ = await AntiBaseProtocolM4n1OLQ.allowance.call(addressro4XjkR, addressBB7m8Ox, {from: accounts[1]});
//		const boolBXnRVG = await AntiBaseProtocolM4n1OLQ.transfer.call(addressH3JRDu, uintPHPYuGd, {from: accounts[4]});
//		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintfLYOWbq, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressYpaKDme, addressp8tQW3u, uintnYkUFtK, {from: accounts[1]});
//		await AntiBaseProtocolM4n1OLQ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addresszrF5BSp, addressbVau02p, {from: accounts[5]});
//		const uint256GRAoO9u = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintardTGj3, {from: accounts[1]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		await expect(AntiBaseProtocolM4n1OLQ.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolng7uFNg = await AntiBaseProtocol.new({from: accounts[2]});
		const uintWtF6SFm = BigInt("0")
		const addressDgLmHCv = accounts[2]
		const uintgA5NZX = BigInt("357")
		const addressShy2uZg = "0x0000000000000000000000000000000000000000"
		const booltnq1oqM = await AntiBaseProtocolng7uFNg.transfer.call(addressDgLmHCv, uintWtF6SFm, {from: accounts[4]});
//		const addressfKSWDBD = await AntiBaseProtocolng7uFNg.burnFrom.call(addressShy2uZg, uintgA5NZX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltnq1oqM, true)
		await expect(AntiBaseProtocolng7uFNg.burnFrom.call(addressShy2uZg, uintgA5NZX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressZle6SC = accounts[3]
		const addressOAYupaC = accounts[2]
		const uintP3bZtdq = BigInt("2028")
		const addressEycMsdw = accounts[5]
		const addresszRyOYl6 = accounts[3]
		const uinthqsNbEX = BigInt("1954")
		const addressoglE22G = accounts[3]
		const uintNIYPqpa = BigInt("0")
		const addressvAfgr2E = accounts[1]
		const uintWLfPwfQ = BigInt("289")
		const uinttNMfYV = BigInt("39")
		const addressyg0MsYK = accounts[5]
		const addressAcktVhL = accounts[5]
		const addressnty2XNw = accounts[2]
		const addresskD538yq = accounts[5]
		const uintfn8C8Oz = BigInt("1017")
		const uintdnYXn7 = BigInt("1208")
		const addressCXPG7a4 = accounts[3]
		const uint256VmIaQY4 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressOAYupaC, addressZle6SC, {from: accounts[4]});
		const stringW4dIFbm = await AntiBaseProtocolM4n1OLQ.name.call({from: accounts[0]});
		const uint256xFmYy6t = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
		const uint256o1PWA5Z = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintP3bZtdq, {from: accounts[2]});
		const uint256qIaMHtQ = await AntiBaseProtocolM4n1OLQ.allowance.call(addresszRyOYl6, addressEycMsdw, {from: accounts[1]});
		const boolBdWrZb = await AntiBaseProtocolM4n1OLQ.transfer.call(addressoglE22G, uinthqsNbEX, {from: accounts[2]});
		const boolBXnRVG = await AntiBaseProtocolM4n1OLQ.transfer.call(addressvAfgr2E, uintNIYPqpa, {from: accounts[4]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintWLfPwfQ, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressAcktVhL, addressyg0MsYK, uinttNMfYV, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addresskD538yq, addressnty2XNw, {from: accounts[5]});
//		const uint256GRAoO9u = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintfn8C8Oz, {from: accounts[1]});
//		const boolV8vQoQ = await AntiBaseProtocolM4n1OLQ.increaseAllowance.call(addressCXPG7a4, uintdnYXn7, {from: accounts[0]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(boolBXnRVG, true)
		assert.equal(boolBdWrZb, true)
		assert.equal(stringW4dIFbm, "https://t.me/antibaseprotocol")
		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256VmIaQY4, BigInt("0"))
		assert.equal(uint256o1PWA5Z, BigInt("315"))
		assert.equal(uint256qIaMHtQ, BigInt("0"))
		assert.equal(uint256xFmYy6t, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressAcktVhL, addressyg0MsYK, uinttNMfYV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolng7uFNg = await AntiBaseProtocol.new({from: accounts[2]});
		const uintuLWKbq = BigInt("0")
		const address1VSqho = accounts[2]
		const uintPApwg7o = BigInt("1581")
		const addressV4VEv6T = accounts[1]
		const uint4u3QZg = BigInt("285")
		const addressp6fsUcV = accounts[2]
		const uintuXSsCSd = BigInt("357")
		const addressl7BGaBs = "0x0000000000000000000000000000000000000001"
		const addresspmgHFFr = await AntiBaseProtocolng7uFNg.owner.call({from: accounts[3]});
		const booltnq1oqM = await AntiBaseProtocolng7uFNg.transfer.call(address1VSqho, uintuLWKbq, {from: accounts[4]});
		const uint8laZg0ky = await AntiBaseProtocolng7uFNg.decimals.call({from: accounts[4]});
//		const addresse4yPUlQ = await AntiBaseProtocolng7uFNg._mint.call(addressV4VEv6T, uintPApwg7o, {from: accounts[0]});
//		const addressmrwDtXG = await AntiBaseProtocolng7uFNg._mint.call(addressp6fsUcV, uint4u3QZg, {from: accounts[0]});
//		const addressfKSWDBD = await AntiBaseProtocolng7uFNg.burnFrom.call(addressl7BGaBs, uintuXSsCSd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresspmgHFFr, 0xa15c8CaA453884872dbbf25D811C9D9c72DE2583)
		assert.equal(booltnq1oqM, true)
		assert.equal(uint8laZg0ky, BigInt("18"))
		await expect(AntiBaseProtocolng7uFNg._mint.call(addressV4VEv6T, uintPApwg7o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintkd4VmQ7 = BigInt("260")
		const addressjnoVGv = accounts[0]
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintkd4VmQ7, {from: accounts[2]});
		const addressLcsJKyg = await AntiBaseProtocolM4n1OLQ.transferOwnership.call(addressjnoVGv, {from: accounts[2]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolng7uFNg = await AntiBaseProtocol.new({from: accounts[2]});
		const uintNhmQLLP = BigInt("1072")
		const addresshj8Hoq = "0x00000000000000000000000000000000000000-1"
		const uintRDDcYy6 = BigInt("0")
		const addressHIY7nvH = accounts[2]
		const uintsM5oM4u = BigInt("375")
		const addressKoNSWQo = "0x0000000000000000000000000000000000000001"
//		const boolxGgncM3 = await AntiBaseProtocolng7uFNg.transfer.call(addresshj8Hoq, uintNhmQLLP, {from: accounts[1]});
//		await AntiBaseProtocolng7uFNg.requestGas.call({from: accounts[1]});
//		const booltnq1oqM = await AntiBaseProtocolng7uFNg.transfer.call(addressHIY7nvH, uintRDDcYy6, {from: accounts[4]});
//		const addressfKSWDBD = await AntiBaseProtocolng7uFNg.burnFrom.call(addressKoNSWQo, uintsM5oM4u, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolng7uFNg.transfer.call(addresshj8Hoq, uintNhmQLLP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})