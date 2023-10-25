const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManageriqkTCx7 = await vnxManager.new({from: accounts[3]});
		const addressqrdMLq = accounts[3]
		const addressMxVnjGv = accounts[2]
		const boolb7ejEPM = await vnxManageriqkTCx7.isAdmin.call({from: accounts[2]});
		const addressT7H3hUx = await vnxManageriqkTCx7.owner.call({from: accounts[3]});
		const boolfUvkvIi = await vnxManageriqkTCx7.transferContractOwnership.call(addressMxVnjGv, addressqrdMLq, {from: accounts[2]});
		await vnxManageriqkTCx7.renounceOwnership.call({from: accounts[2]});
		const booloG8Kkl3 = await vnxManageriqkTCx7.isOwner.call({from: accounts[3]});
		await vnxManageriqkTCx7.onlyAdmin.call({from: accounts[4]});

		assert.equal(addressT7H3hUx, 0x3f98fE091EdA7a3DAf7a41Acc88005094D6F355C)
		assert.equal(boolb7ejEPM, false)
		await expect(vnxManageriqkTCx7.transferContractOwnership.call(addressMxVnjGv, addressqrdMLq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerUK6H3Rr = await vnxManager.new({from: accounts[1]});
		const uintUJk5xM3 = BigInt("26")
		const addressDHoJR5r = accounts[4]
		const addressDTaQfLe = accounts[5]
		const boolkhGchVx = await vnxManagerUK6H3Rr.hasRole.call(addressDHoJR5r, uintUJk5xM3, {from: accounts[0]});
		const addressqYhtGub = await vnxManagerUK6H3Rr.transferOwnership.call(addressDTaQfLe, {from: accounts[4]});

		assert.equal(boolkhGchVx, false)
		await expect(vnxManagerUK6H3Rr.transferOwnership.call(addressDTaQfLe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerj5kP7C = await vnxManager.new({from: accounts[0]});
		const addresso3MXTYW = accounts[5]
		const addresshefPTN9 = accounts[3]
		const uintnAKUlM8 = BigInt("1923")
		const addresspDK3Lmd = accounts[0]
		await vnxManagerj5kP7C.onlyOwner.call({from: accounts[0]});
		const boolBLqvsZQ = await vnxManagerj5kP7C.transferContractOwnership.call(addresshefPTN9, addresso3MXTYW, {from: accounts[2]});
		const boolUzXI4CI = await vnxManagerj5kP7C.hasRole.call(addresspDK3Lmd, uintnAKUlM8, {from: accounts[4]});

		await expect(vnxManagerj5kP7C.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageriHAButT = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUu6vp07 = BigInt("920")
		const addressp35VJiD = accounts[3]
		const stringeKzrxFG = "0Pzf9jPHggHetRzGbGQA4uboKzOlJdTDm7RHgSC1"
		await vnxManageriHAButT.onlyAdmin.call({from: accounts[4]});
		await vnxManageriHAButT.onlyAdmin.call({from: accounts[2]});
		const addressQgPLm8u = await vnxManageriHAButT.addBearer.call(addressp35VJiD, uintUu6vp07, {from: accounts[1]});
		const uint256L6J7KGW = await vnxManageriHAButT.addRootRole.call(stringeKzrxFG, {from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerK5fNz0m = await vnxManager.new({from: accounts[4]});
		const addressqzIsOY1 = accounts[3]
		const addresszity6nd = accounts[2]
		const uint256F5nLPiA = await vnxManagerK5fNz0m.totalRoles.call({from: accounts[2]});
		const boolSxmKIhK = await vnxManagerK5fNz0m.transferContractOwnership.call(addresszity6nd, addressqzIsOY1, {from: accounts[3]});

		assert.equal(uint256F5nLPiA, BigInt("1"))
		await expect(vnxManagerK5fNz0m.transferContractOwnership.call(addresszity6nd, addressqzIsOY1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNE1Lzm = await vnxManager.new({from: accounts[1]});
		const uintGFZVjTR = BigInt("550")
		const addressbaYGEqq = accounts[1]
		const addressfo5UXM1 = await vnxManagerNE1Lzm.removeBearer.call(addressbaYGEqq, uintGFZVjTR, {from: accounts[2]});
		const boolacvOlSW = await vnxManagerNE1Lzm.isAdmin.call({from: accounts[0]});

		await expect(vnxManagerNE1Lzm.removeBearer.call(addressbaYGEqq, uintGFZVjTR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNE1Lzm = await vnxManager.new({from: accounts[1]});
		const uintwdHyFiQ = BigInt("1412")
		const stringVDnzkIv = "dU"
		const uintDuliPRR = BigInt("550")
		const addressZi1B1E8 = accounts[1]
		const uintp8aPGcx = BigInt("1044")
		const stringkRNoAm = "XXdnqnb3I2u6JdPlFsr9XieqK"
		const addressJ9tKAyM = accounts[1]
		const addressDWs3kFY = accounts[1]
		const uint256lO9adeD = await vnxManagerNE1Lzm.addRole.call(stringVDnzkIv, uintwdHyFiQ, {from: accounts[5]});
		const addressfo5UXM1 = await vnxManagerNE1Lzm.removeBearer.call(addressZi1B1E8, uintDuliPRR, {from: accounts[2]});
		const uint256i2TyzXk = await vnxManagerNE1Lzm.addRole.call(stringkRNoAm, uintp8aPGcx, {from: accounts[5]});
		await vnxManagerNE1Lzm.onlyAdmin.call({from: accounts[0]});
		const booldR00RxF = await vnxManagerNE1Lzm.transferContractOwnership.call(addressDWs3kFY, addressJ9tKAyM, {from: accounts[1]});
		const boolacvOlSW = await vnxManagerNE1Lzm.isAdmin.call({from: accounts[0]});

		await expect(vnxManagerNE1Lzm.addRole.call(stringVDnzkIv, uintwdHyFiQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNE1Lzm = await vnxManager.new({from: accounts[1]});
		const uintWUvmqlC = BigInt("435")
		const addresssJK0d1g = accounts[0]
		const uintkAkAo7X = BigInt("550")
		const addressdiQwK0n = accounts[1]
		const addressemP2rre = accounts[0]
		const addressw6pfOX = accounts[1]
		const addressM0cq7GK = await vnxManagerNE1Lzm.addBearer.call(addresssJK0d1g, uintWUvmqlC, {from: accounts[2]});
		const addressfo5UXM1 = await vnxManagerNE1Lzm.removeBearer.call(addressdiQwK0n, uintkAkAo7X, {from: accounts[2]});
		const booldR00RxF = await vnxManagerNE1Lzm.transferContractOwnership.call(addressw6pfOX, addressemP2rre, {from: accounts[1]});
		const boolacvOlSW = await vnxManagerNE1Lzm.isAdmin.call({from: accounts[0]});

		await expect(vnxManagerNE1Lzm.addBearer.call(addresssJK0d1g, uintWUvmqlC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerl5y0Hzo = await vnxManager.new({from: accounts[1]});
		const uintSN2gPw = BigInt("1665")
		const stringAvbsrcX = "niCft7qeqFwdJ0U3TQ4QDqD0z6VajZUvKY6yq"
		const stringvvWzwHE = "T1L9kvSwQNV6dikXAVsjlmT8oxGYrVLEuS2ipXRa57ezp3obnBLa6"
		await vnxManagerl5y0Hzo.renounceOwnership.call({from: accounts[1]});
		const uint256K1C7g9N = await vnxManagerl5y0Hzo.addRole.call(stringAvbsrcX, uintSN2gPw, {from: accounts[1]});
		const uint256c1eBq8O = await vnxManagerl5y0Hzo.addRootRole.call(stringvvWzwHE, {from: accounts[0]});
		const boolkv6psmV = await vnxManagerl5y0Hzo.isAdmin.call({from: accounts[3]});
		await vnxManagerl5y0Hzo.renounceOwnership.call({from: accounts[2]});
		const addressDMTWndY = await vnxManagerl5y0Hzo.owner.call({from: accounts[0]});

		await expect(vnxManagerl5y0Hzo.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNE1Lzm = await vnxManager.new({from: accounts[1]});
		const addressQK8XXp = accounts[0]
		const addressC1Idgob = accounts[1]
		const booldR00RxF = await vnxManagerNE1Lzm.transferContractOwnership.call(addressC1Idgob, addressQK8XXp, {from: accounts[1]});
		const boolacvOlSW = await vnxManagerNE1Lzm.isAdmin.call({from: accounts[0]});

		await expect(vnxManagerNE1Lzm.transferContractOwnership.call(addressC1Idgob, addressQK8XXp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNE1Lzm = await vnxManager.new({from: accounts[1]});
		const address3FCpfu = accounts[1]
		const boolacvOlSW = await vnxManagerNE1Lzm.isAdmin.call({from: accounts[0]});
		const addressoauYbsT = await vnxManagerNE1Lzm.transferOwnership.call(address3FCpfu, {from: accounts[1]});
		const boolal7O17v = await vnxManagerNE1Lzm.isOwner.call({from: accounts[0]});

		assert.equal(boolacvOlSW, false)
		assert.equal(boolal7O17v, false)
	});
})