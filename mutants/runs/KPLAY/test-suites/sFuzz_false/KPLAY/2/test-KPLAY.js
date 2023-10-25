const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const addressOOHMkj4 = "0x0000000000000000000000000000000000000001"
		const addressoXe7JdG = accounts[4]
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addressOOHMkj4, {from: accounts[3]});
		const uint256IhjQpGT = await KPLAYvB5qEL7.lockCount.call(addressoXe7JdG, {from: accounts[3]});

		assert.equal(uint256IhjQpGT, BigInt("0"))
		assert.equal(uint256vveXkB, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYa7cqrY = await KPLAY.new({from: accounts[4]});
		const uintgadC14F = BigInt("637")
		const addresswmdApiD = accounts[1]
		const addressEMRGe9 = accounts[4]
		const addressXy6tXNW = accounts[2]
		const uintyx8ow4i = BigInt("1945")
		const addresse9iySVB = accounts[4]
		const boolL2a02xg = await KPLAYa7cqrY.transfer.call(addresswmdApiD, uintgadC14F, {from: accounts[0]});
		await KPLAYa7cqrY.pause.call({from: accounts[3]});
		const uint256N4QCcy1 = await KPLAYa7cqrY.allowance.call(addressXy6tXNW, addressEMRGe9, {from: accounts[1]});
		await KPLAYa7cqrY.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
		const addressJy6zsD6 = await KPLAYa7cqrY.unlock.call(addresse9iySVB, uintyx8ow4i, {from: accounts[4]});

		await expect(KPLAYa7cqrY.transfer.call(addresswmdApiD, uintgadC14F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCEdZ5oA = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uint2p4QUj = BigInt("815")
		const addressFeqWPms = accounts[0]
		const addressCfdtEQG = accounts[4]
		const uintpMe6DIF = BigInt("1695")
		const addressyYGnABR = accounts[0]
		const addresslGnHqwv = accounts[2]
		const addressB8caq4 = accounts[3]
		const booluZupM7r = await KPLAYCEdZ5oA.transferFrom.call(addressCfdtEQG, addressFeqWPms, uint2p4QUj, {from: accounts[3]});
		const addresswh42ctB = await KPLAYCEdZ5oA.burn.call(addressyYGnABR, uintpMe6DIF, {from: accounts[2]});
		const uint256lbmdlh = await KPLAYCEdZ5oA.allowance.call(addressB8caq4, addresslGnHqwv, {from: accounts[3]});
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const uintiIbQMII = BigInt("268")
		const addressSuPuBUf = accounts[4]
		const addressHpw7VZ3 = accounts[0]
		const uintcifjwv = BigInt("1197")
		const uintgvExZCE = BigInt("289")
		const addressLgb2QlM = accounts[0]
		const uintYexC7Z6 = BigInt("847")
		const addresslMBm0dB = accounts[4]
		const boolk7vSkV3 = await KPLAYwPaDd3O.approve.call(addressSuPuBUf, uintiIbQMII, {from: accounts[0]});
		const uint256heaAv3O = await KPLAYwPaDd3O.balanceOf.call(addressHpw7VZ3, {from: accounts[1]});
		const addressepEVxNb = await KPLAYwPaDd3O.lock.call(addressLgb2QlM, uintgvExZCE, uintcifjwv, {from: accounts[2]});
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addresslMBm0dB, uintYexC7Z6, {from: accounts[3]});

		assert.equal(boolk7vSkV3, true)
		assert.equal(uint256heaAv3O, BigInt("0"))
		await expect(KPLAYwPaDd3O.lock.call(addressLgb2QlM, uintgvExZCE, uintcifjwv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwNCvi9o = await KPLAY.new({from: accounts[4]});
		const addressAWZjqnM = accounts[2]
		const addressB97PfWK = accounts[5]
		const uintxSYS48E = BigInt("965")
		const addressOmtVj5s = accounts[2]
		const addressGa2C5Dr = accounts[2]
		const uint256QhhVBJv = await KPLAYwNCvi9o.allowance.call(addressB97PfWK, addressAWZjqnM, {from: accounts[1]});
		const boolvYonGYQ = await KPLAYwNCvi9o.mint.call(addressOmtVj5s, uintxSYS48E, {from: accounts[1]});
		await KPLAYwNCvi9o.whenNotFrozen.call({from: accounts[2]});
		const addressk3b8PM = await KPLAYwNCvi9o.transferOwnership.call(addressGa2C5Dr, {from: accounts[2]});

		assert.equal(uint256QhhVBJv, BigInt("0"))
		await expect(KPLAYwNCvi9o.mint.call(addressOmtVj5s, uintxSYS48E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHsgHNbe = await KPLAY.new({from: accounts[2]});
		const uintHvRiMzG = BigInt("125")
		const uintNBIFNj = BigInt("2033")
		const addressGiTZgWe = accounts[4]
		const addressqNBj4xT = accounts[1]
		const addressDnjMEGV = accounts[1]
		const addressrz8fSPR = accounts[3]
		const uintcfuoS1F = BigInt("1520")
		const addressrQx6nko = accounts[1]
		const addressIP0e5OQ = accounts[2]
		const uintTaYQo0d = BigInt("11")
		const uintSM5N8uD = BigInt("1597")
		const addressekUrrAu = accounts[2]
		const addressr23na9D = await KPLAYHsgHNbe.lockAfter.call(addressGiTZgWe, uintNBIFNj, uintHvRiMzG, {from: accounts[2]});
		const addressGm3VYQa = await KPLAYHsgHNbe.transferOwnership.call(addressqNBj4xT, {from: accounts[0]});
		const uint256tiqUqdI = await KPLAYHsgHNbe.balanceOf.call(addressDnjMEGV, {from: accounts[2]});
		const boolDNJjCol = await KPLAYHsgHNbe.isFrozen.call(addressrz8fSPR, {from: accounts[1]});
		const boolKuaDUwR = await KPLAYHsgHNbe.transferFrom.call(addressIP0e5OQ, addressrQx6nko, uintcfuoS1F, {from: accounts[0]});
		const boolD0ki7lX = await KPLAYHsgHNbe.transferWithLock.call(addressekUrrAu, uintSM5N8uD, uintTaYQo0d, {from: accounts[3]});

		await expect(KPLAYHsgHNbe.lockAfter.call(addressGiTZgWe, uintNBIFNj, uintHvRiMzG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCpzDemj = await KPLAY.new({from: accounts[1]});
		const addressHblWZut = accounts[0]
		const uinti39ZnXG = BigInt("1343")
		const addressHfqW6Ss = accounts[2]
		const addressBYp1eI = accounts[1]
		const uintRQGeAks = BigInt("1014")
		const addressLJQmtHu = accounts[0]
		const boolxYTulCs = await KPLAYCpzDemj.isFrozen.call(addressHblWZut, {from: accounts[4]});
		const boolSPywnU = await KPLAYCpzDemj.transfer.call(addressHfqW6Ss, uinti39ZnXG, {from: accounts[1]});
		const addresswsHLL0 = await KPLAYCpzDemj.unfreeze.call(addressBYp1eI, {from: accounts[1]});
		const addressTkiaByJ = await KPLAYCpzDemj.burn.call(addressLJQmtHu, uintRQGeAks, {from: accounts[4]});

		assert.equal(boolSPywnU, true)
		assert.equal(boolxYTulCs, false)
		await expect(KPLAYCpzDemj.burn.call(addressLJQmtHu, uintRQGeAks, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCpzDemj = await KPLAY.new({from: accounts[1]});
		const address9hKwxf = accounts[0]
		const uintNcmev1o = BigInt("1343")
		const addressOFFrvNU = accounts[2]
		const addressHEzWxec = accounts[1]
		const uintRsw3ZHe = BigInt("1014")
		const addressWNYmZMj = accounts[1]
		const boolxYTulCs = await KPLAYCpzDemj.isFrozen.call(address9hKwxf, {from: accounts[4]});
		const uint256dVTn98 = await KPLAYCpzDemj.currentTime.call({from: accounts[0]});
		const boolSPywnU = await KPLAYCpzDemj.transfer.call(addressOFFrvNU, uintNcmev1o, {from: accounts[1]});
		const addresswsHLL0 = await KPLAYCpzDemj.unfreeze.call(addressHEzWxec, {from: accounts[1]});
		const addressTkiaByJ = await KPLAYCpzDemj.burn.call(addressWNYmZMj, uintRsw3ZHe, {from: accounts[4]});

		assert.equal(boolSPywnU, true)
		assert.equal(boolxYTulCs, false)
		assert.equal(uint256dVTn98, BigInt("1630227155"))
		await expect(KPLAYCpzDemj.burn.call(addressWNYmZMj, uintRsw3ZHe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const addressufpco6i = "0x0000000000000000000000000000000000000001"
		const uintzjgQNss = BigInt("2003")
		const addressNfnh0kw = accounts[0]
		const address3okOcp = accounts[4]
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addressufpco6i, {from: accounts[3]});
		await KPLAYvB5qEL7.lockState.call(addressNfnh0kw, uintzjgQNss, {from: accounts[2]});
		const uint256IhjQpGT = await KPLAYvB5qEL7.lockCount.call(address3okOcp, {from: accounts[3]});

		assert.equal(uint256vveXkB, BigInt("0"))
		await expect(KPLAYvB5qEL7.lockState.call(addressNfnh0kw, uintzjgQNss, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const uinthfOKbwZ = BigInt("268")
		const addressEIZJVWU = accounts[4]
		const uintooj0rgA = BigInt("393")
		const addresswsHdFdd = accounts[3]
		const addressYMdFmwI = accounts[1]
		const addressakoyARk = accounts[1]
		const addressgbbIXoM = accounts[4]
		const uintYlzs2ed = BigInt("847")
		const addressSszEq8x = accounts[4]
		await KPLAYwPaDd3O.whenNotFrozen.call({from: accounts[4]});
		const boolk7vSkV3 = await KPLAYwPaDd3O.approve.call(addressEIZJVWU, uinthfOKbwZ, {from: accounts[0]});
		await KPLAYwPaDd3O.lockState.call(addresswsHdFdd, uintooj0rgA, {from: accounts[1]});
		const uint256heaAv3O = await KPLAYwPaDd3O.balanceOf.call(addressYMdFmwI, {from: accounts[1]});
		const uint256VTrmsV = await KPLAYwPaDd3O.allowance.call(addressgbbIXoM, addressakoyARk, {from: accounts[2]});
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addressSszEq8x, uintYlzs2ed, {from: accounts[3]});

		await expect(KPLAYwPaDd3O.whenNotFrozen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const uintp6tlxhG = BigInt("268")
		const addressHALuU29 = accounts[4]
		const addresslXXYEaH = accounts[1]
		const uintCfF5inO = BigInt("847")
		const addresstGLvWKy = accounts[4]
		const uint256rKlgw1V = await KPLAYwPaDd3O.totalSupply.call({from: accounts[4]});
		const boolk7vSkV3 = await KPLAYwPaDd3O.approve.call(addressHALuU29, uintp6tlxhG, {from: accounts[0]});
		const uint256heaAv3O = await KPLAYwPaDd3O.balanceOf.call(addresslXXYEaH, {from: accounts[1]});
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addresstGLvWKy, uintCfF5inO, {from: accounts[3]});

		assert.equal(boolPPehW9I, true)
		assert.equal(boolk7vSkV3, true)
		assert.equal(uint256heaAv3O, BigInt("0"))
		assert.equal(uint256rKlgw1V, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const addressPGNdiQ1 = accounts[1]
		const uintk644Z5c = BigInt("268")
		const addressPOPGZcn = accounts[4]
		const addressU2ejD1B = accounts[5]
		const addressh0TL4Mz = accounts[0]
		const uintOIecGFi = BigInt("1459")
		const addressKtaFX8M = accounts[0]
		const addressirbFmP2 = accounts[4]
		const uintfR9AvQj = BigInt("847")
		const addressQrWmOzx = accounts[4]
		const uint256KXiCf4h = await KPLAYwPaDd3O.balanceOf.call(addressPGNdiQ1, {from: accounts[4]});
		const boolk7vSkV3 = await KPLAYwPaDd3O.approve.call(addressPOPGZcn, uintk644Z5c, {from: accounts[0]});
		const addressUdaDpiD = await KPLAYwPaDd3O.transferOwnership.call(addressU2ejD1B, {from: accounts[3]});
		const uint256heaAv3O = await KPLAYwPaDd3O.balanceOf.call(addressh0TL4Mz, {from: accounts[1]});
		const boolmQz85j = await KPLAYwPaDd3O.transferFrom.call(addressirbFmP2, addressKtaFX8M, uintOIecGFi, {from: accounts[1]});
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addressQrWmOzx, uintfR9AvQj, {from: accounts[3]});

		assert.equal(boolk7vSkV3, true)
		assert.equal(uint256KXiCf4h, BigInt("0"))
		assert.equal(uint256heaAv3O, BigInt("0"))
		await expect(KPLAYwPaDd3O.transferFrom.call(addressirbFmP2, addressKtaFX8M, uintOIecGFi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const uintbhgGb21 = BigInt("664")
		const addressNKYtOvw = "0x0000000000000000000000000000000000000001"
		const addressgt3GmfL = "0x0000000000000000000000000000000000000001"
		const addressdFVIT1y = accounts[4]
		const uint256SDFU5x = await KPLAYvB5qEL7.afterTime.call(uintbhgGb21, {from: accounts[1]});
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addressNKYtOvw, {from: accounts[3]});
		const addressHNzSL7a = await KPLAYvB5qEL7.freeze.call(addressgt3GmfL, {from: accounts[0]});
		const uint256IhjQpGT = await KPLAYvB5qEL7.lockCount.call(addressdFVIT1y, {from: accounts[3]});

		assert.equal(uint256SDFU5x, BigInt("1630227801"))
		assert.equal(uint256vveXkB, BigInt("0"))
		await expect(KPLAYvB5qEL7.freeze.call(addressgt3GmfL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const uintuF2m3y2 = BigInt("1957")
		const addressidqrl1r = accounts[3]
		const uintdVRJh2t = BigInt("847")
		const addressRE5RasV = accounts[4]
		const booluRwjLhJ = await KPLAYwPaDd3O.increaseAllowance.call(addressidqrl1r, uintuF2m3y2, {from: accounts[2]});
		await KPLAYwPaDd3O.pause.call({from: accounts[0]});
		await KPLAYwPaDd3O.whenNotFrozen.call({from: accounts[2]});
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addressRE5RasV, uintdVRJh2t, {from: accounts[3]});

		assert.equal(booluRwjLhJ, true)
		await expect(KPLAYwPaDd3O.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const addresspu60hxZ = "0x0000000000000000000000000000000000000000"
		await KPLAYvB5qEL7.unpause.call({from: accounts[4]});
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addresspu60hxZ, {from: accounts[3]});
		await KPLAYvB5qEL7.pause.call({from: accounts[4]});

		await expect(KPLAYvB5qEL7.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const uintdviH3lH = BigInt("828")
		const addressgkjWeHZ = accounts[4]
		const uintE1TccM = BigInt("249")
		const uintHB04pBh = BigInt("2028")
		const addressvoGLsoK = "0x0000000000000000000000000000000000000001"
		await KPLAYwPaDd3O.pause.call({from: accounts[3]});
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addressgkjWeHZ, uintdviH3lH, {from: accounts[3]});
		const addresstG8Qocs = await KPLAYwPaDd3O.lock.call(addressvoGLsoK, uintHB04pBh, uintE1TccM, {from: accounts[4]});

		await expect(KPLAYwPaDd3O.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const uintQXJB3lY = BigInt("244")
		const addressj8uFBeB = accounts[0]
		const uintgtqjZq = BigInt("1067")
		const boolHoulzhe = await KPLAYwPaDd3O.decreaseAllowance.call(addressj8uFBeB, uintQXJB3lY, {from: accounts[0]});
		await KPLAYwPaDd3O.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Nx78zba = await KPLAYwPaDd3O.afterTime.call(uintgtqjZq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYwPaDd3O.decreaseAllowance.call(addressj8uFBeB, uintQXJB3lY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const uint7Cd7gH = BigInt("415")
		const addressUlflz7 = accounts[0]
		const addressyosiBpU = "0x0000000000000000000000000000000000000002"
		const boolFVLbcV4 = await KPLAYvB5qEL7.mint.call(addressUlflz7, uint7Cd7gH, {from: accounts[4]});
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addressyosiBpU, {from: accounts[3]});

		assert.equal(boolFVLbcV4, true)
		assert.equal(uint256vveXkB, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const uinte7xdFWQ = BigInt("847")
		const addressW6MIS6r = accounts[5]
		const uint1BgR9S = BigInt("1679")
		const addressNXliJzQ = accounts[4]
		const addressQ3hkztV = accounts[4]
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addressW6MIS6r, uinte7xdFWQ, {from: accounts[3]});
		const addresskgjG72Y = await KPLAYwPaDd3O.unlock.call(addressNXliJzQ, uint1BgR9S, {from: accounts[3]});
		const boolS09FTs = await KPLAYwPaDd3O.isFrozen.call(addressQ3hkztV, {from: accounts[2]});

		assert.equal(boolPPehW9I, true)
		await expect(KPLAYwPaDd3O.unlock.call(addressNXliJzQ, uint1BgR9S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const addressGEuutnI = "0x0000000000000000000000000000000000000002"
		const uintIeullIX = BigInt("1224")
		const uintd3FA8Dx = BigInt("1283")
		const addressuqZo27v = accounts[4]
		const uint256IInhqg = await KPLAYvB5qEL7.balanceOf.call(addressGEuutnI, {from: accounts[4]});
		const boollIbdpAQ = await KPLAYvB5qEL7.transferWithLockAfter.call(addressuqZo27v, uintd3FA8Dx, uintIeullIX, {from: accounts[4]});

		assert.equal(boollIbdpAQ, true)
		assert.equal(uint256IInhqg, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const uintZWZmfmX = BigInt("827")
		const addressdWXfkg = accounts[4]
		const addressxtU40QB = accounts[4]
		const addressvsSHT6E = accounts[2]
		const uintfugG90x = BigInt("1401")
		const uintDueN1Iz = BigInt("1863")
		const addressZgInRNl = accounts[2]
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addressdWXfkg, uintZWZmfmX, {from: accounts[3]});
		const uint256hCxH00 = await KPLAYwPaDd3O.lockCount.call(addressxtU40QB, {from: accounts[2]});
		const uint256yheqTwC = await KPLAYwPaDd3O.balanceOf.call(addressvsSHT6E, {from: accounts[2]});
		const addressTaKGuLi = await KPLAYwPaDd3O.lock.call(addressZgInRNl, uintDueN1Iz, uintfugG90x, {from: accounts[3]});

		assert.equal(boolPPehW9I, true)
		assert.equal(uint256hCxH00, BigInt("0"))
		assert.equal(uint256yheqTwC, BigInt("0"))
		await expect(KPLAYwPaDd3O.lock.call(addressZgInRNl, uintDueN1Iz, uintfugG90x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const addressGs0aY43 = accounts[4]
		const uintAxdy98 = BigInt("1345")
		const uintuZGov0v = BigInt("750")
		const addresshdQkeY = accounts[0]
		const addressD8RNhX = "0x0000000000000000000000000000000000000002"
		const uint256pRgAi5G = await KPLAYvB5qEL7.balanceOf.call(addressGs0aY43, {from: accounts[2]});
		const boolmr341I = await KPLAYvB5qEL7.transferWithLock.call(addresshdQkeY, uintuZGov0v, uintAxdy98, {from: accounts[4]});
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addressD8RNhX, {from: accounts[3]});

		assert.equal(boolmr341I, true)
		assert.equal(uint256pRgAi5G, BigInt("10000000000000000"))
		assert.equal(uint256vveXkB, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const addressqumHsxW = "0x0000000000000000000000000000000000000000"
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addressqumHsxW, {from: accounts[3]});
		await KPLAYvB5qEL7.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256vveXkB, BigInt("0"))
		await expect(KPLAYvB5qEL7.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwPaDd3O = await KPLAY.new({from: accounts[3]});
		const address663XKW = "0x0000000000000000000000000000000000000001"
		const uintnknM333 = BigInt("847")
		const addressbjSOihl = accounts[5]
		const uinto4fzJDG = BigInt("1836")
		const address5NmE42 = accounts[1]
		const addressesQDeGw = accounts[4]
		const uint256DGxaRLm = await KPLAYwPaDd3O.lockCount.call(address663XKW, {from: accounts[3]});
		const boolPPehW9I = await KPLAYwPaDd3O.transfer.call(addressbjSOihl, uintnknM333, {from: accounts[3]});
		const boolfplm01z = await KPLAYwPaDd3O.approve.call(address5NmE42, uinto4fzJDG, {from: accounts[3]});
		const addresseRHSkf0 = await KPLAYwPaDd3O.freeze.call(addressesQDeGw, {from: accounts[3]});

		assert.equal(boolPPehW9I, true)
		assert.equal(boolfplm01z, true)
		assert.equal(uint256DGxaRLm, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const addressVg9pzJd = "0x0000000000000000000000000000000000000001"
		const uintMnmZkkm = BigInt("1442")
		const addressjaytKaO = accounts[2]
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addressVg9pzJd, {from: accounts[3]});
		const addressvzDHcD4 = await KPLAYvB5qEL7.burn.call(addressjaytKaO, uintMnmZkkm, {from: accounts[4]});

		assert.equal(uint256vveXkB, BigInt("0"))
		await expect(KPLAYvB5qEL7.burn.call(addressjaytKaO, uintMnmZkkm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvB5qEL7 = await KPLAY.new({from: accounts[4]});
		const addresscJwneoT = "0x0000000000000000000000000000000000000002"
		const uinte6974pl = BigInt("1378")
		const addressf0syme = accounts[4]
		const uintnq013dX = BigInt("416")
		const addressMrrud4 = accounts[5]
		const addressYNAhAKW = "0x0000000000000000000000000000000000000001"
		const uint256vveXkB = await KPLAYvB5qEL7.lockCount.call(addresscJwneoT, {from: accounts[3]});
		const addresssBZOxxl = await KPLAYvB5qEL7.burn.call(addressf0syme, uinte6974pl, {from: accounts[4]});
		await KPLAYvB5qEL7.onlyOwner.call({from: accounts[2]});
		const boolsDIeSWW = await KPLAYvB5qEL7.transferFrom.call(addressYNAhAKW, addressMrrud4, uintnq013dX, {from: accounts[2]});

		assert.equal(uint256vveXkB, BigInt("0"))
		await expect(KPLAYvB5qEL7.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})