const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAiIEx5Q5 = await TPA.new({from: accounts[5]});
		const uintSafK0gs = BigInt("1883")
		const addressYGJTcAN = accounts[2]
		const addressTg3Nlht = accounts[0]
		await TPAiIEx5Q5.whenPaused.call({from: accounts[1]});
		const boolUZlmBj = await TPAiIEx5Q5.unlock.call(addressYGJTcAN, uintSafK0gs, {from: accounts[1]});
		const addressGaPvaAe = await TPAiIEx5Q5.notFrozen.call(addressTg3Nlht, {from: accounts[2]});
		const stringtE6FoZS = await TPAiIEx5Q5.name.call({from: accounts[3]});

		await expect(TPAiIEx5Q5.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACdn5QxU = await TPA.new({from: accounts[1]});
		const uint4u3qlw = BigInt("943")
		const uintBTFxUrp = BigInt("277")
		const addresswsX5z3 = "0x0000000000000000000000000000000000000001"
		const uintevauRGC = BigInt("1762")
		const addressHh3bN8m = accounts[5]
		const addressuISTBOm = accounts[4]
		const addressgko70x9 = "0x0000000000000000000000000000000000000001"
		const boolbVyHhY3 = await TPACdn5QxU.lock.call(addresswsX5z3, uintBTFxUrp, uint4u3qlw, {from: accounts[1]});
		const boolc6hdtO = await TPACdn5QxU.transferFrom.call(addressuISTBOm, addressHh3bN8m, uintevauRGC, {from: "0x0000000000000000000000000000000000000001"});
		await TPACdn5QxU.whenPaused.call({from: accounts[4]});
		const uint256MFKRp6y = await TPACdn5QxU.balanceOf.call(addressgko70x9, {from: accounts[4]});

		await expect(TPACdn5QxU.lock.call(addresswsX5z3, uintBTFxUrp, uint4u3qlw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringuilzkC = "fza95EOgxeMJbko1DJlCPiL5lb2m2PidoNnFcANDyHde2qzKemNEbXvfG45C8ZT0BzxxwTu2SScNySnw2"
		const stringxZ8uwO0 = "zVaqH7uWZCQ8gesTi3iolBn9bqqmraIJ4v7aKUpRbnJUWDyQni"
		const uintwkGrOjS = BigInt("39")
		const TPAO77BCsw = await TPA.new(stringuilzkC, stringxZ8uwO0, uintwkGrOjS, {from: accounts[1]});
		const addressqxHxx4l = accounts[2]
		const uintWEaAQN = BigInt("864")
		const addressjMIU8u8 = accounts[0]
		const uintS36loM6 = BigInt("1437")
		const addressBbSK0pW = accounts[5]
		const addressOtmXueE = accounts[0]
		const addressSPC0b4e = await TPAO77BCsw.removeAdmin.call(addressqxHxx4l, {from: accounts[5]});
		const booldR3rxcg = await TPAO77BCsw.transfer.call(addressjMIU8u8, uintWEaAQN, {from: accounts[4]});
		const boolKHs34f = await TPAO77BCsw.unlock.call(addressBbSK0pW, uintS36loM6, {from: accounts[3]});
		await TPAO77BCsw.whenPaused.call({from: accounts[3]});
		const addressu9ihvTE = await TPAO77BCsw.notFrozen.call(addressOtmXueE, {from: accounts[1]});
		await TPAO77BCsw.whenNotPaused.call({from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAPuu9lay = await TPA.new({from: accounts[3]});
		const uintsJurtN2 = BigInt("1828")
		const addressIa1OIp9 = accounts[1]
		const addressrXw8Hm2 = accounts[1]
		const uintFzJUjA = BigInt("619")
		const addressi8oFYn = accounts[1]
		const uint6nb0tk = BigInt("611")
		const addressSg6Y6ZK = accounts[3]
		const boolCLdWUj4 = await TPAPuu9lay.approve.call(addressIa1OIp9, uintsJurtN2, {from: "0x0000000000000000000000000000000000000001"});
		const addressqbLYrGa = await TPAPuu9lay.addAdmin.call(addressrXw8Hm2, {from: accounts[4]});
		const boolPoy8QwX = await TPAPuu9lay.unlock.call(addressi8oFYn, uintFzJUjA, {from: accounts[3]});
		const boolAnnyAM6 = await TPAPuu9lay.increaseAllowance.call(addressSg6Y6ZK, uint6nb0tk, {from: accounts[3]});

		assert.equal(boolCLdWUj4, true)
		await expect(TPAPuu9lay.addAdmin.call(addressrXw8Hm2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAS4USrLJ = await TPA.new({from: accounts[4]});
		const uintJliKk4 = BigInt("1437")
		const addressA7HYfl = accounts[0]
		const uintOvQ1pkf = BigInt("1485")
		const addressr1MnrK0 = accounts[3]
		const addressYJaXzX = accounts[1]
		const addressTD6VlbW = "0x0000000000000000000000000000000000000001"
		const addressp47gVCy = accounts[1]
		const addresswLJXRXm = await TPAS4USrLJ.burnFrom.call(addressA7HYfl, uintJliKk4, {from: accounts[2]});
		const boolAdmosk = await TPAS4USrLJ.transferFrom.call(addressYJaXzX, addressr1MnrK0, uintOvQ1pkf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bA6ygcT = await TPAS4USrLJ.balanceOf.call(addressTD6VlbW, {from: accounts[5]});
		const addressienpZLA = await TPAS4USrLJ.removeAdmin.call(addressp47gVCy, {from: accounts[1]});

		await expect(TPAS4USrLJ.burnFrom.call(addressA7HYfl, uintJliKk4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAPuu9lay = await TPA.new({from: accounts[3]});
		const uintdAnVs2r = BigInt("1828")
		const addresswc0IG83 = accounts[1]
		const uintGmNufhQ = BigInt("619")
		const addresscl1bxPv = accounts[1]
		const uintoNvVsSK = BigInt("611")
		const addressCUyyxI = accounts[3]
		const boolCLdWUj4 = await TPAPuu9lay.approve.call(addresswc0IG83, uintdAnVs2r, {from: "0x0000000000000000000000000000000000000001"});
		const boolPoy8QwX = await TPAPuu9lay.unlock.call(addresscl1bxPv, uintGmNufhQ, {from: accounts[3]});
		const boolAnnyAM6 = await TPAPuu9lay.increaseAllowance.call(addressCUyyxI, uintoNvVsSK, {from: accounts[3]});

		assert.equal(boolCLdWUj4, true)
		await expect(TPAPuu9lay.unlock.call(addresscl1bxPv, uintGmNufhQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAiIEx5Q5 = await TPA.new({from: accounts[5]});
		const addressHHw0rjd = accounts[2]
		const addressPzrAz4S = accounts[4]
		const addressWVtybJH = accounts[4]
		const uintGM6M1lg = BigInt("1883")
		const addressQ6EwR1X = accounts[3]
		const addressueIOKye = accounts[0]
		const uint256KaSpixq = await TPAiIEx5Q5.allowance.call(addressPzrAz4S, addressHHw0rjd, {from: accounts[0]});
		await TPAiIEx5Q5.whenPaused.call({from: accounts[1]});
		const boolvRDggw0 = await TPAiIEx5Q5.isAdmin.call(addressWVtybJH, {from: accounts[4]});
		const boolUZlmBj = await TPAiIEx5Q5.unlock.call(addressQ6EwR1X, uintGM6M1lg, {from: accounts[1]});
		const addressGaPvaAe = await TPAiIEx5Q5.notFrozen.call(addressueIOKye, {from: accounts[2]});
		const stringtE6FoZS = await TPAiIEx5Q5.name.call({from: accounts[3]});

		assert.equal(uint256KaSpixq, BigInt("0"))
		await expect(TPAiIEx5Q5.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAPuu9lay = await TPA.new({from: accounts[3]});
		const uintw0FNJb7 = BigInt("1828")
		const addressVNY7N6 = accounts[1]
		const addresssDprVyl = accounts[1]
		const uint9j0L1Q = BigInt("1308")
		const addressXCqOf9 = accounts[4]
		const uintLhU7yz8 = BigInt("604")
		const addressmBKdrgP = accounts[1]
		const uinttPY7BML = BigInt("611")
		const addressIukoXK = accounts[3]
		const boolCLdWUj4 = await TPAPuu9lay.approve.call(addressVNY7N6, uintw0FNJb7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256I8uyJKY = await TPAPuu9lay.totalSupply.call({from: accounts[2]});
		const addressqbLYrGa = await TPAPuu9lay.addAdmin.call(addresssDprVyl, {from: accounts[4]});
		const boolW7vIpdp = await TPAPuu9lay.decreaseAllowance.call(addressXCqOf9, uint9j0L1Q, {from: accounts[1]});
		const boolPoy8QwX = await TPAPuu9lay.unlock.call(addressmBKdrgP, uintLhU7yz8, {from: accounts[3]});
		const boolAnnyAM6 = await TPAPuu9lay.increaseAllowance.call(addressIukoXK, uinttPY7BML, {from: accounts[3]});

		assert.equal(boolCLdWUj4, true)
		assert.equal(uint256I8uyJKY, BigInt("10000000000000000000000000000"))
		await expect(TPAPuu9lay.addAdmin.call(addresssDprVyl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAPuu9lay = await TPA.new({from: accounts[3]});
		const uintAYpAXEb = BigInt("1828")
		const addresskcr8F3I = accounts[1]
		const uintiQrv4EA = BigInt("132")
		const addressNVY1Iv = accounts[1]
		const uinthYNL1mC = BigInt("611")
		const addressUFGO65q = accounts[3]
		const boolCLdWUj4 = await TPAPuu9lay.approve.call(addresskcr8F3I, uintAYpAXEb, {from: "0x0000000000000000000000000000000000000001"});
		const boolkATc7Sc = await TPAPuu9lay.approve.call(addressNVY1Iv, uintiQrv4EA, {from: accounts[4]});
		const stringsjIkfiS = await TPAPuu9lay.symbol.call({from: accounts[3]});
		const boolAnnyAM6 = await TPAPuu9lay.increaseAllowance.call(addressUFGO65q, uinthYNL1mC, {from: accounts[3]});

		assert.equal(boolAnnyAM6, true)
		assert.equal(boolCLdWUj4, true)
		assert.equal(boolkATc7Sc, true)
		assert.equal(stringsjIkfiS, "TPA")
	});

	it('test for TPA', async () => {
		const TPACdn5QxU = await TPA.new({from: accounts[1]});
		const uintlzPrgIB = BigInt("1762")
		const addressXxOPZud = accounts[5]
		const addressLaVn48M = accounts[4]
		const addressuUzKjIT = "0x0000000000000000000000000000000000000001"
		const boolc6hdtO = await TPACdn5QxU.transferFrom.call(addressLaVn48M, addressXxOPZud, uintlzPrgIB, {from: "0x0000000000000000000000000000000000000001"});
		await TPACdn5QxU.whenPaused.call({from: accounts[4]});
		const uint256MFKRp6y = await TPACdn5QxU.balanceOf.call(addressuUzKjIT, {from: accounts[4]});

		await expect(TPACdn5QxU.transferFrom.call(addressLaVn48M, addressXxOPZud, uintlzPrgIB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAcGSgZWW = await TPA.new({from: accounts[3]});
		const addressLZrf7yU = accounts[1]
		const uintZHzeH3K = BigInt("1889")
		const addressjm35BMs = accounts[3]
		const addressgUcXUUE = accounts[0]
		const addresstVEZCpJ = accounts[0]
		const uint256sZ1hqTR = await TPAcGSgZWW.balanceOf.call(addressLZrf7yU, {from: accounts[4]});
		const booleqCgh78 = await TPAcGSgZWW.transferFrom.call(addressgUcXUUE, addressjm35BMs, uintZHzeH3K, {from: accounts[5]});
		const boolR4VrJN = await TPAcGSgZWW.isOwner.call(addresstVEZCpJ, {from: accounts[1]});
		await TPAcGSgZWW.renounceAdmin.call({from: accounts[3]});

		assert.equal(uint256sZ1hqTR, BigInt("0"))
		await expect(TPAcGSgZWW.transferFrom.call(addressgUcXUUE, addressjm35BMs, uintZHzeH3K, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAcGSgZWW = await TPA.new({from: accounts[3]});
		const addresswIBp8S2 = accounts[1]
		const addressHIn4DjN = accounts[0]
		const uint256sZ1hqTR = await TPAcGSgZWW.balanceOf.call(addresswIBp8S2, {from: accounts[4]});
		const boolR4VrJN = await TPAcGSgZWW.isOwner.call(addressHIn4DjN, {from: accounts[1]});
		await TPAcGSgZWW.renounceAdmin.call({from: accounts[3]});

		assert.equal(boolR4VrJN, false)
		assert.equal(uint256sZ1hqTR, BigInt("0"))
		await expect(TPAcGSgZWW.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACdn5QxU = await TPA.new({from: accounts[1]});
		const uintqBDZh1b = BigInt("251")
		const addressCX5yuoZ = accounts[3]
		const uintSrOE7L9 = BigInt("1762")
		const addresskNVI3CA = accounts[5]
		const addressYcnHbSC = accounts[4]
		const boolBHEtYN = await TPACdn5QxU.decreaseAllowance.call(addressCX5yuoZ, uintqBDZh1b, {from: accounts[3]});
		const boolRY5hJ10 = await TPACdn5QxU.paused.call({from: accounts[0]});
		const boolc6hdtO = await TPACdn5QxU.transferFrom.call(addressYcnHbSC, addresskNVI3CA, uintSrOE7L9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPACdn5QxU.decreaseAllowance.call(addressCX5yuoZ, uintqBDZh1b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAPuu9lay = await TPA.new({from: accounts[3]});
		const uintbwLlsEb = BigInt("1828")
		const addressIYPD3uf = accounts[1]
		const uintFRg2cvh = BigInt("337")
		const addressShJBqYo = accounts[2]
		const uintzXS99A = BigInt("619")
		const addressj9YgR0Y = accounts[1]
		const uintpeBKYfX = BigInt("611")
		const addresshgQZoYf = accounts[3]
		const boolCLdWUj4 = await TPAPuu9lay.approve.call(addressIYPD3uf, uintbwLlsEb, {from: "0x0000000000000000000000000000000000000001"});
		const boolhMKOyID = await TPAPuu9lay.transfer.call(addressShJBqYo, uintFRg2cvh, {from: accounts[0]});
		const boolPoy8QwX = await TPAPuu9lay.unlock.call(addressj9YgR0Y, uintzXS99A, {from: accounts[3]});
		const boolAnnyAM6 = await TPAPuu9lay.increaseAllowance.call(addresshgQZoYf, uintpeBKYfX, {from: accounts[3]});

		assert.equal(boolCLdWUj4, true)
		await expect(TPAPuu9lay.transfer.call(addressShJBqYo, uintFRg2cvh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAGeZaDQp = await TPA.new({from: accounts[3]});
		const addressfm0AML8 = accounts[6]
		const boolhTTgWSW = await TPAGeZaDQp.paused.call({from: accounts[0]});
		await TPAGeZaDQp.unpause.call({from: accounts[1]});
		const boolzS0w9xK = await TPAGeZaDQp.unfreezeAccount.call(addressfm0AML8, {from: accounts[0]});
		const uint256jjH4Osz = await TPAGeZaDQp.totalSupply.call({from: accounts[3]});

		assert.equal(boolhTTgWSW, false)
		await expect(TPAGeZaDQp.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAcGSgZWW = await TPA.new({from: accounts[3]});
		const addressMAdKm3b = accounts[1]
		const addressxoJVzQ8 = accounts[0]
		const uintrxSK8d = BigInt("549")
		const addresszWK0Wi6 = accounts[4]
		const address14basP = accounts[2]
		const uint256sZ1hqTR = await TPAcGSgZWW.balanceOf.call(addressMAdKm3b, {from: accounts[4]});
		const uint8Sv0uikf = await TPAcGSgZWW.decimals.call({from: accounts[3]});
		const boolR4VrJN = await TPAcGSgZWW.isOwner.call(addressxoJVzQ8, {from: accounts[1]});
		await TPAcGSgZWW.renounceAdmin.call({from: accounts[3]});
		const boolfU3nF5 = await TPAcGSgZWW.transferFrom.call(address14basP, addresszWK0Wi6, uintrxSK8d, {from: accounts[0]});

		assert.equal(boolR4VrJN, false)
		assert.equal(uint256sZ1hqTR, BigInt("0"))
		assert.equal(uint8Sv0uikf, BigInt("18"))
		await expect(TPAcGSgZWW.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACdn5QxU = await TPA.new({from: accounts[1]});
		const addressu8ZURBP = "0x0000000000000000000000000000000000000001"
		const uintMK7Rwc6 = BigInt("1585")
		const uintrtGEyoF = BigInt("238")
		const addressWb7vKRP = accounts[3]
		const uintthO1tkm = BigInt("1762")
		const addressqH6VkS = accounts[5]
		const addressZvwatsR = accounts[5]
		const uint256v3GlYLq = await TPACdn5QxU.balanceOf.call(addressu8ZURBP, {from: accounts[5]});
		const boolBDyooZv = await TPACdn5QxU.transferWithLock.call(addressWb7vKRP, uintrtGEyoF, uintMK7Rwc6, {from: accounts[1]});
		const boolc6hdtO = await TPACdn5QxU.transferFrom.call(addressZvwatsR, addressqH6VkS, uintthO1tkm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBDyooZv, true)
		assert.equal(uint256v3GlYLq, BigInt("0"))
		await expect(TPACdn5QxU.transferFrom.call(addressZvwatsR, addressqH6VkS, uintthO1tkm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAcGSgZWW = await TPA.new({from: accounts[3]});
		const addressazkB77P = accounts[2]
		const addressvJSmcAa = "0x0000000000000000000000000000000000000001"
		const uinthtT99vD = BigInt("1765")
		const addressdgZldqb = "0x0000000000000000000000000000000000000001"
		const uintfbBmlee = BigInt("1778")
		const addressKAqxbt = accounts[5]
		const uint256sZ1hqTR = await TPAcGSgZWW.balanceOf.call(addressazkB77P, {from: accounts[4]});
		const uint256SkoqxLE = await TPAcGSgZWW.balanceOf.call(addressvJSmcAa, {from: accounts[4]});
		const stringVywkP8z = await TPAcGSgZWW.name.call({from: accounts[5]});
		const boolKGaEjY4 = await TPAcGSgZWW.unlock.call(addressdgZldqb, uinthtT99vD, {from: accounts[2]});
		const boolBeYW47p = await TPAcGSgZWW.transfer.call(addressKAqxbt, uintfbBmlee, {from: accounts[0]});

		assert.equal(stringVywkP8z, "TPA")
		assert.equal(uint256SkoqxLE, BigInt("0"))
		assert.equal(uint256sZ1hqTR, BigInt("0"))
		await expect(TPAcGSgZWW.unlock.call(addressdgZldqb, uinthtT99vD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACdn5QxU = await TPA.new({from: accounts[1]});
		const uintsV87su = BigInt("1571")
		const uintcjf32ml = BigInt("943")
		const uintyFdG4Ac = BigInt("277")
		const addressNQ9Mddk = accounts[4]
		const uint256jDDrTsD = await TPACdn5QxU.burn.call(uintsV87su, {from: accounts[5]});
		const boolbVyHhY3 = await TPACdn5QxU.lock.call(addressNQ9Mddk, uintyFdG4Ac, uintcjf32ml, {from: accounts[1]});

		await expect(TPACdn5QxU.burn.call(uintsV87su, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACdn5QxU = await TPA.new({from: accounts[1]});
		const addressygT0CzC = accounts[5]
		const address1MqCAr = "0x0000000000000000000000000000000000000003"
		const addresspmeuekf = await TPACdn5QxU.removeAdmin.call(addressygT0CzC, {from: accounts[1]});
		const uint256MFKRp6y = await TPACdn5QxU.balanceOf.call(address1MqCAr, {from: accounts[4]});

		await expect(TPACdn5QxU.removeAdmin.call(addressygT0CzC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAvNG0RnZ = await TPA.new({from: accounts[3]});
		const addressHYwRmZz = accounts[4]
		const addressRKiojI2 = accounts[4]
		const addressVI2ZNLf = accounts[4]
		const uint256B5mOwM = await TPAvNG0RnZ.balanceOf.call(addressHYwRmZz, {from: accounts[0]});
		const addressPd861R9 = await TPAvNG0RnZ.transferOwnership.call(addressRKiojI2, {from: accounts[3]});
		const addressJlqH92R = await TPAvNG0RnZ.notFrozen.call(addressVI2ZNLf, {from: accounts[3]});

		assert.equal(uint256B5mOwM, BigInt("0"))
		await expect(TPAvNG0RnZ.notFrozen.call(addressVI2ZNLf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACdn5QxU = await TPA.new({from: accounts[1]});
		const addressEYCiox3 = accounts[0]
		const addressrn68MFO = accounts[3]
		const addressqZwVii = "0x0000000000000000000000000000000000000003"
		const boolPHLtx0a = await TPACdn5QxU.freezeAccount.call(addressEYCiox3, {from: accounts[1]});
		const addressvz3cC93 = await TPACdn5QxU.notFrozen.call(addressrn68MFO, {from: accounts[1]});
		const uint8f2FvXKf = await TPACdn5QxU.decimals.call({from: accounts[1]});
		const uint256MFKRp6y = await TPACdn5QxU.balanceOf.call(addressqZwVii, {from: accounts[4]});

		assert.equal(boolPHLtx0a, true)
		await expect(TPACdn5QxU.notFrozen.call(addressrn68MFO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})